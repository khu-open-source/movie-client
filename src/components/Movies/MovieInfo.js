const MovieInfo = (props) => (
  <li>
    <h2>{props.title}</h2>
    <div>{props.genre}</div>
    <div>{props.rank}</div>
  </li>
);

export default MovieInfo;
