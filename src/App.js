import {useState} from 'react';
import axios from 'axios';

const App=()=>{
  const[data, setData] = useState(null);
  
  const onClick=()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=kr&apikey=2275c1ed4cf8447582d46ada9859831f",/*{
      headers:{
        Authorizaion:"Xkj0WKwCnecDGF4RCVJfNosJtVSBEU23EivB"
      }
    }*/).then(response=>{
      setData(response.data);
    });

  return;
};

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data&&<textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true}/>}
      </div>
  
  );
};

export default App;