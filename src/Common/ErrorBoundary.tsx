import React = require("react");

type ErrorBoundaryState = {
    error: Error;
    errorInfo: any;
}

export class ErrorBoundary extends React.Component<any, ErrorBoundaryState> {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error: Error, errorInfo: any) {
        console.error(error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div className='error-boundary'>
                    Sorry, something went wrong.
                </div>
            );
        }
        return this.props.children;
    }
}