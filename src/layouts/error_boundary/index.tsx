import { Component } from 'preact'

class ErrorBoundary extends Component {
    getDerivedStateFromError(error) {
        console.log(error)
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo)
    }

    render() {
        return this.props.children
    }
}

export default ErrorBoundary
