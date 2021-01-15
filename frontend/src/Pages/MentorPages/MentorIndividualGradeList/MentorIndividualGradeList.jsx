import React, {useState} from 'react';
import { Link, useParams } from "react-router-dom";
import useFetch from '../../../Auth/useFetch';
import { Progress } from "antd";
import "antd/dist/antd.css";

//import { useAuth } from "../../../Auth/use-auth";
import Spinner from "../../../components/UI/Spinner";






export default function MentorIndividualGradeList () {
  let { id } = useParams();


  let { status, data, error } = useFetch(`http://localhost:3001/api/student/${id}/getStudentGrade`);
  console.log(("indiv stu", data));
  
  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'success') {
    return <OneStudentsGrades  data={data} />;
  }  else {
    return <Spinner />;
  }
}






 function OneStudentsGrades ({data}) {
  const [grades, setGrades] = useState(data)
  return (
    <div>
       <div className="all-students">
        
        <h1>{grades[0].name}</h1>
        {grades.map(grade => { return(
           
          <div className="students-grades"> 
            
          <span>{grade.subject_name}</span>
          <Progress
          type="circle"
           strokeColor={{
          '0%': '#ff0000',
           '100%': '#00ff00',
           }}
      percent={grade.round}
     />
          </div>)
          
        })}
       
      </div> 
    </div>
  )
}






