import React, {useState} from 'react';
import "./React.scss";
import {Button, Table, Tag} from 'antd';
import 'antd/dist/antd.css'
export default function REACTJS() {
    const tableHeaders = ["0%-20%", "20%-40%", "40%-60%", "60%-80%", "80%-100%"] 
    const tableTopics = [
        "Understand the difference between class and functional components",
        "Be able to create a React application with create-react-app",
        "Understand what JSX is and how it's different to HTML and Javascript",
        "Be able to apply a class in JSX",
        "Be able to pass props",
        "Be able to handle events in React",
        "Be able to use ternary operators in React",
        "Be able to use conditional rendering",
        "Understand what state is and how to use it",
        "Be able to update state",
        "Understand what hooks are",
        "Be able to use the useState hook",
        "Be able to use the useEffect hook",
        "Understand what dependencies are in relation to useEffect and how this can effect the functionality of this hook",
        "Be able to handle forms in React",
        "Be able to use fetch in React"
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
