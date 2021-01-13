import "./StudentMainPage.scss";
import StudentSideBar from "../../components/StudentComponents/StudentSideBar";
import StudentModulesBody from "../../components/StudentComponents/StudentModulesBody";
import inprogress from "../../Assets/images/inprogress.png";

const styling = {
  stroke: "rgb(209, 46, 47)",
  "stroke-width": 9,
};

const StudentMainPage = () => {
  return (

    <div>
      <div className="row">
        <div className="col-sm-6 col-md-3 col-lg-3">
          <StudentSideBar />
        </div>
        <div className="col-sm-6 col-md-9 col-lg-9">
          <div className="row">
            <h1>Welcome To Your Tracker!</h1>

            <svg height="30" width="700">
              <line x1="0" y1="0" x2="100%" y2="0" style={styling} />
            </svg>
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12">
              <h4> How to get started:</h4>
              <p>
                Below are links to the list of modules that you will learn
                throughout your time at CodeYourFuture.
                <br />
                You will be redirected to a separate page, depending on the
                module you click on, where you will be able to choose your level
                of confidence with the buttons displayed next to each statement.{" "}
                <br /> It is a perfect place for you to be able to keep track of your
                progress. So let's get started!
              </p>
            </div>
            <div className="col-5">
              <div className="progress_icon_container">
                <div className="inprogress_image">
                  <img alt="" src={inprogress} class="d-none d-sm-block" />
                </div>
              </div>
            </div>
            <svg height="40" width="100%">
              <line x1="0" y1="0" x2="100%" y2="0" style={styling} />
            </svg>
          </div>
          <div className="row">
            <StudentModulesBody />
          </div>
        </div>

      </div>
    </div>
  );
};

export default StudentMainPage;
