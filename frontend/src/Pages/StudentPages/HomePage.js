import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "../../components/StudentComponents/LoginForm";
import HeroImage from "../../components/StudentComponents/HeroImage/HeroImage";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <Row>
      <Col md={{ span: 6, order: "last" }} className="features mb-5">
        <div className="titleDiv">
          <h2>Student Confidence Tracker</h2>
          <hr />
        </div>
        <div className="introDiv">
          <div>
            <p>
              Welcome to the CodeYourFuture Student Tracker. Please enter your log in information
              below.
            </p>
          </div>
        </div>
        <LoginForm />
      </Col>
      <HeroImage />
    </Row>
  );
};

export default HomePage;
