
import './StudentMainPage.scss';
import StudentSideBar from '../../components/StudentComponents/StudentSideBar';
import StudentModulesBody from '../../components/StudentComponents/StudentModulesBody';
import JavaScript from '../../components/StudentComponents/Modules Components/JavaScript/JavaScript';


const StudentMainPage = () => {
  return (
    <div>
      
     <h1>Hi I am Student main page</h1>
     <StudentModulesBody />
     <StudentSideBar />
     <JavaScript/>
    </div>
  );
};

export default StudentMainPage;