import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'
import ContactLondon from './components/ContactLondon'
import ContactSeoul from './components/ContactSeoul'

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{' | '}
          <Link to="/contact">Contact</Link>
          
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} >
            <Route path="seoul" element={<ContactSeoul/>}/>
            <Route path="london" element={<ContactLondon/>}/>
          </Route>
          // 새 페이지 찾을 수 없음 경로 추가
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
