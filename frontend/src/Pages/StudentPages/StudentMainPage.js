import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import useFetch from '../../Auth/useFetch';
import Spinner from '../../components/UI/Spinner';
import './StudentMainPage.scss';
//import wm1 from '../../images/classes/wm1.jpg';
//import wm2 from '../../images/classes/wm2.jpg';
//import london from '../../images/classes/london.jpg';
//import glasgow from '../../images/classes/glasgow.jpg';
//import fallbackImage from '../../images/shot.png';

const StudentMainPage = () => {
  let { status, data, error } = useFetch('http://localhost:3001/api/classes');

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'success') {
    return <ClassesList data={data} />;
  } else {
    return <Spinner />;
  }
};

const ClassesList = ({ data }) => {
  const [classes, setClasses] = useState(data);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    const filteredClasses = data.filter((cohort) =>
      cohort.name.toLowerCase().includes(term)
    );
    setClasses(filteredClasses);
  };

  return (
    <div>
     <h1>Hi I am Student main page</h1>
    </div>
  );
};

export default StudentMainPage;