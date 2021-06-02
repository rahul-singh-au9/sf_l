import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactPlayer from "react-player";
import Footer from "./Footer";
import "./footer.css";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./styles.css";
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

export default function App() {
  const [number, setNumber] = useState(5);
  const arr = [
    "youtu.be/tt2k8PGm-TI",
    "youtu.be/3AtDnEC4zak",
    "youtu.be/2Vv-BfVoq4g",
    "youtu.be/CMXMELv9Pr0",
    "youtu.be/aIiZ7pYknj4",
    "youtu.be/mj0XInqZMHY",
    "youtu.be/wjIes1eGAw4",
    "youtu.be/J-dv_DcDD_A",
    "youtu.be/BxuY9FET9Y4",
  ];
  return (
    <>
      <h1 style={{ marginLeft: "10%" }}>Concept Videos</h1>
      <small style={{ marginLeft: "9.5%" }}>Select a number</small>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        {arr.map(
          (video, idx) =>
            idx < number && (
              <SwiperSlide key={idx}>
                <ReactPlayer
                  url={`${video}`}
                  width="300px"
                  height="300px"
                  controls
                />
              </SwiperSlide>
            )
        )}
      </Swiper>
      <div className="footer-heading">
        <h1>Live Classes</h1>
        <small>Select a number</small>
      </div>
      <Footer setNumber={setNumber} />
    </>
  );
}
