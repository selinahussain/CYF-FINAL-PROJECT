import React, { useState } from "react";
import useFetch from "../../../Auth/useFetch";
import Spinner from "../../../components/UI/Spinner";
import { Route, Link } from "react-router-dom";
import "./StudentList.scss";
import "antd/dist/antd.css";
import MentorIndividualGradeList from "../MentorIndividualGradeList/MentorIndividualGradeList";
import MentorSideBar from "../../../components/MentorComponents/MentorSideBar";
import { Button } from "antd";
import "antd/dist/antd.css";

export default function StudentList() {
  let { status, data, error } = useFetch(
    `${process.env.REACT_APP_URL}/api/region/classes/studentList`
  );
  if (status === "error") {
    return <div>Error: {error.message}</div>;
  } else if (status === "success") {
    return (
      <div>
        {" "}
        <AllStudents data={data} />{" "}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

const styling = {
  stroke: "rgb(209, 46, 47)",
  "stroke-width": 9,
};

const AllStudents = ({ data }) => {
  const [students, setStudents] = useState(data);
  return (
    <div className="row">
      <div className="col-sm-6 col-md-3 col-lg-3">
        <MentorSideBar />
      </div>
      <div className="col-sm-6 col-md-9 col-lg-9">
        <div className="row">
          <div className="col-1">
            <Button
              href="/West%20Midlands/West%20Midlands%20Class%201/Students"
              className="backLink btn-lg rounded-lg"
            >
              Back To Classes
            </Button>
          </div>
        </div>
        <div className="row">
          <h1>Student List</h1>

          <svg height="30" width="700">
            <line x1="0" y1="0" x2="100%" y2="0" style={styling} />
          </svg>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h4> How to get started:</h4>
            <p>
              Below are links to students from your class!
              <br />
              You will be redirected to a separate page, depending on the
              student you click on, where you will be able to see a general
              average of each module out of 100%. This is what students have
              rated for themselves and how they believe they are doing for the
              module.
              <br /> It is a perfect place for you to be able to keep track of
              how students are doing on the course.
            </p>
          </div>
          <svg height="40" width="100%">
            <line x1="0" y1="0" x2="100%" y2="0" style={styling} />
          </svg>
        </div>
        <div className="row">
          {students.map((student) => (
            <div className="moduleDiv col-6">
              <div className="text-center modules" key={student.id}>
                <Link to={`/students/${student.id}`}>
                  <h2 className="">{student.name}</h2>
                </Link>
              </div>
              <div>
                <Route
                  path={`/students/${student.id}`}
                  component={MentorIndividualGradeList}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
