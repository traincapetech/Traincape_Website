import React, { useState, useEffect, useCallback } from 'react';

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

    if (!currentlyFullscreen && isFullScreen) {
      // User exited fullscreen
      const newViolations = fullScreenViolations + 1;
      setFullScreenViolations(newViolations);
      
      setWarningMessage(`⚠️ Fullscreen violation! (${newViolations}/${maxViolations})`);
      setShowWarning(true);
      
      if (onViolation) {
        onViolation('fullscreen', newViolations);
      }

      // Auto-enter fullscreen after 3 seconds
      setTimeout(() => {
        if (!isTestOver) {
          enterFullscreen();
        }
      }, 3000);
    }
  }, [fullScreenViolations, isFullScreen, maxViolations, onViolation, enterFullscreen, checkFullscreen, isTestOver]);

  // Handle visibility changes (tab switching)
  const handleVisibilityChange = useCallback(() => {
    if (document.hidden && isFullScreen && !isTestOver) {
      const newViolations = tabViolations + 1;
      setTabViolations(newViolations);
      
      setWarningMessage(`⚠️ Tab switching detected! (${newViolations}/${maxViolations})`);
      setShowWarning(true);
      
      if (onViolation) {
        onViolation('tab', newViolations);
      }
    }
  }, [tabViolations, isFullScreen, isTestOver, onViolation]);

  // Disable copy/paste and right-click
  const disableCopyPaste = useCallback((e) => {
    // Prevent Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+A
    if ((e.ctrlKey || e.metaKey) && 
        (e.key === 'c' || e.key === 'x' || e.key === 'v' || e.key === 'a')) {
      e.preventDefault();
      const newViolations = copyViolations + 1;
      setCopyViolations(newViolations);
      
      setWarningMessage(`⚠️ Copy/paste attempt detected! (${newViolations}/${maxViolations})`);
      setShowWarning(true);
      
      if (onViolation) {
        onViolation('copy', newViolations);
      }
      return false;
    }
  }, [copyViolations, onViolation]);

  // Disable right-click context menu
  const disableContextMenu = useCallback((e) => {
    e.preventDefault();
    const newViolations = copyViolations + 1;
    setCopyViolations(newViolations);
    
    setWarningMessage(`⚠️ Right-click disabled! (${newViolations}/${maxViolations})`);
    setShowWarning(true);
    
    if (onViolation) {
      onViolation('contextmenu', newViolations);
    }
    return false;
  }, [copyViolations, onViolation]);

  // Disable text selection
  const disableTextSelection = useCallback((e) => {
    e.preventDefault();
    return false;
  }, []);

  // Start exam function
  const startExam = useCallback(async () => {
    if (isStartingExam) return; // Prevent multiple clicks
    
    setIsStartingExam(true);
    
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
          setExamStarted(true);
          setWarningMessage('✅ Exam started successfully in fullscreen mode!');
          setShowWarning(true);
          // Hide success message after 2 seconds
          setTimeout(() => setShowWarning(false), 2000);
        } else {
          setWarningMessage('⚠️ Please enable fullscreen mode manually to start the exam');
          setShowWarning(true);
        }
      } else {
        setWarningMessage('⚠️ Fullscreen mode is not supported in your browser');
        setShowWarning(true);
      }
    } catch (error) {
      console.error('Error starting exam:', error);
      setWarningMessage('⚠️ Error starting exam. Please try again.');
      setShowWarning(true);
    } finally {
      setIsStartingExam(false);
    }
  }, [enterFullscreen, checkFullscreen, forceExitFullscreen, isStartingExam]);

  // Check for violations and terminate if needed
  useEffect(() => {
    if (totalViolations >= maxViolations && !isTestOver) {
      setIsTestOver(true);
      setWarningMessage('🚫 Exam terminated due to multiple violations!');
      setShowWarning(true);
      
      if (onExamTermination) {
        onExamTermination({
          fullScreenViolations,
          tabViolations,
          copyViolations,
          totalViolations
        });
      }
    }
  }, [totalViolations, maxViolations, isTestOver, fullScreenViolations, tabViolations, copyViolations, onExamTermination]);

  // Set up event listeners
  useEffect(() => {
    // Fullscreen events
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    // Visibility change (tab switching)
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Copy/paste prevention
    document.addEventListener('keydown', disableCopyPaste);
    document.addEventListener('contextmenu', disableContextMenu);
    document.addEventListener('selectstart', disableTextSelection);
    document.addEventListener('dragstart', disableTextSelection);

    // Initialize fullscreen state on component mount
    const currentFullscreen = checkFullscreen();
    setIsFullScreen(currentFullscreen);
    
    // If already in fullscreen, allow exam to start
    if (currentFullscreen && !examStarted) {
      // Check if this is a legitimate fullscreen state (not from navigation)
      setTimeout(() => {
        if (checkFullscreen() && !examStarted) {
          setExamStarted(true);
        }
      }, 1000);
    }

    // Cleanup
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('keydown', disableCopyPaste);
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('selectstart', disableTextSelection);
      document.removeEventListener('dragstart', disableTextSelection);
    };
  }, [handleFullscreenChange, handleVisibilityChange, disableCopyPaste, disableContextMenu, disableTextSelection, checkFullscreen]);

  // Auto-hide warning after 5 seconds
  useEffect(() => {
    if (showWarning) {
      const timer = setTimeout(() => {
        setShowWarning(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showWarning]);

  // Prevent leaving the page
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!isTestOver && examStarted) {
        e.preventDefault();
        e.returnValue = 'Are you sure you want to leave? Your exam progress will be lost.';
        return e.returnValue;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isTestOver, examStarted]);

  // Reset exam state when component unmounts or user navigates away
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && examStarted) {
        // User navigated away during exam
        setWarningMessage('⚠️ You navigated away from the exam page!');
        setShowWarning(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [examStarted]);

  // Manual reset function for edge cases
  const resetExamState = useCallback(() => {
    setExamStarted(false);
    setIsFullScreen(false);
    setFullScreenViolations(0);
    setTabViolations(0);
    setCopyViolations(0);
    setWarningMessage('');
    setShowWarning(false);
    setIsStartingExam(false);
  }, []);

  return (
    <div className="exam-proctor">
      {/* Warning overlay */}
      {showWarning && (
        <div className="fixed top-0 left-0 w-full h-full bg-red-500 bg-opacity-90 z-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Security Violation</h2>
            <p className="text-lg mb-4">{warningMessage}</p>
            <div className="text-sm text-gray-600 mb-4">
              Violations: {totalViolations}/{maxViolations}
            </div>
            {isTestOver && (
              <button 
                onClick={() => window.location.href = '/'}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
              >
                Return to Home
              </button>
            )}
          </div>
        </div>
      )}

      {/* Violation counter (only show during exam) */}
      {!isTestOver && (
        <div className="fixed top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold z-40">
          Violations: {totalViolations}/{maxViolations}
        </div>
      )}

      {/* Fullscreen status indicator */}
      {!isTestOver && (
        <div className={`fixed top-4 left-4 px-3 py-1 rounded-full text-sm font-bold z-40 ${
          isFullScreen ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'
        }`}>
          {isFullScreen ? '🟢 Fullscreen' : '🟡 Windowed'}
        </div>
      )}

      {/* Debug info */}
      {debug && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-3 py-1 rounded text-xs z-40">
          Debug: FS={isFullScreen ? 'Y' : 'N'} | Started={examStarted ? 'Y' : 'N'} | Violations={totalViolations}
        </div>
      )}

      {/* Exam content */}
      <div className={isTestOver ? 'pointer-events-none opacity-50' : ''}>
        {children}
      </div>

      {/* Start exam button (if not in fullscreen or exam not started) */}
      {(!isFullScreen || !examStarted) && !isTestOver && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
            <h2 className="text-2xl font-bold mb-4">Exam Security</h2>
            <p className="mb-6">
              {isFullScreen && !examStarted 
                ? "Fullscreen mode detected. Click below to start the exam."
                : "This exam requires fullscreen mode for security purposes."
              }
            </p>
            <button 
              onClick={startExam}
              disabled={isStartingExam}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                isStartingExam 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isStartingExam ? (
                <span className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Starting Exam...
                </span>
              ) : (
                isFullScreen ? 'Start Exam Now' : 'Start Exam in Fullscreen'
              )}
            </button>
            
            {isFullScreen && !examStarted && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  💡 Tip: If you're already in fullscreen, click "Start Exam Now" to begin.
                </p>
              </div>
            )}
            
            {/* Reset button for edge cases */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={resetExamState}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Reset Exam State
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamProctor;
