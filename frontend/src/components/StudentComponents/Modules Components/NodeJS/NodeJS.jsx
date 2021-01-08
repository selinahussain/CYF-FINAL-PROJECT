import React, {useState} from 'react';
import "./NodeJS.scss";
import {Button, Tag, Table} from 'antd'
import 'antd/dist/antd.css'
export default function NodeJS() {
    const tableHeaders = ["0%-20%", "20%-40%", "40%-60%", "60%-80%", "80%-100%"] 
    const tableTopics = [
        "Be able to create a basic express server",
        "Understand what NPM is and how to use it",
        "Be able to install third party libraries with NPM",
        "Be able to use express to create a basic API",
        "Understand what a CRUD application does",
        "Be able to implement a GET request",
        "Be able to implement a POST request",
        "Be able to implement a DELETE request"
    ]
    const [state, setState] = useState({
        task: { options: tableHeaders,
         extras: tableTopics},
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
                  checked={state.selected[row.name] == option}
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
          rowHeaders.push({ name: `${i + 1}.${extra}` });
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
