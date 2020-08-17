import React from 'react';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Start from './components/Start';
import { Route, Switch } from "react-router-dom";


function App() {

	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Signup} />
				<Route path="/signin" component={Signin} />
				<Route path="/start" component={Start} />
			</Switch>
		</div>
	);
}

export default App;
