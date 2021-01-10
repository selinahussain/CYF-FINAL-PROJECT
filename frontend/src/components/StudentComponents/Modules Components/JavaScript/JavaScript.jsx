import React, { useState } from "react";
import useFetch from "../../../../Auth/useFetch";
import Spinner from "../../../UI/Spinner";
<<<<<<< HEAD
import {Table, Button, Tag} from 'antd'
import 'antd/dist/antd.css'

//import { ReactDOM } from 'react-dom';

export default function JavaScrip() {
  let { status, data, error } = useFetch('http://localhost:3001/api/Modules/Javascript/Topics');
=======
import { Table, Button, Tag } from "antd";
import { Progress } from 'antd';
//import "antd/dist/antd.css";
import "./JavaScript.scss";
//import { Fragment } from "react";
//import Demo from "./PrsgsBarJs";


export default function JavaScript() {
  let { status, data, error } = useFetch(
    "http://localhost:3001/api/Modules/JavaScript/Topics"
  );
 /// console.log(data);
>>>>>>> 9b66021d4ea2c4b1a26f24fe0da0445711ec909c

  if (status === "error") {
    return <div>Error: {error.message}</div>;
<<<<<<< HEAD
  } else if (status === 'success') {
    return <JavascriptTopicList data={data} />;
=======
  } else if (status === "success") {
    return <JavaScriptTopicList data={data} />;
>>>>>>> 9b66021d4ea2c4b1a26f24fe0da0445711ec909c
  } else {
    return <Spinner />;
  }
}
<<<<<<< HEAD


const JavascriptTopicList = ({data})=> {
  
    const tableHeaders = [0,20,40,60,80,100]
    
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
      const onSubmit = (e) => {
        e.preventDefault()
        // console.log('on submit', state.selected);
        // setState({
        //   ...state,
        //   selected: {}
        // });
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
          rowHeaders.push({ name: `${i + 1}.${extra.name}` });
        });
        return (
          <div>
            <div>
                <h1>Javascript</h1>
            </div>
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
// const HtmlTopicList = ({ data }) => {
//   const [topics, setTopics] = useState(data);
//   console.log('this the data', data);
//   return (
//     <div>
//       <div className="row">
//           {topics.map(({ name }) => (
           
//               <div className="text-center" key={name}>
               
//                 <h2 className="">{name}</h2>
            
//                 </div>
//           ))
//           }
//       </div>
     
//     </div>
//   )

// }
=======

const JavaScriptTopicList = ({ data }) => {
  
 // console.log("this the data", data);
  const tableHeaders = [20, 40, 60, 80, 100];

  const [state, setState] = useState({
    task: { options: tableHeaders, extras: data },
    selected: {},
  });
  const onRadioChange = (e) => {
    //console.log(e.currentTarget);
    let name = e.currentTarget.id;
    let value = e.currentTarget.value;
    setState({
      ...state,
      selected: { ...state.selected, [name]: value },
    });
   // console.log(value)
  };

  const addValue = (e) => {
    //console.log(e.currentTarget);
    let name = e.currentTarget.id;
    let value = e.currentTarget.value;
    setState({
      ...state,
      selected: { ...state.selected, [name]: value },
    });
  
  }
  ////////////////////////////////////////////////

  
  // const Demo =(e) => {
  //   // let name = e.currentTarget.id;
  //   // let value = e.currentTarget.value;
  //   // setState({
  //   //   ...state,
  //   //   selected: { ...state.selected, [name]: value },
  //   // })
  //   return (
  //     <div>
  //        <Progress
  //       strokeColor={{
  //         from: '#108ee9',
  //         to: '#87d068',
  //       }}
  //       percent={50}
  //       status="active"

  //     />
  //     </div>
  //   )
  // }
  










////////////////////////////////////////////////////////////////

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
    title: "JavaScript Topics",
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
      <h1>JavaScript</h1>
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
      <Button onClick={onSubmit} type="primary" id= "submitBtn">
        {" "}
        Submit
      </Button>
      <Progress
        strokeColor={{
          from: '#108ee9',
          to: '#87d068',
        }}
        percent={50}
        status="active"

      />
    </div>
  );
};


>>>>>>> 9b66021d4ea2c4b1a26f24fe0da0445711ec909c
    