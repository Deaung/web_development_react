import { useReducer } from "react";

function reducer(prevCount, action){
  if(action === 'up'){
    return prevCount+1;
  }
  else if (action === 'down'){
    return prevCount -1;
  }// 이후 조건문 작성
  else if (action === 'reset'){
    return 0;
  }
}
export default function ReducerUse(){
  // dispatch파트 같이 작성
  const [count, dispatch] = useReducer(reducer, 0);
  // const를 변경하기 위해서는 dispatch가 사용됨
  function down(){
    dispatch("down")
  }
  function up(){
    dispatch("up")
  }
  function reset(){
    dispatch("reset")
  }
  //return은 동일하게 작성
  return();
}