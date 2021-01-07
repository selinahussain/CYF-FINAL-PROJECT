import React, {useState} from 'react';
import "./JavaScript.scss";
import {Table, Button, Tag} from 'antd';
import 'antd/dist/antd.css'
export default function JavaScript() {
    const tableHeaders = ["0%-20%", "20%-40%", "40%-60%", "60%-80%", "80%-100%"] 
    const tableTopics = [
        "Be able to link a Javascript file in your project",
        "Be able to do a console.log()",
        "Understand what a console.log is used for",
        "Understand what a console.log is used for",
        "Understand the different types of data in Javascript e.g. string, integer, etc.",
        "Be able to assign a variable with const and let",
        "Understand the difference between const and let",
        "Be able to write a function",
        "Be able to use concatentation",
        "Be able to use string methods like length, indexOf(), slice(), splice(), toUpperCase(), etc.",
        "Understand what a return statement does",
        "Be able to use a callback function",
        "Understand the difference between expressions and statements",
        "Understand what a conditional is",
        "Be able to write an if/else statement",
        "Be able to use a ternary operator",
        "Understand what booleans are",
        "Understand how to use comparision operators like < and >",
        "Understand how to use logical operators like && and ||",
        "Understand the difference between for and while loops",
        "Be able to write a regular for loop",
        "Be able to write a forEach loop",
        "Be able to write a forEach loop",
        "Understand what arrays are",
        "Be able to use array methods like pop(), push(), shift(), unshift(), splice(), includes(), etc.",
        "Understand what an anonymous function is",
        "Be able to use the map() method",
        "Be able to use filter() method",
        "Be able to chain methods",
        "Understand what an object is",
        "Can access and retrieve data from an object",
        "Can edit data in an object",
        "Be able to create a method in an object",
        "Be able to call a method in an object",
        "Be able to use methods like map(), filter(), etc with objects",
        "Be able to use built-in object methods like .keys()",
        "Be able to loop over an object with for...in",
        "Be able to convert an object into an array",
        "Understand what the DOM is",
        "Be able to manipulate the DOM with query selectors like getElementById, querySelectorAll, etc.",
        "Be able to set up event listeners like click",
        "Create HTML elements with Javascript",
        "Create HTML elements with Javascript",
        "Be able to use Javascript to modify HTML elements e.g. their CSS properties",
        "Understand the difference between synchronous and asynchronous",
        "Understand the difference between client and server",
        "Understand the difference between GET and POST",
        "Be able to make GET requests",
        "Be able to make POST requests",
        "Be able to debug your code with tools like DevTools",
        "Understand what common errors mean e.g. Syntax Error, Reference Error",
        "Understand what an API is and what they are used for",
        "Understand what a Promise is",
        "Be able to make a fetch() request",
        "Understand what JSON is",
        "Be able to handle JSON data from a fetch() request",
        "Understand what scope is and how it can affect your code",
        "Be able to use array destructuring"
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
