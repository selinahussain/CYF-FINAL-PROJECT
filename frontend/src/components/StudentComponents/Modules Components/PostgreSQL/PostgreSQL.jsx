import React , {useState,useEffect} from 'react';
import useFetch from "../../../../Auth/useFetch";
import Spinner from "../../../UI/Spinner";
import {Table, Button} from 'antd'
import 'antd/dist/antd.css'
import "./PostgreSQL.scss";
import {Demo, getAverage} from "../JavaScript/JavaScript"
import { useAuth } from "../../../../Auth/use-auth";


export default function PostgreSQL() {
  let { status, data, error } = useFetch('http://localhost:3001/api/Modules/PostgreSQL/Topics');

  console.log(data);
  const auth = useAuth();

  const [grade,setGrade] = useState({})
 
 
 
  let { status:gradeStatus, data:gradeData, error:gradeError } = useFetch(
   `http://localhost:3001/api/Modules/Users/${auth.user.id}/GetGrade`
 );
 
 useEffect(() => {
  if(!gradeData || !data){
     return 
  }
  let topicId = data.map(x=>x.topic_id)
 
  let tempGradeData = {}
  gradeData.forEach((item)=>{
    if(topicId.includes(item.topic_id)){
     tempGradeData[item.topic_id]=item.vote;
    }
    
  })
 setGrade(tempGradeData);
  
 }, [gradeData,data])
 
 
 console.log(gradeData);

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  } else if (status === 'success') {
    return <PostgreSqlTopicList data={data} gradeData = {grade}/>;
  } else {
    return <Spinner />;
  }

}


const PostgreSqlTopicList = ({ data,gradeData  }) => {

  //console.log("this the data", data);
  const tableHeaders = [20, 40, 60, 80, 100];
  const auth = useAuth()
  const [state, setState] = useState({
    task: { options: tableHeaders, extras: data },
    selected: gradeData ,
  });
  const onRadioChange = (e) => {
    
    let name = e.currentTarget.id;
    let value = e.currentTarget.value;
    setState({
      ...state,
      selected: { ...state.selected, [name]: value },
    });
  };

  useEffect(()=>{
    setState({...state,selected:gradeData})
  },[gradeData])

  const onSubmit = () => {
    // convert TO array
    const results = [];
    for (const [key, value] of Object.entries(state.selected)) {
      results.push({
        topic_id: key,
        vote: value,
      });
    }
    fetch(`http://localhost:3001/api/users/${auth.user.id}/add-grade`, {
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
    title: "PostgreSQL Topics",
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
      <Demo newAddingValue={getAverage(state.selected)}/>
    </div>
  );
};
