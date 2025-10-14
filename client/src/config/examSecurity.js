// Exam Security Configuration
export const EXAM_SECURITY_CONFIG = {
  // Maximum violations before exam termination
  MAX_VIOLATIONS: 3,
  
  // Violation types and their weights
  VIOLATION_WEIGHTS: {
    fullscreen: 1,    // Exiting fullscreen mode
    tab: 1,          // Switching tabs
    copy: 1,         // Copy/paste attempts
    contextmenu: 1,  // Right-click attempts
    selection: 0.5   // Text selection attempts
  },
  
  // Warning messages
  WARNING_MESSAGES: {
    fullscreen: "⚠️ Fullscreen violation! Please return to fullscreen mode.",
    tab: "⚠️ Tab switching detected! Please stay on the exam page.",
    copy: "⚠️ Copy/paste attempt detected! This action is not allowed.",
    contextmenu: "⚠️ Right-click disabled! Use the exam interface only.",
    selection: "⚠️ Text selection disabled! Use the exam interface only."
  },
  
  // Auto-recovery settings
  AUTO_RECOVERY: {
    fullscreen: {
      enabled: true,
      delay: 3000, // 3 seconds
      maxAttempts: 2
    }
  },
  
  // Exam termination settings
  TERMINATION: {
    immediate: false, // Set to true for immediate termination on first violation
    showWarning: true,
    allowRetake: false
  },
  
  // Logging settings
  LOGGING: {
    enabled: true,
    logToConsole: true,
    sendToServer: true,
    includeTimestamp: true,
    includeUserInfo: true
  },
  
  // Browser compatibility
  BROWSER_SUPPORT: {
    fullscreen: true,
    visibility: true,
    copyPrevention: true,
    contextMenu: true
  }
};

// Helper function to get violation weight
export const getViolationWeight = (type) => {
  return EXAM_SECURITY_CONFIG.VIOLATION_WEIGHTS[type] || 1;
};

// Helper function to get warning message
export const getWarningMessage = (type, count, max) => {
  const baseMessage = EXAM_SECURITY_CONFIG.WARNING_MESSAGES[type] || "⚠️ Security violation detected!";
  return `${baseMessage} (${count}/${max})`;
};

// Helper function to check if feature is supported
export const isFeatureSupported = (feature) => {
  return EXAM_SECURITY_CONFIG.BROWSER_SUPPORT[feature] || false;
};
