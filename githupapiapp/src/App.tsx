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
      onChange={e => setKeyword(e.target.value)}
      /> <br /><br /><br />
      <button onClick={handleClick}>Fetch</button>
      {repodata.length === 0 ? (
        <p>접근가능 데이터 없음</p>
    ):(
      <table>
        <tbody>
          {repodata.map(repo => (
            <tr key={repo.id}>
              <td>{repo.full_name}</td>
              <td>
                <a href={repo.html_url}>{repo.html_url}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}

    </>
  )
}

export default App
