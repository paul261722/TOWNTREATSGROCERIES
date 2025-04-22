import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const ImageCarousel = () => {
  return (
    <section className="row my-4">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img src="images/br1.jpeg" alt="Banner 1" className="d-block w-100" height="300px" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/pp1.jpeg" alt="Banner 2" className="d-block w-100" height="300px" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/tm1.jpeg" alt="Banner 3" className="d-block w-100" height="300px" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/caro2.avif" alt="Banner 4" className="d-block w-100" height="300px" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/caro.webp" alt="Banner 5" className="d-block w-100" height="300px" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="col-md-1"></div>
    </section>
  );
};

export default ImageCarousel;
