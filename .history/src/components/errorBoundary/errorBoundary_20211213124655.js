import { Component } from 'react';
import ErrorMessage from '../errorMessage/errorMessage';

class ErrorBoundary extends Component {
	state = {
		error: false
	}

	componentDidCatch(err, errInfo) {
		console.log(err, errInfo);
		this.setState({
			error: true
		});
	}

	render() {
		if (this.state.error) {
			return <h2>Something went wrong<br/>{ErrorMessage}</h2>
		}

		return this.props.children;
	}

}

export default ErrorBoundary;