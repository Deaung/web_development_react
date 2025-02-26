// import React, {useState} from "react";
// /**
//  * 1. Counter 컴포넌트를 생성하고 초기값이 0 인 count 상태를 선언
//  */
// function Counter(){
//   const [count, setCount] = useState(0);

//   return <div></div>
// }
// export default Counter

/**
 * 2. 다음으로 상태를 1 씩 증가시키는 버튼요소 렌더링
 * onClick 이벤트 속성을 이용하여 setCount함수를 호출하고 
 * 새 값은 현재 값에 +1 더하는 값을 설정
 */

// import React,{useState} from "react";

// function Counter(){
//   const[count, setCount] = useState(0)

//   return(
//     <div>
//       <p>현재 카운트 값 = {count}</p>
//       <button onClick={()=>setCount(count+1)}>증가시킵니다</button>
//     </div>
//   );
// }
// export default Counter

/**
 * 참고 사항 : React에서 이벤트의 이름은 카멜케이스로 작성(ex : onClick)
 * 
 * 
 */

{/* <button onClick={()=> setCount(count+1)}>증가</button> */}

// 틀린예
{/* <button onClick={setCount(count+1)}>증가</button> */}
/**
 * 이벤트 핸들러에서 함수 직접 호출할 경우 컴포넌트가 렌더링 될때
 *  함수가 호출되어 무한루프발생 할 수 있음 
 * 
 * setCount의 경우
 * const [count, setCount] = useState(initialValue)로 정의 되었을 뿐인데, 
 * 왜 setCount(argument)형태로 호출하는가
 * 
 * setCount(count+1);의 근거
 * 
 * useState를 사용하는 순간 배열의 0번지는 상태 그자체에 해당하는 필드명으로
 * 선언되고
 * 1번지는 setter 개념으로서 0번지의 상태값을 업데이트 하도록 사전에 되어있음
 * 
 * 그렇기 때문에 따로 setter형태로 함수를 정의하지 않더라도 
 * call2()(매개변수 있고 리턴값 없는) 유형의 함수로 만들어지는것을 의미 
 */

//  const[ count, setCount ] = useState(initialValue);
// 60번 라인까지의 count = initialValue
// setCount(newValue);
// 이후로는 count = newValue

/**
 * 그리고 이벤트 핸들러 내부에서 화살표 함수로 작성해야 하는데
 * (즉시 실행함수가 아니라)
 * 
 * 화살표 함수 :
 *  전달방식 - 함수 참조 전달
 *  실행 시점 - 클릭시에만 실행
 *  결과 - 버튼 클릭시에만 증가
 * 즉시 실행 함수 :
 *  전달 방식 - 함수의 실행결과값을 전달
 *  실행시점 - 컴포넌트 렌더링 시
 *  결과 - 렌더링이 멈추지 않기 때문에 계속해서 함수 호출(무한루프)
 */

/**
 * 이상까지 작성 했을 경우 App.jsx의 button과 비교해 보면 하나 차이가 있음
 * App5에서 작성한 유형은 매개변수는 없으나 return 값은 있는 형태
 * 그러나 App.jsx에서는 setCount((count)=>count+1)
 * 으로 작성되어 매개변수와 리턴값 이 있는 형태로 작성된것을 알 수 있음
 * 
 * 이상의 차이가 나는 이유는 리액트의 성격 때문인데
 * 상태 업데이트는 비동기적으로 일어남, 새 상태 값이 현재 상태 값에 
 * 따라 달라질 수 있다는 문제가 있음
 */

// 비동기적으로 상태가 업데이트 된다는 사례 증명하는것
// 리액트 컴포넌트 내의 상태를 사용하는 useState를 적용
// useState가 자바스크립트 식 함수 정의에 사용
// import React,{useState} from "react";
// // import { use } from "react";

// function Counter(){
//   const [ count, setCount ] = useState(0);

//   const handleClick = ()=>{
//     setCount(count +1);
//     setCount(count +1);
//     setCount(count +1);
//   }
//   return(
//   <>
//     <p>카운터 : {count}</p>
//     <button onClick={handleClick}>증가</button>
//   </>
//   )
// }
// export default Counter

// 이상의 코드의 문제점 : 한번 클릭하게 될 경우 handleClick함수가 작동하며
// count+3씩 이루어져야 할 것 같지만 결과값 보면 +1씩 된다는 것을 알 수 있음

/**
 * 이상의 현상일어나는 이유
 * 1. setCount(count+1)은 현재 상태의 고정된 값을 사용해 업데이트가 일어남
 * 
 * 2. 이상을 이유로 count의 값은 handleClick을 호출했을 시점에 고정
 * 
 * 3.  1,2를 이유로 세 번의 setCount는 초기값 count=0을 시점으로 1을 더하기 때문에
 * 0+1
 * 0+1
 * 0+1
 * 로 conut = 1 을 return함
 * 
 * 해결위한 방법
 * : 함수형 업데이트
 * 
 */
import React,{useState} from "react";
// import { use } from "react";

function Counter(){
  const [ count, setCount ] = useState(0);

  const handleClick = ()=>{
    setCount((preCount)=>preCount+1);
    setCount((preCount)=>preCount+1);
    setCount((preCount)=>preCount+1);
  }
  return(
  <>
    <p>카운터 : {count}</p>
    <button onClick={handleClick}>증가</button>
  </>
  )
}
export default Counter