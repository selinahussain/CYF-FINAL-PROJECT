import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "../../components/StudentComponents/LoginForm";
import HeroImage from "../../components/StudentComponents/HeroImage/HeroImage";
import "./HomePage.scss";

const styling = {
  stroke: "rgb(209, 46, 47)",
  "stroke-width": 9,
};

const HomePage = () => {
  return (
    <Row>
      <Col md={{ span: 6, order: "last" }} className="features mb-5">
        <div className="titleDiv">
          <h2>Student Confidence Tracker</h2>
          <svg height="40" width="100%">
            <line x1="0" y1="0" x2="200" y2="0" style={styling} />
          </svg>
        </div>
        <div className="introDiv">
          <div>
            <p>
              Welcome to the CodeYourFuture Student Confident Tracker. Please
              enter your log in information below.
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
