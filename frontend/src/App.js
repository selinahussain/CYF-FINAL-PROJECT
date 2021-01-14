import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {Header, PrivateRoute, Home, RegisterPage } from "./components";
import StudentMainPage from './Pages/StudentPages/StudentMainPage'
import { ProvideAuth } from "../src/Auth/use-auth";
import Footer from "./components/FooterComponent/Footer";
import JavaScript from "./components/StudentComponents/Modules Components/JavaScript/JavaScript";
import HTML_CSS from "./components/StudentComponents/Modules Components/HTML-CSS/HTML_CSS";
import Git_GitHub from "./components/StudentComponents/Modules Components/Git-GitHub/Git_Github";

import NodeJS from "./components/StudentComponents/Modules Components/NodeJS/NodeJS";
import PostgreSQL from "./components/StudentComponents/Modules Components/PostgreSQL/PostgreSQL";
import REACTJS from "./components/StudentComponents/Modules Components/REACTJS/REACTJS";
import MentorRegionPage from './Pages/MentorPages/MentorRegion/MentorRegionPage';
import MentorClassesPage from './Pages/MentorPages/MentorClassesPage/MentorClassesPage';
//import StudentList from "./Pages/MentorPages/MentorClassStudentList/StudentList";
import WestMidlandClasses from "./components/MentorComponents/Classes/WestMidlands Classes/WestMidlandClasses";
import StudentList from "./Pages/MentorPages/MentorClassStudentList/StudentList";
import ComingSoon from "./components/MentorComponents/Regions/ComingSoon";




function App({match}) {
	return (
		
		<Router>
			<ProvideAuth>
				<Header />

				<Container>
					<Switch>
						<Route exact path="/">
                        <Home />
						</Route>
                        <Route exact path="/register">
                            <RegisterPage />
						</Route>
						<PrivateRoute path="/student_main">
							<StudentMainPage />
						</PrivateRoute>
						<PrivateRoute path="/modules/JavaScript">
						    <JavaScript />
						</PrivateRoute>
						<PrivateRoute path="/modules/HTML_CSS">
						    <HTML_CSS />
						</PrivateRoute>
						<PrivateRoute path="/modules/Git_GitHub">
						    <Git_GitHub/>
						</PrivateRoute>
						<PrivateRoute path="/modules/NodeJS">
						<NodeJS />
						</PrivateRoute>
						<PrivateRoute path="/modules/PostgreSQL">
						<PostgreSQL />
						</PrivateRoute>
						<PrivateRoute path="/modules/ReactJS">
						<REACTJS/>
						</PrivateRoute>

						<PrivateRoute path="/region">
						<MentorRegionPage />
						</PrivateRoute>
                     
					 
					 	<PrivateRoute path="/regions/classes/West Midlands">
		                  <WestMidlandClasses />
						</PrivateRoute>


						<PrivateRoute path="/West Midlands/West Midlands Class 1/Students">
						<StudentList />
						</PrivateRoute>


						<PrivateRoute path="/West Midlands/West Midlands Class 2/Students">
						<ComingSoon/>
						</PrivateRoute>

						<PrivateRoute path="/regions/classes/London">
						<ComingSoon />
						</PrivateRoute>

						<PrivateRoute path="/regions/classes/Cape Town">
						<ComingSoon />
						</PrivateRoute>

						<PrivateRoute path="/regions/classes/North West">
						<ComingSoon />
						</PrivateRoute>

						<PrivateRoute path="/regions/classes/Roma">
						<ComingSoon />
						</PrivateRoute>

						<PrivateRoute path="/regions/classes/Scotland">
						<ComingSoon />
						</PrivateRoute>
						


	

					</Switch>
				</Container>
				<Footer />
			</ProvideAuth>
		</Router>
	);
}

export default App;