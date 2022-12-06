import './movieinfo.css';

// import styled from 'styled-components';

const MovieInfo = (props) => (
  <div className="movie-info">
    <li className="movie-container">
      <div className="movie-poster">
        <img alt="movieIMG" src={props.img} />
      </div>
      <div className="movie-box">
        <h1 className="movie-title">{props.title}</h1>
        <div className="movie-genre">{props.genre}</div>
        <div className="movie-rank">{props.rank}</div>
      </div>
    </li>
  </div>
);

export default MovieInfo;
