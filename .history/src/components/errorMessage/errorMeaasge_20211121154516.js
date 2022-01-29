import img from './error.jpg';

const ErrorMeaasge = () => {
	// обращаемся к статичному файлу src={process.env.PUBLIC_URL+'/error.jpeg'}
	return (
		<img  alt="Error" />
	)
}