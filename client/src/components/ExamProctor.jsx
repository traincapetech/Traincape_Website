import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Maximize, AlertTriangle, XCircle, CheckCircle } from 'lucide-react';

const ExamProctor = ({
  onViolation,
  onExamTermination,
  maxViolations = 3,
  debug = false,
  children
}) => {
  const [fullScreenViolations, setFullScreenViolations] = useState(0);
  const [tabViolations, setTabViolations] = useState(0);
  const [copyViolations, setCopyViolations] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isTestOver, setIsTestOver] = useState(false);
  const [examStarted, setExamStarted] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [isStartingExam, setIsStartingExam] = useState(false);

  // Use refs for critical state to avoid closure staleness in event listeners
  const examStartedRef = useRef(false);
  const gracePeriodRef = useRef(false);

  // Sync state with refs for rendering
  useEffect(() => {
    examStartedRef.current = examStarted;
  }, [examStarted]);

  const totalViolations = fullScreenViolations + tabViolations + copyViolations;

  // Check if fullscreen API is supported
  const isFullscreenSupported = () => {
    return document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled;
  };

  // Enter fullscreen mode
  const enterFullscreen = useCallback(async () => {
    if (!isFullscreenSupported()) {
      console.warn('Fullscreen API not supported');
      return false;
    }

    try {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        await element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        await element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        await element.msRequestFullscreen();
      }
      return true;
    } catch (error) {
      console.error('Error entering fullscreen:', error);
      return false;
    }
  }, []);

  // Exit fullscreen mode
  const exitFullscreen = useCallback(async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        await document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        await document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        await document.msExitFullscreen();
      }
    } catch (error) {
      console.error('Error exiting fullscreen:', error);
    }
  }, []);

  // Check if currently in fullscreen
  const checkFullscreen = useCallback(() => {
    return !!(document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement);
  }, []);

  // Force exit fullscreen (for cleanup)
  const forceExitFullscreen = useCallback(async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        await document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        await document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        await document.msExitFullscreen();
      }
    } catch (error) {
      console.error('Error exiting fullscreen:', error);
    }
  }, []);

  // Handle fullscreen changes
  const handleFullscreenChange = useCallback(() => {
    const currentlyFullscreen = checkFullscreen();
    setIsFullScreen(currentlyFullscreen);

    // CRITICAL: Check refs instead of state to avoid stale closures
    if (!examStartedRef.current) return;
    if (gracePeriodRef.current) return;

    if (!currentlyFullscreen && isFullScreen) {
      // User exited fullscreen (and not in grace period)
      setFullScreenViolations(prev => {
        const newViolations = prev + 1;
        setWarningMessage(`⚠️ Fullscreen violation! (${newViolations}/${maxViolations})`);
        setShowWarning(true);
        if (onViolation) onViolation('fullscreen', newViolations);

        // Check for termination
        if (totalViolations + 1 >= maxViolations) {
          // We'll handle termination in useEffect
        }

        return newViolations;
      });

      // Auto-enter fullscreen after 3 seconds
      setTimeout(() => {
        if (!isTestOver) {
          // We use the raw function to avoid dep cycles if needed, 
          // but here enterFullscreen is useCallback with [] deps so it's fine.
          const element = document.documentElement;
          if (element.requestFullscreen) element.requestFullscreen().catch(() => { });
          else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen().catch(() => { });
          else if (element.mozRequestFullScreen) element.mozRequestFullScreen().catch(() => { });
          else if (element.msRequestFullscreen) element.msRequestFullscreen().catch(() => { });
        }
      }, 3000);
    }
  }, [isFullScreen, maxViolations, onViolation, enterFullscreen, checkFullscreen, isTestOver, totalViolations]);

  // Handle visibility changes (tab switching)
  const handleVisibilityChange = useCallback(() => {
    if (!examStartedRef.current) return;
    if (gracePeriodRef.current) return;

    if (document.hidden && isFullScreen && !isTestOver) {
      setTabViolations(prev => {
        const newViolations = prev + 1;
        setWarningMessage(`⚠️ Tab switching detected! (${newViolations}/${maxViolations})`);
        setShowWarning(true);
        if (onViolation) onViolation('tab', newViolations);
        return newViolations;
      });
    }
  }, [isFullScreen, isTestOver, maxViolations, onViolation]);

  // Disable copy/paste and right-click
  const disableCopyPaste = useCallback((e) => {
    // Prevent Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+A
    if ((e.ctrlKey || e.metaKey) &&
      (e.key === 'c' || e.key === 'x' || e.key === 'v' || e.key === 'a')) {
      e.preventDefault();

      if (!examStartedRef.current) return false;
      if (gracePeriodRef.current) return false;

      setCopyViolations(prev => {
        const newViolations = prev + 1;
        setWarningMessage(`⚠️ Copy/paste attempt detected! (${newViolations}/${maxViolations})`);
        setShowWarning(true);
        if (onViolation) onViolation('copy', newViolations);
        return newViolations;
      });
      return false;
    }
  }, [maxViolations, onViolation]);

  // Disable right-click context menu
  const disableContextMenu = useCallback((e) => {
    e.preventDefault();

    if (!examStartedRef.current) return false;
    if (gracePeriodRef.current) return false;

    setCopyViolations(prev => {
      const newViolations = prev + 1;
      setWarningMessage(`⚠️ Right-click disabled! (${newViolations}/${maxViolations})`);
      setShowWarning(true);
      if (onViolation) onViolation('contextmenu', newViolations);
      return newViolations;
    });
    return false;
  }, [maxViolations, onViolation]);

  // Disable text selection
  const disableTextSelection = useCallback((e) => {
    e.preventDefault();
    return false;
  }, []);

  // Start exam function
  const startExam = useCallback(async () => {
    if (isStartingExam) return; // Prevent multiple clicks

    setIsStartingExam(true);
    gracePeriodRef.current = true; // Use ref for immediate update

    try {
      if (isFullscreenSupported()) {
        // First, ensure we're not in fullscreen to avoid conflicts
        if (checkFullscreen()) {
          await forceExitFullscreen();
          // Wait a moment for the exit to complete
          await new Promise(resolve => setTimeout(resolve, 500));
        }

        const success = await enterFullscreen();
        if (success) {
          setExamStarted(true); // Matches effect to update ref
          examStartedRef.current = true; // Immediate update for safety

          // Reset any initial false violations
          setFullScreenViolations(0);
          setTabViolations(0);
          setCopyViolations(0);

          setWarningMessage('✅ Exam started successfully in fullscreen mode!');
          setShowWarning(true);

          // Hide success message after 2 seconds
          setTimeout(() => setShowWarning(false), 2000);

          // End grace period after 5 seconds
          setTimeout(() => {
            gracePeriodRef.current = false;
            console.log("Grace period ended");
          }, 5000);

        } else {
          setWarningMessage('⚠️ Please enable fullscreen mode manually to start the exam');
          setShowWarning(true);
          gracePeriodRef.current = false;
        }
      } else {
        setWarningMessage('⚠️ Fullscreen mode is not supported in your browser');
        setShowWarning(true);
        gracePeriodRef.current = false;
      }
    } catch (error) {
      console.error('Error starting exam:', error);
      setWarningMessage('⚠️ Error starting exam. Please try again.');
      setShowWarning(true);
      gracePeriodRef.current = false;
    } finally {
      setIsStartingExam(false);
    }
  }, [enterFullscreen, checkFullscreen, forceExitFullscreen, isStartingExam, isFullscreenSupported]);

  // Set up event listeners
  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('keydown', disableCopyPaste);
    document.addEventListener('contextmenu', disableContextMenu);
    document.addEventListener('selectstart', disableTextSelection);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('keydown', disableCopyPaste);
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('selectstart', disableTextSelection);
    };
  }, [handleFullscreenChange, handleVisibilityChange, disableCopyPaste, disableContextMenu, disableTextSelection]);

  // Check for exam termination
  useEffect(() => {
    const total = fullScreenViolations + tabViolations + copyViolations;
    if (total >= maxViolations && !isTestOver && examStarted) {
      setIsTestOver(true);
      if (onExamTermination) {
        onExamTermination();
      }
    }
  }, [fullScreenViolations, tabViolations, copyViolations, maxViolations, onExamTermination, isTestOver, examStarted]);

  return (
    <div className="relative">
      {/* Warning Overlay */}
      {showWarning && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className={`${warningMessage.includes('✅') ? 'bg-green-600' : 'bg-red-600'} text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-bold`}>
            {warningMessage.includes('✅') ? <CheckCircle size={24} /> : <AlertTriangle size={24} />}
            {warningMessage}
          </div>
        </div>
      )}

      {/* Start Exam Modal */}
      {!examStarted && !isTestOver && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Exam Security</h2>
            <p className="text-gray-600 mb-8">
              This exam requires fullscreen mode for security purposes.
              Please ensuring you are ready to take the exam without interruptions.
            </p>
            <div className="space-y-4">
              <button
                onClick={startExam}
                disabled={isStartingExam}
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isStartingExam ? 'Starting...' : 'Start Exam in Fullscreen'}
                <Maximize size={20} />
              </button>

              <button
                onClick={() => window.location.reload()}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Reset Exam State
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className={!examStarted ? 'blur-sm pointer-events-none select-none' : ''}>
        {children}
      </div>

      {/* Debug Info (Only in development) */}
      {debug && (
        <div className="fixed top-0 left-0 bg-black text-white text-xs p-1 z-[60] opacity-50 pointer-events-none">
          Debug: FS={isFullScreen ? 'Y' : 'N'} | Started={examStarted ? 'Y' : 'N'} | Violations={totalViolations}
        </div>
      )}
    </div>
  );
};

export default ExamProctor;
