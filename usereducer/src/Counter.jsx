import { useReducer } from "react";

// 1. 초기상태 
const initialState = { count: 0 }

// 2. reducer 함수
function reducer(state, action){
  switch (action.type){
    case "increment":
      return{ count : state.count +1}
    case "decrement":
      return{ count: state.count -1}
    default:
      return state;
  }
}

// 3 컴포넌트 상에서의, useReducer호출
export default function Counter(){
  const [ state, dispatch] = useReducer(reducer, initialState)

  return(
    <div>
      <p>Count : {state.count}</p>
      <button onClick={()=> dispatch({type: "increment"})}>+</button>
      <button onClick={()=> dispatch({type: "decrement"})}>-</button>
    </div>
  )
}