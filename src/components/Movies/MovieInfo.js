import './movieinfo.css';

const MovieInfo = (props) => (
  <div className="movie-info">
    <li className="movie-list">
      <div className="movie-poster">{props.poster}</div>
      <h2 className="movie-title">{props.title}</h2>
      <div className="movie-genre">{props.genre}</div>
      <div className="movie-rank">{props.rank}</div>
    </li>
  </div>
);

export default MovieInfo;
