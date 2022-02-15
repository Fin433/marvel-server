import ErrorMessage from "../errorMessage/errorMessage"
import {Link} from 'react-router-dom'

const Page404 = () => {
	return (
		<div>
			<ErrorMessage/>
				<p
				style={{'textAlign': 'center', 'fontSize': '24px', 'fontWeight': 'bold'}}
				>
					Page does not exist
				</p>
			<Link
				style={{'textAlign': 'center', 'fontSize': '24px', 'fontWeight': 'bold', 'display': 'block', 'marginTop': '30px'}}
				to="/"
				>
					Back to Home
			</Link>
		</div>
	)
}

export default Page404;