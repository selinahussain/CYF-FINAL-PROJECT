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
  let { status, data, error } = useFetch("http://localhost:3001/api/subjects");

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

              {/* <Progress type="circle" percent={100} width={60} /> */}
            </div>
            <div>
            <Route path={`/modules/${name}`} component={name} />
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};


  {/* 
<div>
              <div className="text-center modules">
                <Link to={`/modules/HTML_CSS`}><h2 className="">HTML_CSS</h2></Link>

               <Demo newAddingValue={getAverage(20)}/>

               </div>
               <Route path={`/modules/HTML_CSS`} component={HTML_CSS} />
             </div>
             
             <div>
              <div className="text-center modules">
                <Link to={`/modules/JavaScript`}><h2 className="">JavaScript</h2></Link>

                <Progress type="circle" percent={100} width={60} />

               </div>
               <Route path={`/modules/JavaScript`} component={JavaScript} />
             </div>

             <div>
              <div className="text-center modules">
                <Link to={`/modules/NodeJS`}><h2 className="">NodeJS</h2></Link>

                <Progress type="circle" percent={100} width={60} />

               </div>
               <Route path={`/modules/NodeJS`} component={NodeJS} />
             </div>

             <div>
              <div className="text-center modules">
                <Link to={`/modules/PostgreSQL`}><h2 className="">PostgreSQL</h2></Link>

                <Progress type="circle" percent={100} width={60} />

               </div>
               <Route path={`/modules/PostgreSQL`} component={PostgreSQL} />
             </div>

             
      </div> */
}
