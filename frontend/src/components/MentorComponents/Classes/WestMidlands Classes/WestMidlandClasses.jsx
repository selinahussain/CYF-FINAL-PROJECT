import { useState } from "react";
import { Link, Route } from "react-router-dom";
import useFetch from "../../../../Auth/useFetch";
import StudentList from "../../../../Pages/MentorPages/MentorClassStudentList/StudentList";
import Spinner from "../../../UI/Spinner";
import ComingSoon from "../../Regions/ComingSoon";
import { Button } from "antd";
import "antd/dist/antd.css";
import ClassImage from "../../../../Assets/images/class.png";
import inProgress from "../../../../Assets/images/inprogress.png";
import "./WestMidlandClasses.scss";

const WestMidlandClasses = () => {
  let { status, data, error } = useFetch(
    `${process.env.REACT_APP_URL}/api/region/classes`
  );
  console.log(data);
  if (status === "error") {
    return <div>Error: {error.message}</div>;
  } else if (status === "success") {
    return <ClassList data={data} />;
  } else {
    return <Spinner />;
  }
};

const styling = {
  stroke: "rgb(209, 46, 47)",
  "stroke-width": 9,
};

const ClassList = ({ data }) => {
  const [regions, setRegions] = useState(data);

  return (
    <div>
      <div className="backDiv">
        <Button href="/region" className="backLink btn-lg rounded-lg">
          Back To Regions
        </Button>
      </div>

      <h1> Please Select a Class:</h1>
      <svg height="150" width="100%">
        <line x1="0" y1="0" x2="100%" y2="0" style={styling} />
      </svg>

      <div className="row">
        {regions.map(({ name }) => (
          <div className="col-12 col-md-6  rounded " key={name}>
            <div className="text-center image-container">
              <Link to={`/West Midlands/${name}/Students`}>
                <img
                  src={
                    name === "West Midlands Class 1"
                      ? ClassImage
                      : name === "West Midlands Class 2"
                      ? ClassImage
                      : inProgress
                  }
                  className="rounded mx-auto classesImages"
                  alt={name}
                />

                <h2 className="region">{name}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Route
          path={`/West Midlands/West Midlands Class 1/Students`}
          component={StudentList}
        />
        <Route
          path={`/West Midlands/West Midlands Class 2/Students`}
          component={ComingSoon}
        />
      </div>
    </div>
  );
};

export default WestMidlandClasses;
