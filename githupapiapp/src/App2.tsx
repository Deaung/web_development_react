import axios from 'axios';
import { useState } from 'react';
import './App.css';

type Repository = {
  id:number;
  full_name:string;
  html_url:string;
}

function App() {
  const[keyword, setKeyword] =useState('');
  const[repodata, setRepodata] = useState<Repository[]>([])

  const handleClick = ()=>{
    axios.get<{items: Repository[]}>(`https://api.github.com/search/repositories?q=${keyword}`)
    .then(response => setRepodata(response.data.items))
    .catch(error => console.log(error));
  }
  
  return (
    <>
      <input 
      value={keyword}
      onChange={e =>setKeyword(e.target.value)} 
      />     
      <br /><br />
      <button onClick={handleClick}>search</button>
    </>
  )
}

export default App
