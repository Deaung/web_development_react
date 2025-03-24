import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [ loading, setLoading ] = useState(true);
  const [ movies, setMovies ] = useState([]);

  // async - await
  const getMovies = async() =>{
    const response = await fetch(' https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false)
  } // -> 이거 useEffect에 넣어서 렌더링 시 한번만 getMovies라는 함수 실행시킨다  는 의미

  useEffect(() => {
    getMovies(); 
  },[])

  // 장르를 받아올 예정 => 장르가 배열형태로 되어있음

  return (
    <div>
    {loading ? <h1>로딩 중...</h1> : 
      <div> {movies.map(movie => 
        <div key={movie.id}>
        <img src={movie.medium_cover_image} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.summary}</p>
        <ul>
          {movie.genres.map((genre) => (<li key={genre}>{genre}</li>))}
        </ul>
      </div>
      )}</div>
    }
    </div>
  )
}

export default App
