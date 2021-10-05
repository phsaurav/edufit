// *Imports
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// *Importing All Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Subscribed from './components/Subscribed/Subscribed';
// *Importing All Containers
import Home from './containers/Home/Home';
import Courses from './containers/Courses/Courses';
import Instructors from './containers/Instrutors/Instructors';
import About from './containers/About/About';
import NotFound from './containers/NotFound/NotFound';

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
