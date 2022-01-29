import img from './error.jpg';

const ErrorMeaasge = () => {
	// обращаемся к статичному файлу src={process.env.PUBLIC_URL+'/error.jpeg'}
	return (
		<img style={{display: 'block', width: '250px', height: '250px'}}
			src={img} alt="Error" />
	)
}