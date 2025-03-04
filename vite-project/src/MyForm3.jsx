import { useState } from "react";
import './App.css'

export default function MyForm(){
  const[user, setUser] = useState({
    firstName : '',
    lastName: '' ,
    email:'',
  });
  // 입력상자의 내용이 변경되면 값을 상태에 저장
  const handleChange = (event) =>{
    setUser({... user, [event.target.name]:
      event.target.value});
    }
    //handleSubmit을 리액트 형식으로 정의
    // 제출 버튼 클릭하면 welcom{user.firstName} {user.lastName}이 알람으로 나오게끔 작성 예정

    // return 파트에 firstName 작성 란, lastName 작성란, email작성란, 제출버튼 작성

    //0304에 할 예정

    // 리턴 파트에 작성 방법 확인 후 나머지 작성
    const handleSubmit = (event) => {
      alert(`welcom ${user.firstName} ${user.lastName}`)
      alert(`Email: ${user.email}`)
      event.preventDefault();
    };
  
  
  
    return(
    <form onSubmit={handleSubmit}>
      <label>First Name </label>
      <input type="text" name="firstName" onChange={handleChange} value={user.firstName}/>
      <br /><br /><br />
      <label>Last Name </label>
      <input type="text" name="lastName" onChange={handleChange} value={user.lastName}/>
      <br /><br /><br />
      <label>Email </label>
      <input type="email" name="email" onChange={handleChange} value={user.email}/>
      <br /><br /><br />
      <input type="submit" value={"제출"} />
    </form>
  );
}