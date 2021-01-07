import React , {useState}from 'react';
import useFetch from "../../../../Auth/useFetch";
import Spinner from "../../../UI/Spinner";
import "./HTML_CSS.scss";

export default function HTML_CSS() {
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
}




    