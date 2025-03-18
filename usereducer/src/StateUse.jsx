import { useState } from "react";

export default function StateUse(){
  const [count, setCount] = useState(0);

  function down(){
    setCount(count-1)
    console.log('사과 한개 먹음')
  }
  function reset(){
    setCount(0);
    console.log('사과 다먹음')
  }
  function up(){
    setCount(count+1);
    console.log('사과 하나 삼')
  }
  return(
    <div>
      <p>현재 사과는 {count} 개</p>
      <input type="button" value="사과 1개 먹음" onClick={down}/>
      <input type="button" value="사과 1개 구매" onClick={up}/>
      <input type="button" value="다먹음" onClick={reset}/>
    </div>
  )
}