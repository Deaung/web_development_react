// import {useState, useEffect}  from 'react';

// function Counter() {
//   const[count, setCount]=useState(0);

//   useEffect(() => {
//     console.log('useEffect가 실행됨')
//   },[]);

//   return(
//   <>
//     <p>{count}</p>
//     <button onClick={()=> setCount(preCount => preCount+1)}>+1</button>
//   </>
// );
// }
// export default Counter

// 이사의 코드대로 실행할 경우 콜백함수는 렌더링때마다 실행됨
// 즉 버튼을 누를때 마다 useEffect가 실행됬다 출력

// 이상의 문제 해결을 위해 사용할 수 있는 방식이
// 두번째 argument인 depedndencies 배열을 이용하는 방법
// 이번에 작성할 코드는 count 상태 값이 변경되면 useEffect 콜백 함수가 호출되도록 정의하는 방식

// 두번째 argument는 배열이므로 내부에 다양한 element가 들어갈 수 있고, 여러 상태 값중 하나만 변경되더라도ㅓ
// useEffect 콜백함수가 호출되도록 할 예정

// import {useState, useEffect}  from 'react';
// import './App.css'

// function Counter() {
//   const[count, setCount]=useState(0);

//   useEffect(() => {
//     console.log('useEffect가 실행됨')
//   },[count]);

//   return(
//   <>
//     <p>{count}</p>
//     <button onClick={()=> setCount(preCount => preCount+1)}>+1</button>
//   </>
// );
// }
// export default Counter

import {useState, useEffect}  from 'react';
import './App.css'

// function Counter() {
//   const[count, setCount]=useState(0);

//   useEffect(() => {
//     console.log('Hello from useEffect')
//     return()=>{
//       console.log('Clean Up Function')
//     }
//   },[count]);

//   return(
//   <>
//     <p>{count}</p>
//     <button onClick={()=> setCount(preCount => preCount+1)}>+1</button>
//   </>
// );
// }
// export default Counter
/**
 * 이상의 코드 작성시 
 * 'Hello from useEffect'
 * 'Clean Up Function'
 * 'Hello from useEffect' 까지만 콘솔에 찍히는것 확인 가능
 * 즉 useEffect이후 두번째 argument 인 count 값이 바뀌지 않았기 때문에 cleanup 이 일어나지 
 * 않았음
 * 이후 버튼을 눌러 conut 값을 +1 할때 마다 Clean Up Funtion이 먼저 콘솔에 나오고 이후
 * 'Hello from useEffect'가 나오는것 확인 가능
 * 
 * 초기 렌더링이 끝나면 컴포넌트가 마운트 해제되고 정리함수 호출됨
 */
function Counter() {
  const[count, setCount]=useState(0);
  const[count2, setCount2]=useState(0);

  useEffect(() => {
    console.log('Hello from useEffect')
    return()=>{
      console.log('Clean Up Function')
    }
  },[count,count2]); // 차이를 확인하기 위해 count2를 지웠다 썻다 실험

  return(
  <>
    <p>{count}</p>
    
    <p>{count2}</p>
    
    <button onClick={()=> setCount(preCount => preCount+1)}>+1</button>
    
    <button onClick={()=> setCount2(preCount => preCount+1)}>+1</button>
  </>
);
}
export default Counter