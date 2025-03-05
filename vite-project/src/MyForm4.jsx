import { useState } from "react";

function MyForm(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  
  // 나머지 작성해서 3랑 동일하게 동작하도록 할것
  // handlechange 사용 안하고 하기
  const handleSubmit = (event) => {
    alert(`welcom ${firstName} ${lastName}`)
    event.preventDefault();
  };

  return(
    <form onSubmit={handleSubmit}>
      <label>First Name </label>
      <input type="text" onChange={event =>setFirstName(event.target.value)} value={firstName} />
      <br /><br /><br />

      <label>Last Name </label>
      <input type="text" onChange={event =>setLastName(event.target.value)} value={lastName} />
      <br /><br /><br />

      <label>Email </label>
      <input type="text" onChange={event =>setEmail(event.target.value)} value={email} />
      
      <input type="submit" value="제출" />
    </form>
  );
}
export default MyForm