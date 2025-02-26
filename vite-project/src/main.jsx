import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import App2 from './App2.jsx'
// import Hello from './hello.jsx'
// import Hello3 from './hello.jsx'
// import Hello4 from './hello.jsx'
// import App3 from './App3.jsx'
// import HeaderText from './App4.jsx'
import Counter from './App5.jsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App3 /> */}
    {/* <Hello3 firstName = '로버트' lastName = '패틴슨'/> */}
    {/* <Hello4 firstName={'d'} lastName={'d'}/> */}
    {/* <HeaderText text="ㅇㅇㅇㅇㅇ"/> */}
    <Counter />
  </React.StrictMode>,
)
