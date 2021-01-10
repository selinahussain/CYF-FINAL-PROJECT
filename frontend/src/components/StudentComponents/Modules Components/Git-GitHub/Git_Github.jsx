import React , {useState} from 'react';
import useFetch from "../../../../Auth/useFetch";
import Spinner from "../../../UI/Spinner";
import {Table, Button, Tag} from 'antd'
import 'antd/dist/antd.css'
import "./Git_GitHub.scss";


export default function Git_GitHub() {
  let { status, data, error } = useFetch('http://localhost:3001/api/Modules/Git-GitHub/Topics');

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'success') {
    return <GitTopicList data={data} />;
  } else {
    return <Spinner />;
  }

}


const GitTopicList = ({ data }) => {

  console.log("this the data", data);
  const tableHeaders = [20, 40, 60, 80, 100];

  const [state, setState] = useState({
    task: { options: tableHeaders, extras: data },
    selected: {},
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
  const onSubmit = () => {
    // convert TO array
    const results = [];
    for (const [key, value] of Object.entries(state.selected)) {
      results.push({
        topic_id: key,
        vote: value,
      });
    }
    fetch("http://localhost:3001/api/add-grade", {
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
    title: "Git/GitHub Topics",
    dataIndex: "name",
    key: "name",
    width: "45vw",
  });
  state.task.options.forEach((option, i) => {
    columns.push({
      title: option,
      key: option,
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
      <Table
        columns={columns}
        dataSource={rowHeaders}
        size="middle"
        bordered
        pagination={false}
      />
      {/* <Tag color="red">Selected options</Tag> */}
      <br />
      {JSON.stringify(state.selected)}
      <br />
      <Button onClick={onSubmit} type="primary">
        {" "}
        Submit
      </Button>
    </div>
  );
};
