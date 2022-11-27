import 'swiper/css';
import 'swiper/css/pagination';

import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic

SwiperCore.use([Navigation, Pagination]);

const IMG = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`;
const Slider = (props) => (
  <main className="ExampleComponent">
    <div className="main-wrap">
      <Swiper
        style={{
          width: '500px',
          height: '500px',
          backgroundColor: '#FFF5F1',
          borderRadius: '12px',
        }}
        spaceBetween={8}
        initialSlide={1}
        centeredSlides
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <IMG alt="apple" src={props.movies[0].img} />
        </SwiperSlide>
        <SwiperSlide>
          <IMG alt="apple" src={props.movies[1].img} />
        </SwiperSlide>
        <SwiperSlide>
          <IMG alt="apple" src={props.movies[2].img} />
        </SwiperSlide>
        <SwiperSlide>
          <IMG alt="apple" src={props.movies[3].img} />
        </SwiperSlide>
        <SwiperSlide>
          <IMG alt="apple" src={props.movies[4].img} />
        </SwiperSlide>
        <SwiperSlide>
          <IMG alt="apple" src={props.movies[5].img} />
        </SwiperSlide>
      </Swiper>
    </div>
  </main>
);

export default Slider;
