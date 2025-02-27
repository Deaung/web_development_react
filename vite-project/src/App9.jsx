import useTitle from "./script/useTitle";
import { useState } from "react";
import './App.css'

function Counter(){

  const [count, setCount] = useState(0);
  useTitle(`당신은 ${count}번 클릭했습니다✨`);

  return(
  <>
    <h1>카운트{count}</h1>
    <br /><br /><br /><br />
    <button onClick={()=>setCount((count) => count + 1)}>버튼</button>
  </>
  );
}

export default Counter