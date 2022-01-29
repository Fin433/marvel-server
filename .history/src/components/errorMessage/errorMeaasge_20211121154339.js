const ErrorMeaasge = () => {
	// обращаемся к статичному файлу
	return (
		<img src={process.env.PUBLIC_URL+'/error.jpeg'} alt="Error" />
	)
}