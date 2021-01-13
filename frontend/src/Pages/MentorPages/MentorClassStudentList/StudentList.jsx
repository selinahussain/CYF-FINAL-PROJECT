import React, {useState} from 'react'
import useFetch from '../../../Auth/useFetch';
import Spinner from '../../../components/UI/Spinner'
import { Link, Route } from 'react-router-dom';
import './StudentList.scss'
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';



export default function StudentList() {
  let { status, data, error } = useFetch('http://localhost:3001/api/region/classes/studentList');
  console.log('this is the data', data);
  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'success') {
    return <AllStudents data={data} />;
  } else {
    return <Spinner />;
  }
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
          
          <div className={student.name}> 
            <Button className="primary" onClick={handleClick}>{student.name} </Button>
          </div>)
          
        })}
       
      </div> 
    </div>
  )
}