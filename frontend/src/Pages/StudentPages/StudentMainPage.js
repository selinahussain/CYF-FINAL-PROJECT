
import './StudentMainPage.scss';
import StudentSideBar from '../../components/StudentComponents/StudentSideBar';
import StudentModulesBody from '../../components/StudentComponents/StudentModulesBody';



const StudentMainPage = () => {
  return (
    <div className="main-contents">
      <div className="sideBar">
        <StudentSideBar />
      </div>
      <div className="rightSide">
        <StudentModulesBody />
      </div>
    </div>
  );
};

export default StudentMainPage;