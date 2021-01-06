import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {Class, Header, PrivateRoute, Home, RegisterPage } from "./components";
import StudentMainPage from './Pages/StudentPages/StudentMainPage'
import { ProvideAuth } from "../src/Auth/use-auth";
import Footer from "./components/FooterComponent/Footer";
import StudentSingleModulePage from "./Pages/StudentPages/StudentSingleModulePage";


function App() {
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
						<PrivateRoute path="/modules/moduleName">
							<StudentSingleModulePage />
						</PrivateRoute>
					</Switch>
				</Container>
				<Footer />
			</ProvideAuth>
		</Router>
	);
}

export default App;