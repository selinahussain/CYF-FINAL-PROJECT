import React, {useState} from 'react'
import useFetch from '../../../Auth/useFetch';
import Spinner from '../../../components/UI/Spinner'
import { Route, Link } from "react-router-dom";
import './StudentList.scss'
import "antd/dist/antd.css";
import MentorIndividualGradeList from '../MentorIndividualGradeList/MentorIndividualGradeList';




export default function StudentList() {
  let { status, data, error } = useFetch('http://localhost:3001/api/region/classes/studentList');
  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'success') {
    return <div> <AllStudents data={data} />  </div>;
  } else {
    return <Spinner />;
  }
}






 


const AllStudents = ({data}) =>{
  const [students, setStudents] = useState(data)
  return(
    <div className = "container">
     <div className="row">
        {students.map((student) => (
          <div className= "moduleDiv">
            <div className="text-center modules" key={student.id}>
              <Link to={`/students/${student.id}`}>

                <h2 className="">{student.name}</h2>
                <h2>{student.id}</h2>
              </Link>


            </div>
            <div>
            <Route path={`/students/${student.id}`} component={MentorIndividualGradeList} />
          </div>
          </div>
        ))}
      </div>
   </div>
  )
 
}
