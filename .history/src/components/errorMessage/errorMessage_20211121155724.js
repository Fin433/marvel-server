import img from './error.jpg';

const ErrorMessage = () => {
	// обращаемся к статичному файлу src={process.env.PUBLIC_URL+'/error.jpeg'}
	return (
		<img style={{display: 'block', width: '450px', height: '450px', objectFit: 'contain', margin: '0 auto'}}
			src={img} alt="Error" />
	)
}

export default ErrorMessage;