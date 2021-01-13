import React, {useState} from 'react'
import Spinner from '../../../components/UI/Spinner'
import useFetch from '../../../Auth/useFetch';
import CYFPic from '../../../Assets/images/cyf-classes.jpg'
import './mentorClassesPage.scss'
import { Link } from 'react-router-dom';



export default function MentorClassesPage() {
  let { status, data, error } = useFetch('http://localhost:3001/api/region/classes');
  console.log('this is the data', data);
  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'success') {
    return <AllClasses data={data} />;
  } else {
    return <Spinner />;
  }
}



const AllClasses = ({data}) =>{
  const [classes, setClasses] = useState(data)
  return(
    <div className="AllContents">
      <Link to="/region/classes/studentList">

      <div className="classes-div">
          {classes.sort().map((x)=>(
            <div className="single-class">
              <div className={x.name}></div>
              <div className="text"><p>{x.name}</p> </div>
            </div>
          ))}
      </div>
      </Link>
      <div className="background-div">
        <img alt="" src={CYFPic} />
      </div>
    </div>
  )
}