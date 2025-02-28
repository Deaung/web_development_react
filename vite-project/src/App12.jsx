// 1. useState를 import
import { useState } from "react";
import './App.css'

// 현재까지는 컴포넌트들을 싸그리 분할했는데, 다층구조의 상위 컴포넌트와 하위 컴포넌트로 나눠서 작성하는 방법 사용 예정

// 2. LoginForm 함수 컴포넌트 생성 App컴포넌트도 생성

function LoginForm(){
  const [id, setId] = useState('');
  const [password, setPassWord] = useState('');

  const handleLoginForm = (event) => {
    event.preventDefault();
    console.log('로그인 클릭')
    alert(`ID: ${id} \nPassWord:${password} `)
  }

  const handleIdInput = (event) => {
    // console.log('아이디 입력') onChange의 흐름 증명하기 위한 테스트 코드
    setId(event.target.value);
  }
  const handlePwInput = (event)=>{
    // console.log('비밀번호 입력')
    setPassWord(event.target.value);
  }

  return(
    <form onSubmit={handleLoginForm}>
      <label>
        id :
        <input type="text" value={id} placeholder="아이디 입력" onChange={handleIdInput}/>
      </label>
      <br /><br />
      <label>
        PW :
        <input type="password" value={password} placeholder="비밀번호 입력" onChange={handlePwInput}/>
      </label>
      <br /><br />
      <button type="submit">Login</button>
    </form>
  );
}

function App() {
  return(
    <div>
      <LoginForm />
    </div>
  );

}

export default App