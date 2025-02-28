import { useRef } from "react";
import './App.css'

export default function App(){

  const textInput = useRef(null); //textInput 내의 current:null

  const ClickBtn = ()=>{
    console.log('클릭')
  }

  const handleClickBtn = () =>{
    textInput.current.focus();
  };


  return(
    <div>
      <input type="text" />
      <input type="button" value="ref X" onClick={ClickBtn}/>
      <br />
      <input type="text" ref={textInput} />
      <input type="button" value="ref O" onClick={handleClickBtn}/>
    </div>
  );
}