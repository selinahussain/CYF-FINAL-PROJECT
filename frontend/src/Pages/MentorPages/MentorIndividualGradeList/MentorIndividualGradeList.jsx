import React, {useState} from 'react';
import { Link, useParams } from "react-router-dom";
import useFetch from '../../../Auth/useFetch';
import { Progress } from "antd";
import "antd/dist/antd.css";
import { Button } from "antd";
import './MentorIndividualGradeList.scss'
//import { useAuth } from "../../../Auth/use-auth";
import Spinner from "../../../components/UI/Spinner";
import MentorSideBar from '../../../components/MentorComponents/MentorSideBar';







export default function MentorIndividualGradeList () {
  let { id } = useParams();


  let { status, data, error } = useFetch(`${process.env.REACT_APP_URL}/api/student/${id}/getStudentGrade`);
  console.log(("indiv stu", data));
  
  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'success') {
    return <OneStudentsGrades  data={data} />;
  }  else {
    return <Spinner />;
  }
}



const styling = {
  stroke: "rgb(209, 46, 47)",
  "stroke-width": 9,
};


 function OneStudentsGrades ({data}) {
  const [grades, setGrades] = useState(data)
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
              Back To Students
            </Button>
          </div>
        </div>
          <div className="intro row">
            <h1>{grades[0].name}'s Grades</h1>
            <svg height="30" width="700">
            <line x1="0" y1="0" x2="100%" y2="0" style={styling} />
          </svg>
          </div>
          <div className="row">
          <div className="col-12 text-center">
            
            <p>
              Below are scores {grades[0].name}
              <br />
              Here you are able to view the average grades of the modules that they have filled in so far. The highest 
            </p>
          </div>
          <svg height="40" width="100%">
            <line x1="0" y1="0" x2="100%" y2="0" style={styling} />
          </svg>
          </div>
          <div className="row">
          
            {grades.map(grade => { return(
            
              
                <div className="moduleDiv col-12">
                  <div className="text-center individualGrade"> 
                    <h3>{grade.subject_name}</h3>
                      
                      <Progress 
                        width={80} 
                        type="circle"
                        strokeColor={{
                        '0%': '#ff0000',
                        '100%': '#00ff00',
                      }}
                      percent={grade.round?grade.round:0}
                      />
                </div>
            </div>)
          
        })}
        </div>
       
        </div>
      </div>
    )
}






