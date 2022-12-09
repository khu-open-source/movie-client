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
          <b>장르:</b>
          {props.genre.map((genre, index) => (
            <div key={index} className="movie-genre">
              {genre}
            </div>
          ))}
        </div>
        <div className="movie-rank">
          <b>인기도: </b> {props.popularity}
        </div>
        <div>
          <b>줄거리:</b>
          {props.overview}
        </div>
        <div>
          <b>개봉일:</b> {props.date}
        </div>
        {!props.adult && (
          <div>
            <b>청소년 관람 불가</b>
          </div>
        )}
        {props.adult && (
          <div>
            <b>청소년 관람 불가</b>
          </div>
        )}
      </div>
    </li>
  </div>
);

export default MovieInfo;
