import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="min-h-screen bg-gray-100 pt-10">
			<Router>
				<Header></Header>
				<Switch>
					<Route path="/">
						<Home></Home>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
