<<<<<<< HEAD
import React, {useState} from 'react';
import {Table, Button, Tag} from 'antd'
import 'antd/dist/antd.css'
=======
import React , {useState}from 'react';
import useFetch from "../../../../Auth/useFetch";
import Spinner from "../../../UI/Spinner";
>>>>>>> 6a69453b1aaf23af49437378269ac99b24a0df1c
import "./HTML_CSS.scss";
//import { ReactDOM } from 'react-dom';

export default function HTML_CSS() {
<<<<<<< HEAD
    const tableHeaders = ["0%-20%", "20%-40%", "40%-60%", "60%-80%", "80%-100%"]
    const tableTopics = [ "Understand what 'parent' and 'child' is",
    "Can create and link a stylesheet",
    "Understand what semantic tags are and how to use them",
    "Be able to include a form in a web page",
    "Be able to create a button",
    "Understand what a selector is in CSS",
    "Understand the difference between a tag, class and ID",
    "Understand what prefixes are",
    "Understand what pseudo classes are",
    "Understand the difference between padding and margin",
    "Be able to create a comment in HTML and CSS",
    "Can create a media query that triggers a change / changes on another device / screen size",
    "Understand how to implement flexbox and when to use it",
    "Understand how to implement Grid and when to use it",
    "Understand how to include Bootstrap in a project",
    "Be able to use Bootstrap classes"
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
=======
  let { status, data, error } = useFetch('http://localhost:3001/api/Modules/HTML_CSS/Topics');

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'success') {
    return <HtmlTopicList data={data} />;
  } else {
    return <Spinner />;
  }

}
  
const HtmlTopicList = ({ data }) => {
  const [topics, setTopics] = useState(data);

  return (
    <div>
      <div className="row">
          {topics.map(({ name }) => (
           
              <div className="text-center" key={name}>
               
                <h2 className="">{name}</h2>
            
                </div>
          ))
          }
      </div>
     
    </div>
  )
>>>>>>> 6a69453b1aaf23af49437378269ac99b24a0df1c
}




    