// Server Health Check Utility
import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';

export const checkServerHealth = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.SECURITY.replace('/security', ''));
    return {
      status: 'healthy',
      message: response.data.message,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    return {
      status: 'unhealthy',
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
};

export const testQuestionsEndpoint = async (course, subTopic, level) => {
  try {
    const response = await axios.get(
      `${API_ENDPOINTS.GET_QUESTIONS}?course=${course}&subTopic=${encodeURIComponent(subTopic)}&level=${level}`
    );
    return {
      status: 'success',
      questionCount: response.data.length,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    return {
      status: 'error',
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
};

export const runFullHealthCheck = async () => {
  console.log('🏥 Running full server health check...');
  
  // Check main server
  const serverHealth = await checkServerHealth();
  console.log('📡 Server Health:', serverHealth);
  
  // Test questions endpoints
  const testCases = [
    { course: 'PECB', subTopic: 'PECBComputerForensics', level: 'easy' },
    { course: 'Internal', subTopic: 'Lead-and-Sales-Assessment', level: 'easy' },
    { course: 'AWS', subTopic: 'AWSCertifiedSecurity', level: 'intermediate' }
  ];
  
  for (const testCase of testCases) {
    const result = await testQuestionsEndpoint(
      testCase.course, 
      testCase.subTopic, 
      testCase.level
    );
    console.log(`📝 Questions Test (${testCase.course}):`, result);
  }
  
  return {
    serverHealth,
    timestamp: new Date().toISOString()
  };
};

// Auto-run health check in development
if (process.env.NODE_ENV === 'development') {
  // Run health check after page loads
  setTimeout(() => {
    runFullHealthCheck();
  }, 2000);
}

// Export for manual use
export default {
  checkServerHealth,
  testQuestionsEndpoint,
  runFullHealthCheck
};
