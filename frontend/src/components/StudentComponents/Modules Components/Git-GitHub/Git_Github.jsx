import React, { useState, useEffect } from "react";
import useFetch from "../../../../Auth/useFetch";
import Spinner from "../../../UI/Spinner";
import { Table, Button, Tag } from "antd";
import "antd/dist/antd.css";
import "./Git_GitHub.scss";
import { Demo, getAverage } from "../JavaScript/JavaScript";
import { useAuth } from "../../../../Auth/use-auth";
import HowToIntro from "../../../StudentComponents/HowToIntro";

export default function Git_GitHub() {
  let { status, data, error } = useFetch(
    `${process.env.REACT_APP_URL}/api/Modules/Git_GitHub/Topics`
  );
 console.log(data);
  const auth = useAuth();

  const [grade, setGrade] = useState({});

  let { status: gradeStatus, data: gradeData, error: gradeError } = useFetch(
    `${process.env.REACT_APP_URL}/api/Modules/Users/${auth.user.id}/GetGrade`
  );

  useEffect(() => {
    if (!gradeData || !data) {
      return;
    }
    let topicId = data.map((x) => x.topic_id);

    let tempGradeData = {};
    gradeData.forEach((item) => {
      if (topicId.includes(item.topic_id)) {
        tempGradeData[item.topic_id] = item.vote;
      }
    });
    setGrade(tempGradeData);
  }, [gradeData, data]);

  console.log(gradeData);

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  } else if (status === "success") {
    return <GitTopicList data={data} gradeData={grade} />;
  } else {
    return <Spinner />;
  }
}

const styling = {
  stroke: "rgb(209, 46, 47)",
  "stroke-width": 9,
};

const GitTopicList = ({ data, gradeData }) => {
  console.log("this the data", data);
  const tableHeaders = [20, 40, 60, 80, 100];
  const auth = useAuth();
  const [state, setState] = useState({
    task: { options: tableHeaders, extras: data },
    selected: gradeData,
  });
  const onRadioChange = (e) => {
    console.log(e.currentTarget);
    let name = e.currentTarget.id;
    let value = e.currentTarget.value;
    setState({
      ...state,
      selected: { ...state.selected, [name]: value },
    });
  };

  useEffect(() => {
    setState({ ...state, selected: gradeData });
  }, [gradeData]);




  const onSubmit = () => {

    const results = [];
    for (const [key, value] of Object.entries(state.selected)) {
      results.push({
        topic_id: key,
        vote: value,
      });
    }
    fetch(`${process.env.REACT_APP_URL}/api/users/${auth.user.id}/add-grade`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(
          window.localStorage.getItem("token")
        )}`,
      },
      body: JSON.stringify(results),
    });
  };
  let columns = [];
  columns.push({
    title: "Topics",
    dataIndex: "name",
    key: "name",
    width: "30vw",
  });
  state.task.options.forEach((option, i) => {
    columns.push({
      title: option,
      key: option,
      align: "center",
      render: (row) => {
        
        return (
          <input
            type="radio"
            checked={state.selected[row.id] == option}
            onChange={onRadioChange}
            name={row.name}
            id={row.id}
            value={option}
            
          />
        );
      },
    });
  });
  let rowHeaders = [];
  state.task.extras.forEach((extra, i) => {
    rowHeaders.push({ id: extra.topic_id, name: `${i + 1}.${extra.name}` });
  });
  return (
    <div>
      <div className="backDiv">
        <Button href="/student_main" className="backLink btn-lg rounded-lg">
          Back To Modules
        </Button>
        
      </div>
      <h1>Git/Github</h1>
      <HowToIntro />
      <Table
        columns={columns}
        dataSource={rowHeaders}
        size="middle"
        bordered
        pagination={false}
      />

      <br />
      <Demo newAddingValue={getAverage(state.selected)} />
      <br />
      <div className="subBut">
        <Button
          onClick={onSubmit}
          type="primary"
          id="submitBtn"
          className="btn-lg rounded-lg"
        >
          {" "}
          Submit
        </Button>
      </div>
      
    </div>
  );
};
