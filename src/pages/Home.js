import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';

const Home = (props) => (
  <div>
    <Header />
    <Slider movies={props.movies} />
  </div>
);

export default Home;
