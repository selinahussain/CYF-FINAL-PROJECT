import React from 'react';
import Logo from "../../Assets/icons/user.png";
import StudentImage  from "../../Assets/images/student_page_logo.png";
import "./StudentSideBar.scss";
import { useAuth } from "../../Auth/use-auth";

export default function StudentSideBar() {
    let auth = useAuth();
    return (
        <div className = "container" >
        <div className= "wrapper">
            <div className = "user_icon_container">
                <div className="user_icon_image" >
                <img 
                alt = "user icon" 
                src ={Logo}/>
                </div>
                <h3>{auth.user.name}</h3>
                <h5><small>Student</small></h5>
            </div>

            <hr/>

            <div>
                <h3>Student Confidence Tracker</h3>
            </div>

            <hr/>
            <div className="student_icon_container">
                <div className = "student_icon_image">
                <img 
                alt = ""
                src = {StudentImage}
                />
                </div>
            </div>
            </div>
        </div>
    )
}
