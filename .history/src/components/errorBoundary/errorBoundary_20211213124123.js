import { Component } from 'react';

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
}