import './MovieInput.css';

const MovieInput = (props) => (
  <form id="nav3" className="movieInput">
    <input type="text" value={props.search} onChange={props.onSearch} className="movie-boxx" />
  </form>
);

export default MovieInput;
