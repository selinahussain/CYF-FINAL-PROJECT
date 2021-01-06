
import './StudentMainPage.scss';
import StudentSideBar from '../../components/StudentComponents/StudentSideBar';
import StudentModulesBody from '../../components/StudentComponents/StudentModulesBody';


const StudentMainPage = () => {
  return (
    <div>
      
     <h1>Hi I am Student main page</h1>
     <StudentModulesBody />
     <StudentSideBar />

    </div>
  );
};

export default StudentMainPage;