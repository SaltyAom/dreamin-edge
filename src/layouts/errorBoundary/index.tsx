import { Component } from 'preact'

class ErrorBoundary extends Component {
    getDerivedStateFromError(error) {
        console.log(error)
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        return this.props.children
    }
}

export default ErrorBoundary
