<<<<<<< Updated upstream
import React, {useState} from 'react';
=======
import React , {useState}from 'react';
import useFetch from "../../../../Auth/useFetch";
import Spinner from "../../../UI/Spinner";
>>>>>>> Stashed changes
import "./Git_GitHub.scss";
import {Table, Button, Tag} from 'antd';
import 'antd/dist/antd.css' 

<<<<<<< Updated upstream
export default function Git_Github() {
    const tableHeaders = ["0%-20%", "20%-40%", "40%-60%", "60%-80%", "80%-100%"] 
    const tableTopics = [
        "Can initialize a repo for a new project",
        "Can use a .gitignore file",
        "Can use the commands git add, git commit and git push correctly",
        "Can make a pull request on GitHub",
        "Know how to handle a merge conflict",
        "Know how to fork a repo and understand how this differs from cloning"
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
export default function Git_GitHub() {
  let { status, data, error } = useFetch('http://localhost:3001/api/Modules/Git_GitHub/Topics');

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'success') {
    return <GitTopicList data={data} />;
  } else {
    return <Spinner />;
  }

}
  
const GitTopicList = ({ data }) => {
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
>>>>>>> Stashed changes
}
