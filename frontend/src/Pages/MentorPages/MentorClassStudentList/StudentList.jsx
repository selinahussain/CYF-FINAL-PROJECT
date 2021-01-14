import React, {useState} from 'react'
import useFetch from '../../../Auth/useFetch';
import Spinner from '../../../components/UI/Spinner'

import './StudentList.scss'
import { useHistory } from 'react-router-dom';

import { Progress } from "antd";
import "antd/dist/antd.css";




export default function StudentList() {
  let { status, data, error } = useFetch('http://localhost:3001/api/region/classes/studentList');
  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'success') {
    return <AllStudents data={data} />;
  } else {
    return <Spinner />;
  }
}


export const Demo = () => {
  return (
    <div>

<Progress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={20}
    />
      {/* <Progress
        strokeColor={{
          from: "#d12f2f",
          to: "#87d068",
        }}
        strokeWidth="20px"
        percent={20}
        status="active"
      /> */}
    </div>
  );
};




export function GetAvg() {
  let { status, data, error } = useFetch('http://localhost:3001/api/getStudentsAllGrade');

  const [avg,setAvg] = useState(data)
  console.log(avg)
  return (
    <div>
      <h2> hello I am average of Marcin :</h2>
    </div>
  )
}



const AllStudents = ({data}) =>{
  const [students, setStudents] = useState(data)
  let history = useHistory()
  const handleClick =(e) =>{
    e.preventDefault()
  // history.push("/classes")
  }
  return(
    <div className = "container">
      <div className="heading">
        <h1>Students</h1>
        <span>Please select which region you would like view its classes!</span>
      </div>
      <div className="all-students">
        
        
        {students.map(student => { return(
          
          <div className={student.name} > 
          <h1>{student.name} </h1>
          <span>{student.id}</span>
          </div>)
          
        })}
       
      </div> 
      <GetAvg />
      <Demo />
      <Demo />
      <Demo />
      <Demo />
      <Demo />
      <Demo />
    </div>
  )
}