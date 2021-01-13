import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./RatingList.scss";
 
export default function HowToIntro() {
  return (
    <div className="rating-div " >
      
        <ListGroup horizontal>
        <ListGroup.Item variant="danger">
          20% <br /> Not Confident
        </ListGroup.Item>
        <ListGroup.Item>
          40% <br /> Need Revision
        </ListGroup.Item>
        <ListGroup.Item variant="warning">
          60% <br /> Average
        </ListGroup.Item>
        <ListGroup.Item>
          80% <br /> Confident
        </ListGroup.Item>
        <ListGroup.Item variant="success">
          100% <br /> Very Confident
        </ListGroup.Item>
      </ListGroup>
      
    </div>
  );
}
