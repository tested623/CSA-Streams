import React, { ReactNode, ErrorInfo } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', color: 'white', backgroundColor: '#0f172a', minHeight: '100vh', fontFamily: 'sans-serif' }}>
          <h1 style={{ color: '#ef4444', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Something went wrong.</h1>
          <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>The application encountered an error. Please try reloading.</p>
          <pre style={{ backgroundColor: '#1e293b', padding: '1rem', borderRadius: '0.5rem', overflow: 'auto', color: '#fca5a5', fontSize: '0.875rem' }}>
            {this.state.error?.toString()}
          </pre>
          <button 
            onClick={() => window.location.reload()}
            style={{ marginTop: '2rem', padding: '0.5rem 1.5rem', backgroundColor: '#fbbf24', color: '#0f172a', fontWeight: 'bold', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}