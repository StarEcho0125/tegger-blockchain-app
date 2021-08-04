import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/detail/:id" component={Detail} />
				<Redirect to="/" />
			</Switch>
		</BrowserRouter>
	)
}

export default App;