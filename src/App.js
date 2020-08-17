import React from 'react';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { Route, Switch } from "react-router-dom";


function App() {

	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Signup} />
				<Route path="/signin" component={Signin} />
			</Switch>
		</div>
	);
}

export default App;
