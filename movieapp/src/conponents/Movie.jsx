import { Link } from "react-router-dom";

function Movie({id, coverimage , title, summary, genres}){
  return(
    <div key={id}>
    <img src={coverimage} alt={title} />
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
    <p>{summary}</p>
    <ul>
      {genres.map((genre) => (<li key={genre}>{genre}</li>))}
    </ul>
  </div>
  );
}
export default Movie