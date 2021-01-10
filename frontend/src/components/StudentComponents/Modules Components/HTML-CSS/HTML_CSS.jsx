
import React, { useState } from "react";
import useFetch from "../../../../Auth/useFetch";
import Spinner from "../../../UI/Spinner";
import { Table, Button, Tag } from "antd";
import "antd/dist/antd.css";
import "./HTML_CSS.scss";


export default function HTML_CSS() {
  let { status, data, error } = useFetch(
    "http://localhost:3001/api/Modules/HTML_CSS/Topics"
  );
  console.log(data);

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  } else if (status === "success") {
    return <HtmlTopicList data={data} />;
  } else {
    return <Spinner />;
  }
}

const HtmlTopicList = ({ data }) => {
  // let history = useHistory();
  //let auth = useAuth();

  console.log("this the data", data);
  const tableHeaders = [20, 40, 60, 80, 100];

<<<<<<< HEAD
const HtmlTopicList = ({data})=> {
  
    const tableHeaders = ["Very Unconfident", "Unconfident", "Somewhat Confident", "Confident", "Very Confident"]
    
    const [state, setState] = useState({
        task: { options: tableHeaders,
         extras: data},
        selected: {}
      }
      )
      const handleSubmit = (e) => {
        e.preventDefault()
      }
      const onRadioChange = e => {
        let name = e.currentTarget.name;
        let value = e.currentTarget.value;
        setState({
          ...state,
          selected: { ...state.selected, [name]: value }
        });
      };
      const onSubmit = () => {
        
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
                  key={option}
                  className = {ChooseColor(option)}
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
                <h1>HTML & CSS</h1>
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
            <Button onClick={handleSubmit} type="primary">
              {" "}
              Submit
            </Button>
          </div>
        );
}
function ChooseColor(option) {
  let className = "";
  switch(option){
    case 'Very Unconfident':
    className= '#ff1a1a';
    break;
    case 'Unconfident':
    className= '#ff8c1a';
    break;
    case 'Somewhat Confident':
    className= '#ffff1a';
    break;
    case 'Confident':
    className= '#c6ff1a';
    break;
    case 'Very Confident':
    className= '#53ff1a';
    break;
    default:
      className = "";
  }
  return className;
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
    title: "HTML-CSS Topics",
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
>>>>>>> 9b66021d4ea2c4b1a26f24fe0da0445711ec909c
