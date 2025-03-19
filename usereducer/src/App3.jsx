import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      {isLogin ? (
        // true 일때 로그인성공 화면 작성
        <div>
          <strong>환영</strong>
          <button onClick={()=>setIsLogin(!isLogin)}>로그아웃</button>
        </div>
      ) : (
        // false 일때 나올 로그인 페이지 작성
        <LoginForm setIsLogin={setIsLogin}/>
      )}
    </div>
  )
}

export default App
