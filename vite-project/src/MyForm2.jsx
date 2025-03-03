import { useState } from "react";

export default function MyForm() {
  const[ text, setText ]= useState('');

  // const handleChange = (event) =>{
  //   setText(event.targer.value);
  // }


  const handleSubmit = (event) => {
    alert(`${text} 라고 입력함.`)
    // console.log(`${text}`)
    event.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={event =>setText(event.targer.value)} value={text} />
      <input type="submit" value="제출" />
    </form>
  );
} 