// Test utility for ExamProctor component
export const testExamProctor = () => {
  console.log('🧪 Testing ExamProctor functionality...');
  
  // Test 1: Fullscreen API support
  const fullscreenSupported = !!(document.fullscreenEnabled || 
                                document.webkitFullscreenEnabled || 
                                document.mozFullScreenEnabled || 
                                document.msFullscreenEnabled);
  
  console.log('✅ Fullscreen API supported:', fullscreenSupported);
  
  // Test 2: Current fullscreen state
  const isFullscreen = !!(document.fullscreenElement || 
                         document.webkitFullscreenElement || 
                         document.mozFullScreenElement || 
                         document.msFullscreenElement);
  
  console.log('✅ Current fullscreen state:', isFullscreen);
  
  // Test 3: Browser compatibility
  const browserInfo = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    vendor: navigator.vendor
  };
  
  console.log('✅ Browser info:', browserInfo);
  
  // Test 4: Event listeners
  const testEventListeners = () => {
    const events = ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'];
    events.forEach(event => {
      document.addEventListener(event, () => {
        console.log(`✅ ${event} event fired`);
      });
    });
  };
  
  testEventListeners();
  
  return {
    fullscreenSupported,
    isFullscreen,
    browserInfo
  };
};

// Manual test functions
export const manualTests = {
  // Test fullscreen entry
  testEnterFullscreen: async () => {
    try {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        await element.requestFullscreen();
        console.log('✅ Fullscreen entered successfully');
      } else if (element.webkitRequestFullscreen) {
        await element.webkitRequestFullscreen();
        console.log('✅ Fullscreen entered successfully (webkit)');
      } else {
        console.log('❌ Fullscreen API not supported');
      }
    } catch (error) {
      console.error('❌ Error entering fullscreen:', error);
    }
  },
  
  // Test fullscreen exit
  testExitFullscreen: async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
        console.log('✅ Fullscreen exited successfully');
      } else if (document.webkitExitFullscreen) {
        await document.webkitExitFullscreen();
        console.log('✅ Fullscreen exited successfully (webkit)');
      } else {
        console.log('❌ Fullscreen exit API not supported');
      }
    } catch (error) {
      console.error('❌ Error exiting fullscreen:', error);
    }
  },
  
  // Test copy/paste prevention
  testCopyPastePrevention: () => {
    const testEvent = new KeyboardEvent('keydown', {
      key: 'c',
      ctrlKey: true,
      bubbles: true
    });
    
    document.dispatchEvent(testEvent);
    console.log('✅ Copy/paste prevention test completed');
  },
  
  // Test right-click prevention
  testRightClickPrevention: () => {
    const testEvent = new MouseEvent('contextmenu', {
      bubbles: true,
      cancelable: true
    });
    
    document.dispatchEvent(testEvent);
    console.log('✅ Right-click prevention test completed');
  }
};

// Run all tests
export const runAllTests = () => {
  console.log('🚀 Running all ExamProctor tests...');
  
  const results = testExamProctor();
  
  console.log('📊 Test Results:', results);
  console.log('💡 Use manualTests object to run specific tests');
  
  return results;
};

// Auto-run tests in development
if (process.env.NODE_ENV === 'development') {
  // Run tests after a short delay to ensure DOM is ready
  setTimeout(() => {
    runAllTests();
  }, 1000);
}
