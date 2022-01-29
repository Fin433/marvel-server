import { Component } from 'react';
import ErrorMessage from '../errorMessage/errorMessage';

class ErrorBoundary extends Component {
	state = {
		error: false
	}
// ловят ошибки при 1. render, 2. методах жизненного цикла и в          3. конструктарах дочерних компонентов
	componentDidCatch(err, errInfo) {
		console.log(err, errInfo);
		this.setState({
			error: true
		});
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage/>
		}

		return this.props.children;
	}

}

export default ErrorBoundary;