# 🛡️ Traincape Anti-Cheating System Guide

## Overview

The Traincape Anti-Cheating System is a comprehensive solution designed to prevent and detect cheating during online examinations. It combines multiple security layers to create a secure testing environment.

## 🚀 Features

### 1. **Fullscreen Enforcement**
- Automatically forces fullscreen mode when exam starts
- Detects when users exit fullscreen
- Auto-recovery attempts to return to fullscreen
- Visual indicators for fullscreen status

### 2. **Tab Switching Detection**
- Monitors when users switch to other tabs
- Tracks visibility changes in real-time
- Logs all tab switching attempts

### 3. **Copy/Paste Prevention**
- Blocks Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+A shortcuts
- Disables right-click context menu
- Prevents text selection and dragging
- Cross-browser compatibility

### 4. **Violation Tracking**
- Real-time violation counting
- Configurable violation limits
- Automatic exam termination on threshold
- Detailed violation logging

### 5. **Admin Monitoring**
- Security dashboard for administrators
- Real-time violation statistics
- Filterable violation logs
- Severity-based categorization

## 📋 Implementation

### Frontend Integration

The anti-cheating system is integrated into your existing `Test.jsx` component:

```jsx
import ExamProctor from "../../components/ExamProctor.jsx";

// Wrap your exam content with ExamProctor
<ExamProctor
  onViolation={handleViolation}
  onExamTermination={handleExamTermination}
  maxViolations={3}
>
  {/* Your existing exam content */}
</ExamProctor>
```

### Configuration

Customize the security settings in `src/config/examSecurity.js`:

```javascript
export const EXAM_SECURITY_CONFIG = {
  MAX_VIOLATIONS: 3,
  VIOLATION_WEIGHTS: {
    fullscreen: 1,
    tab: 1,
    copy: 1,
    contextmenu: 1,
    selection: 0.5
  },
  // ... more settings
};
```

## 🔧 Setup Instructions

### 1. **Backend Setup**

The security system requires these new components:

- **Security Routes**: `server/routes/security.routes.js`
- **Security Model**: `server/model/securityLog.model.js`
- **API Integration**: Added to main server file

### 2. **Database Schema**

The system creates a new collection `securitylogs` with fields:
- `userId`, `username`, `email`
- `course`, `subTopic`, `level`
- `violationType`, `violationCount`
- `timestamp`, `severity`
- `userAgent`, `ipAddress`

### 3. **Frontend Components**

New components added:
- `ExamProctor.jsx` - Main proctoring component
- `SecurityDashboard.jsx` - Admin monitoring dashboard
- `examSecurity.js` - Configuration file

## 📊 Admin Dashboard

### Access Security Dashboard

Navigate to the admin panel and access the security dashboard to monitor:

- **Real-time Statistics**: Total violations, unique users, critical violations
- **Filterable Logs**: By course, level, violation type, date range
- **Severity Analysis**: Low, medium, high, critical violations
- **User Tracking**: Individual user violation patterns

### Key Metrics

- **Total Violations**: Overall count of security violations
- **Unique Users**: Number of users with violations
- **Critical Violations**: High-severity violations requiring attention
- **Today's Violations**: Current day violation count

## 🛡️ Security Features

### Violation Types

1. **Fullscreen Violations** (`fullscreen`)
   - User exits fullscreen mode
   - Auto-recovery attempts
   - Visual warnings

2. **Tab Switching** (`tab`)
   - Detects tab changes
   - Monitors window focus
   - Logs all attempts

3. **Copy/Paste Attempts** (`copy`)
   - Blocks keyboard shortcuts
   - Prevents context menu
   - Tracks all attempts

4. **Right-click Attempts** (`contextmenu`)
   - Disables context menu
   - Logs right-click events
   - Visual feedback

5. **Text Selection** (`selection`)
   - Prevents text selection
   - Blocks drag operations
   - Maintains exam integrity

### Severity Levels

- **Low**: 1 violation
- **Medium**: 2-3 violations
- **High**: 4-5 violations
- **Critical**: 6+ violations

## 🔄 Workflow

### Exam Start Process

1. User clicks "Start Exam"
2. System requests fullscreen permission
3. Fullscreen mode activated
4. Security monitoring begins
5. Violation tracking starts

### Violation Handling

1. **Detection**: System detects violation
2. **Warning**: User sees warning message
3. **Logging**: Violation logged to database
4. **Counting**: Violation count incremented
5. **Action**: Auto-recovery or termination

### Exam Termination

When violation limit is reached:
1. Exam immediately terminated
2. User redirected to home
3. Results marked as invalid
4. Admin notified of termination

## 📈 Monitoring & Analytics

### Real-time Monitoring

- Live violation tracking
- Instant admin notifications
- Real-time dashboard updates
- Automated alerting

### Analytics Features

- **Trend Analysis**: Violation patterns over time
- **Course Analysis**: Violations by course/level
- **User Analysis**: Individual user behavior
- **Geographic Analysis**: Violations by location

### Reporting

- **Daily Reports**: Summary of daily violations
- **Weekly Reports**: Trend analysis
- **Monthly Reports**: Comprehensive analytics
- **Custom Reports**: Filterable by any criteria

## 🔧 Customization

### Adjusting Violation Limits

```javascript
// In examSecurity.js
MAX_VIOLATIONS: 5, // Increase for more lenient exams
```

### Modifying Warning Messages

```javascript
WARNING_MESSAGES: {
  fullscreen: "⚠️ Please return to fullscreen mode immediately!",
  tab: "⚠️ Tab switching is not allowed during exams!",
  // ... customize messages
}
```

### Changing Auto-recovery Settings

```javascript
AUTO_RECOVERY: {
  fullscreen: {
    enabled: true,
    delay: 5000, // 5 seconds
    maxAttempts: 3
  }
}
```

## 🚨 Best Practices

### For Administrators

1. **Regular Monitoring**: Check security dashboard daily
2. **Pattern Analysis**: Look for unusual violation patterns
3. **User Communication**: Inform users about security measures
4. **Policy Updates**: Adjust settings based on usage patterns

### For Users

1. **Browser Preparation**: Ensure fullscreen is enabled
2. **Environment Setup**: Close unnecessary tabs/applications
3. **Stable Connection**: Use reliable internet connection
4. **Follow Instructions**: Read exam guidelines carefully

## 🔍 Troubleshooting

### Common Issues

1. **Fullscreen Not Working**
   - Check browser permissions
   - Ensure HTTPS connection
   - Try different browser

2. **False Positives**
   - Adjust violation thresholds
   - Review browser compatibility
   - Check system requirements

3. **Performance Issues**
   - Optimize monitoring frequency
   - Reduce log verbosity
   - Monitor system resources

### Browser Compatibility

- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile Browsers**: Limited support

## 📞 Support

For technical support or questions about the anti-cheating system:

1. Check the configuration files
2. Review the security logs
3. Contact the development team
4. Refer to this documentation

## 🔄 Updates

The anti-cheating system is regularly updated with:

- New security features
- Improved detection methods
- Enhanced monitoring capabilities
- Better user experience

Stay updated with the latest security enhancements to maintain exam integrity.

---

**Note**: This system significantly reduces cheating but cannot guarantee 100% prevention. It should be used as part of a comprehensive academic integrity strategy.
