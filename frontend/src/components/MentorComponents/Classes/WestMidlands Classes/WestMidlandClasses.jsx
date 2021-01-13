





import { useState } from 'react';
import { Link,Route} from 'react-router-dom';
import useFetch from '../../../../Auth/useFetch';
import StudentList from '../../../../Pages/MentorPages/MentorClassStudentList/StudentList';
import Spinner from '../../../UI/Spinner';
//import './MentorRegions.scss';

const WestMidlandClasses = () => {
  let { status, data, error } = useFetch('http://localhost:3001/api/region/classes');
 console.log(data);
  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'success') {
    return <ClassList data={data} />;
  } else {
    return <Spinner />;
  }
};

const ClassList = ({ data }) => {
  const [regions, setRegions] = useState(data);


  return (
    <div>
        <h2> Please Select a Classes</h2>
      <div className="row">
         { regions.map(({ name }) => (
            <div className="col-12 col-md-6 col-xl-4 rounded " key={name}>
              <div className="text-center image-container">
                <Link to={`/West Midlands/${name}/Students`}>
  
                  <h2 className="region">{name}</h2>
                </Link>
              </div>
             
            </div>
          ))
        }
      </div>
      <div>
            <Route path={`/West Midlands/West Midlands Class 1/Students`} component={StudentList} />
           
          </div>
    </div>
  );
};

export default WestMidlandClasses;