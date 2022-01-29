import { Component } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import MarvelService from "../../services/MarvelService";
import "./charList.scss";

class CharList extends Component {
	state = {
		charList: [],
		loading: true,
		error: false,
		newItemLoading: false,
		offset: 1541,
		charEnded: false
	};

	marvelService = new MarvelService();

	componentDidMount() {
		this.onRequest();
		// errorBoundary
			// this.foo.bar = 0
	}

	onRequest = (offset) => {
		this.onCharListLoading();
		this.marvelService.getAllCharacters(offset)
		.then(this.onCharListLoaded)
		.catch(this.onError);
	}

	onCharListLoading = () => {
		this.setState({
			newItemLoading: true
		});
	}

	onCharListLoaded = (newCharList) => {
		let ended = false;
		if (newCharList.length < 9) {
			ended = true;
		}

		this.setState(({offset, charList}) => ({
			charList: [...charList, ...newCharList],
			loading: false,
			newItemLoading: false,
			offset: offset + 9,
			charEnded: ended
		}));
	};

	onError = () => {
		this.setState({
			error: true,
			loading: false,
		});
	};

	// Этот метод создан для оптимизации,
	// чтобы не помещать такую конструкцию в метод render
	renderItems(arr) {
		const items = arr.map((item) => {
			let imgStyle = { 'objectFit': "cover" };
			if (
				item.thumbnail ===
				"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
			) {
				imgStyle = { 'objectFit' : "unset" };
			}

			return (
				<li className="char__item"
					key={item.id}
					onClick={() => this.props.onCharSelected(item.id)}>
					<img src={item.thumbnail} alt={item.name} style={imgStyle} />
					<div className="char__name">{item.name}</div>
				</li>
			);
		});
		// А эта конструкция вынесена для центровки спиннера/ошибки
		return <ul className="char__grid">{items}</ul>;
	}

	render() {
		const { charList, loading, error, newItemLoading, offset, charEnded} = this.state;

		const items = this.renderItems(charList);

		const errorMessage = error ? <ErrorMessage /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = !(loading || error) ? items : null;

		return (
			<div className="char__list">
				{errorMessage}
				{spinner}
				{content}
				<button
					className="button button__main button__long"
					dasabled={newItemLoading}
					style={{'display': charEnded ? 'none' : 'block'}}
					onClick={() => this.onRequest(offset)}
					>
					<div className="inner">load more</div>
				</button>
			</div>
		);
	}
}

CharList.propTypes = {
	// charId: PropTypes.string // будет оповещение в консоли что не соответствуют пропсы поможет заметить изменение данных
	onCharSelected: PropTypes.func.isRequired
	// charId: PropTypes.number.isRequired // обязательный пропс, и если его нет то предупреждение в случае его отсутствия
}

export default CharList;