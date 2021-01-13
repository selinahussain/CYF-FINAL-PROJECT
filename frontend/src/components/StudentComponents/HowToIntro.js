import React from "react";
import RatingList from "../StudentComponents/RatingList";

const styling = {
  stroke: "rgb(209, 46, 47)",
  "stroke-width": 9,
};

export default function HowToIntro() {
  return (
    <div className="row">
    <svg height="30" width="100%">
        <line x1="0" y1="0" x2="100%" y2="0" style={styling} />
      </svg>
      <h4>How to use Tracker:</h4>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <p>
          {" "}
          Select your level of confidence with the buttons next to each
          statement. You should rate yourself based on how much of the statement
          you understand / feel confident with. <br /> A progress bar is shown,
          at the bottom of the page, which updates with each selection. You can
          see how close you are to reaching 100% altogether. <br /> Once you
          have filled in the levels of your choosing, you will be able to submit
          using the button below. You can come back to review and update the
          tracker as you continue to learn!
        </p>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <p>
          The rating starts from '20%', which is the lowest level of confidence
          and understanding you have for the statement. To '100%', which is
          highest level of confidence and understanding you have.{" "}
        </p>
        <RatingList />
      </div>
      <svg height="30" width="100%">
        <line x1="0" y1="0" x2="100%" y2="0" style={styling} />
      </svg>
    </div>
  );
}
