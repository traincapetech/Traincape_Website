# Production Build Guide

This guide explains how to properly build and deploy the Traincape Technology application to avoid chunk loading errors and other production issues.

## Quick Start

```bash
# Install dependencies
npm install

# Build for production (recommended)
npm run build:production

# Or use the standard build
npm run build
```

## Build Scripts

### `npm run build:production`
- **Recommended for production deployments**
- Cleans previous builds
- Verifies build integrity
- Generates build report
- Includes chunk loading error handling

### `npm run build`
- Standard React build process
- Uses CRACO for webpack optimization
- Includes compression and minification

### `npm run build:analyze`
- Builds the application
- Analyzes bundle size and dependencies
- Useful for optimization

## Chunk Loading Error Prevention

The application now includes several mechanisms to prevent and handle chunk loading errors:

### 1. Service Worker (`/public/sw.js`)
- Handles chunk loading failures
- Provides fallback mechanisms
- Clears corrupted cache

### 2. Chunk Error Boundary (`/src/components/ChunkErrorBoundary.jsx`)
- Catches chunk loading errors in React
- Automatically retries failed chunks
- Provides user-friendly error messages

### 3. Global Error Handlers (`/public/index.html`)
- Catches JavaScript errors
- Handles unhandled promise rejections
- Automatically clears cache and reloads

### 4. Webpack Configuration (`/craco.config.js`)
- Optimizes chunk splitting
- Improves caching strategies
- Reduces chunk loading failures

## Deployment Checklist

Before deploying to production:

1. **Clean Build Environment**
   ```bash
   npm run clean
   npm install
   ```

2. **Run Production Build**
   ```bash
   npm run build:production
   ```

3. **Verify Build Integrity**
   - Check that `build-report.json` is generated
   - Verify all required files exist
   - Test the build locally: `npm run preview`

4. **Test Chunk Loading**
   - Open browser dev tools
   - Simulate network failures
   - Verify error handling works

## Common Issues and Solutions

### Issue: "Unexpected token '<'" Error
**Cause**: Chunk files are returning HTML instead of JavaScript (usually 404 or server error)

**Solution**:
1. Ensure proper server configuration
2. Check that static files are served correctly
3. Verify build output is complete

### Issue: "ne(...) is not a function" Error
**Cause**: Function is not properly exported or imported

**Solution**:
1. Check import/export statements
2. Verify all dependencies are installed
3. Clear node_modules and reinstall

### Issue: Chunk Loading Failures
**Cause**: Network issues, cache corruption, or server misconfiguration

**Solution**:
1. The app now automatically handles these
2. Service worker provides fallbacks
3. Error boundary retries automatically

## Server Configuration

For proper chunk loading, ensure your server:

1. **Serves static files correctly**
   ```nginx
   location /static/ {
     expires 1y;
     add_header Cache-Control "public, immutable";
   }
   ```

2. **Handles SPA routing**
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

3. **Enables compression**
   ```nginx
   gzip on;
   gzip_types text/css application/javascript;
   ```

## Monitoring

The build process generates a `build-report.json` file with:
- Build timestamp
- Total build size
- File counts
- Chunk information

Monitor these metrics to detect build issues early.

## Troubleshooting

### Build Fails
```bash
# Clear everything and rebuild
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build:production
```

### Chunk Errors Persist
1. Check server configuration
2. Verify CDN settings
3. Test with different browsers
4. Check network connectivity

### Performance Issues
1. Run bundle analysis: `npm run build:analyze`
2. Check for large dependencies
3. Optimize images and assets
4. Consider code splitting

## Best Practices

1. **Always use `npm run build:production` for deployments**
2. **Test builds locally before deploying**
3. **Monitor build reports for anomalies**
4. **Keep dependencies updated**
5. **Use proper server configuration**

## Support

If you encounter issues:
1. Check the build report
2. Review server logs
3. Test with different browsers
4. Verify network connectivity
5. Check server configuration

The application now includes comprehensive error handling to prevent these issues from affecting users.
