import React,{useState} from 'react';
import {Route,Link, Switch,Redirect,Router} from 'react-router-dom';
import useFetch from '../../Auth/useFetch';
import Spinner from '../UI/Spinner';
import "./StudentModulesBody.scss";
import JavaScript from "../../components/StudentComponents/Modules Components/JavaScript/JavaScript";




export default function StudentModulesBody() {

   let { status, data, error } = useFetch('http://localhost:3001/api/subjects');

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'success') {
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
              <div className="text-center modules" key={name}>
                <Link to={`/modules/${name}`}>
                <h2 className="">{name}</h2>
                </Link>
                
            </div>
          ))
          }
      </div>
      <div>
       <Switch>
            
            <Route path="/modules/JavaScript" component={JavaScript} />
            
                </Switch> 
      </div>
    </div>
  );
};



//     return (
//         <div className = "modules">
//             <Link to= {`/modules/moduleName`}>
//             <button>go to detail</button>
//             </Link>
//         </div>
//     )
// }
// }