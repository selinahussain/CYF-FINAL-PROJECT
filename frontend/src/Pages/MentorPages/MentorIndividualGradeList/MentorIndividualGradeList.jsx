import React, {useState} from 'react'
import useFetch from '../../../Auth/useFetch';
import { Progress } from "antd";
import "antd/dist/antd.css";
import { useAuth } from "../../../Auth/use-auth";






export default function MentorIndividualGradeList () {
  const auth = useAuth();
  let { status, data, error } = useFetch(`http://localhost:3001/api/getStudentGrade`);
  console.log(data);
  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'success') {
    return <OneStudentsGrades  data={data} />;
  }  
}






 function OneStudentsGrades ({data}) {
  const [grades, setGrades] = useState(data)
  return (
    <div>
       <div className="all-students">
        
        
        {grades.map(grade => { return(
          
          <div > 
            <h1> hello I am grade </h1>
          <h1>{grade.round} </h1>
          <span>{grade.subject_name}</span>
          <Progress
          type="circle"
           strokeColor={{
          '0%': '#108ee9',
           '100%': '#87d068',
           }}
      percent={grade.round}
     />
          </div>)
          
        })}
       
      </div> 
    </div>
  )
}






