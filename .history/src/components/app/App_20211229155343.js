import {Component} from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import PropTypes from "prop-types";


import decoration from "../../resources/img/vision.png";

class  App extends Component {
	state = {
		selectedChar: null
	}

	onCharSelected = (id) => {
		this.setState({
			selectedChar: id
		})
	}

	render() {
		return (
			<div className="app">
				<AppHeader />
				<main>
					<ErrorBoundary>
						<RandomChar/>
					</ErrorBoundary>
					<div className="char__content">
						<ErrorBoundary>
							<CharList onCharSelected={this.onCharSelected}/>
						</ErrorBoundary>
							{/* приходит в CharList и уходит в CharInfo */}
						<ErrorBoundary>
							<CharInfo charId={this.state.selectedChar}/>
						</ErrorBoundary>
					</div>
					<img className="bg-decoration" src={decoration} alt="vision" />
				</main>
			</div>
		);
	}
};

CharList.propTypes = {
	// charId: PropTypes.string // будет оповещение в консоли что не соответствуют пропсы поможет заметить изменение данных
	onCharSelected: PropTypes.func
	// charId: PropTypes.number.isRequired // обязательный пропс, и если его нет то предупреждение в случае его отсутствия
}

export default App;
