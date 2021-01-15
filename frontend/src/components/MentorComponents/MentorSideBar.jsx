import React from "react";
import Logo from "../../Assets/icons/user.png";
import StudentImage from "../../Assets/images/student_page_logo.png";
import { useAuth } from "../../Auth/use-auth";

const styling = {
  stroke: "rgb(209, 46, 47)",
  "stroke-width": 9,
};

export default function MentorSideBar() {
  let auth = useAuth();
  return (
    <div className="container">
      <div className="wrapper">
        <div className="user_icon_container">
          <div className="user_icon_image">
            <img alt="user icon" src={Logo} />
          </div>
          <h3>{auth.user.name}</h3>
          <p className="titleName">
            Mentor
          </p>
        </div>

        <svg height="30" width="100%">
          <line x1="0" y1="0" x2="100%" y2="0" style={styling} />
        </svg>

        <div>
          <h3 className="titleBar">Class Overview</h3>
        </div>

        <svg height="40" width="100%">
          <line x1="0" y1="0" x2="100%" y2="0" style={styling} />
        </svg>
        <div className="student_icon_container">
          <div className="student_icon_image">
            <img alt="" src={StudentImage} class="d-none d-sm-block" />
          </div>
        </div>
      </div>
    </div>
  );
}
