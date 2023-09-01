import { ReactNode, ErrorInfo, Component } from 'react'; // , lazy
import { Link } from "react-router-dom";

interface ErrorBoundaryProps {
  children?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // console.log('error: ', error);
    // console.log('errorInfo: ', errorInfo);

    // logService(error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-150px)]">
        <h1>Something went wrong</h1>
        
        {!navigator.onLine && <p>No internet connection</p>}

        <Link
          to="/"
          className="py-2 px-4 bg-blue-500 hover_bg-blue-400 text-white hover_text-white rounded"
        >
          Back Home
        </Link>
      </div>
    )
    :
    this.props.children
  }
}
