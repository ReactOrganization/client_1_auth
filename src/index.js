import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from './Context';

ReactDOM.render(
	<BrowserRouter>
		<Provider>
			<App />
		</Provider>
	</BrowserRouter>
	,

	document.getElementById('root')
);

serviceWorker.unregister();
