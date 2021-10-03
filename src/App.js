import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';

function App() {
  return (
		<div className="App">
			<Router>
				<Header></Header>
				<Switch>
					<Route path="/">
						<Home></Home>
					</Route>
				</Switch>
			</Router>
		</div>
  );
}

export default App;
