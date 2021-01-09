import React , {useState} from 'react';
import useFetch from "../../../../Auth/useFetch";
import Spinner from "../../../UI/Spinner";
import {Table, Button, Tag} from 'antd'
import 'antd/dist/antd.css'
import "./NodeJS.scss";
//import { ReactDOM } from 'react-dom';

export default function NodeJS() {
  let { status, data, error } = useFetch('http://localhost:3001/api/Modules/NodeJS/Topics');

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'success') {
    return <NodeJsTopicList data={data} />;
  } else {
    return <Spinner />;
  }

}


const NodeJsTopicList = ({data})=> {
  console.log('this the data', data);
    const tableHeaders = ["0%-20%", "20%-40%", "40%-60%", "60%-80%", "80%-100%"]
    
    const [state, setState] = useState({
        task: { options: tableHeaders,
         extras: data},
        selected: {}
      }
      )
      const onRadioChange = e => {
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;
        setState({
          ...state,
          selected: { ...state.selected, [name]: value }
        });
      };
      const onSubmit = () => {
        console.log(state.selected);
        setState({
          ...state,
          selected: {}
        });
      };
        let columns = [];
        columns.push({
          title: "Topics",
          dataIndex: "name",
          key: "name",
          width: "45vw"
        });
        state.task.options.forEach((option, i) => {
          columns.push({
            title: option,
            key: option,
            render: row => {
              return (
                <input
                  type="radio"
                  checked={state.selected[row.name] === option}
                  onChange={onRadioChange}
                  name={row.name}
                  value={option}
                />
              );
            }
          });
        });
        let rowHeaders = [];
        state.task.extras.forEach((extra, i) => {
          rowHeaders.push({ name: `${i + 1}.${extra.name}` });
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
            <Tag color="red">Selected options</Tag>
            <br />
            {JSON.stringify(state.selected)}
            <br />
            <Button onClick={onSubmit} type="primary">
              {" "}
              Submit
            </Button>
          </div>
        );
}
