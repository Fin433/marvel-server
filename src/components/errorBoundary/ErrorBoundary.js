import { Component } from 'react';
import ErrorMessage from '../errorMessage/errorMessage';

class ErrorBoundary extends Component {
	state = {
		error: false
	}
// ловят ошибки при 1. render, 2. методах жизненного цикла и в          3. конструктарах дочерних компонентов
// не ловят ошибки 1. внутри обработчиков событий так как событие происходит не внутри render, 2. внутри ассинхронного кода, 3. в самом предохранителе, он ловит ошибки внутри дочерних компонентов но не внутри себя и 4. Серверный рендеринг
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