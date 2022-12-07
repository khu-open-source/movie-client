/* eslint-disable react/no-array-index-key */
import './MovieInfo.css';

const MovieInfo = (props) => (
  <div className="movie-info">
    <li className="movie-container">
      <div className="movie-poster">
        <img alt="MoviePoster" src={`https://image.tmdb.org/t/p/original/${props.poster}`} />
      </div>
      <div className="movie-box">
        <h1 className="movie-title">{props.title}</h1>
        <div className="genre-position">
          장르:
          {props.genre.map((genre, index) => (
            <div key={index} className="movie-genre">
              {genre}{' '}
            </div>
          ))}
        </div>
        <div className="movie-rank">인기도: {props.popularity}</div>
        <div>줄거리: {props.overview}</div>
        <div>개봉일: {props.date}</div>
        {!props.adult && <div>청소년 관람 가능</div>}
        {props.adult && <div>청소년 관람 불가</div>}
      </div>
    </li>
  </div>
);

export default MovieInfo;
