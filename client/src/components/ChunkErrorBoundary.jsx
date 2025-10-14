import React from 'react';

class ChunkErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, retryCount: 0 };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Chunk loading error:', error, errorInfo);
    
    // Handle different types of chunk loading errors
    if (this.isChunkLoadError(error)) {
      console.log('Detected chunk loading error, attempting to reload...');
      this.handleChunkError();
    }
  }

  isChunkLoadError = (error) => {
    return (
      error.name === 'ChunkLoadError' ||
      error.message.includes('Loading chunk') ||
      error.message.includes('Loading CSS chunk') ||
      error.message.includes('Unexpected token') ||
      error.message.includes('Failed to fetch')
    );
  };

  handleChunkError = () => {
    const { retryCount } = this.state;
    
    if (retryCount < 3) {
      // Clear cache and retry
      if ('caches' in window) {
        caches.keys().then(names => {
          names.forEach(name => {
            caches.delete(name);
          });
        });
      }
      
      // Wait before retry to avoid infinite loops
      setTimeout(() => {
        this.setState(prevState => ({ 
          retryCount: prevState.retryCount + 1,
          hasError: false,
          error: null 
        }));
        window.location.reload();
      }, 1000 * (retryCount + 1));
    } else {
      // After 3 retries, show manual reload option
      console.error('Max retry attempts reached');
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#f8f9fa'
        }}>
          <h2 style={{ color: '#dc3545', marginBottom: '20px' }}>
            🚨 Application Error
          </h2>
          <p style={{ marginBottom: '20px', color: '#6c757d' }}>
            We're experiencing a technical issue. The application will reload automatically in a few seconds.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Reload Now
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ChunkErrorBoundary; 