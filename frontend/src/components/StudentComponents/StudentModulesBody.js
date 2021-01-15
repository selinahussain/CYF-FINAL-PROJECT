import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import useFetch from "../../Auth/useFetch";
import Spinner from "../UI/Spinner";
import "./StudentModulesBody.scss";
//import JavaScript from "../../components/StudentComponents/Modules Components/JavaScript/JavaScript";
//import { Progress } from "antd";
//import HTML_CSS from "./Modules Components/HTML-CSS/HTML_CSS";
//import JavaScript from "./Modules Components/JavaScript/JavaScript";
//import NodeJS from "./Modules Components/NodeJS/NodeJS";
//import PostgreSQL from "./Modules Components/PostgreSQL/PostgreSQL";
//import {Demo,getAverage,} from "../StudentComponents/Modules Components/JavaScript/JavaScript";

export default function StudentModulesBody() {
  let { status, data, error } = useFetch(`${process.env.REACT_APP_URL}/api/subjects`);

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  } else if (status === "success") {
    return <SubjectList data={data} />;
  } else {
    return <Spinner />;
  }
}

const SubjectList = ({ data }) => {
  const [subjects, setSubjects] = useState(data);

  return (
    <div>


      <div className="row">
        {subjects.map(({ name }) => (
          <div className= "moduleDiv">
            <div className="text-center modules" key={name}>
              <Link to={`/modules/${name}`}>

                <h2 className="">{name}</h2>
              </Link>


            </div>
            <div>
            {/* <Route path={`/modules/${name}`} component={name} /> */}
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};
