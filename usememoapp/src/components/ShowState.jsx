import { useMemo } from "react";

export default function ShowState({number, text}){
  const consoleNumber = (number) =>  {
    console.log('숫자 변경됨')
    return number;
  }

  const consoleText = (text) =>{
    console.log('문자 변경됨')
    return text
  }

  const showNum = consoleNumber(number);
  const showText = consoleText(text);

  return(
    <div>
      <p>숫자 : {showNum}</p>
      <p>문자 : {showText}</p>
    </div>
  )
}