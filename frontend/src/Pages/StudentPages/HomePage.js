import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginForm from '../../components/StudentComponents/LoginForm';
import HeroImage from '../../components/StudentComponents/HeroImage/HeroImage';
import './HomePage.scss';

const HomePage = () => {
  return (
    <Row>
      <Col md={{ span: 6, order: 'last' }} className="features mb-5">
         <div>
          <ul className="features-list list-unstyled">
            <li>
              <div className="bullet"></div>
              <div className="feature-title">Check Your Confidence</div>
            </li>
            <li>
              <div className="bullet"></div>
              <div className="feature-title">Save Your Works</div>
            </li>
            
          </ul>
        </div> 
        <LoginForm />
      </Col>
      <HeroImage />
    </Row>
  );
};

export default HomePage;