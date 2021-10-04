import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Footer from './components/Footer/Footer';
import Courses from './containers/Courses/Courses';
import Instructors from './containers/Instrutors/Instructors';
import About from './containers/About/About';
import NotFound from './containers/NotFound/NotFound';
import Subscribed from './components/Subscribed/Subscribed';

function App() {
	return (
		<div className=" bg-gray-100 pt-10">
			<Router>
				<Header></Header>
				<Switch>
					<Route path="/" exact>
						<Home></Home>
					</Route>
					<Route path="/home">
						<Home></Home>
					</Route>
					<Route path="/courses">
						<Courses></Courses>
					</Route>
					<Route path="/instructors">
						<Instructors></Instructors>
					</Route>
					<Route path="/about">
						<About></About>
					</Route>
					<Route path="/subscribed">
						<Subscribed></Subscribed>
					</Route>
					<Route>
						<NotFound></NotFound>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
