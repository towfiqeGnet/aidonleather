import Slider from "react-slick";
import pic01 from "./assets/01.png";
import pic02 from "./assets/02.png";
import pic03 from "./assets/03.png";
import pic04 from "./assets/04.png";
import pic05 from "./assets/05.png";
import pic06 from "./assets/06.png";

import "./Slider.css";
const SimpleSlider = () => {
  const imgList = [pic05, pic06, pic01, pic02, pic03, pic04];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="baseSlider">
      <div className="position-relative container">
        <p className="themeText">
          We tell more. <br />
          You sell more. <br />
          Innovation brings happiness & opportunity
        </p>
      </div>
      <Slider {...settings}>
        {imgList?.map((url) => (
          <div key={url} className="singleSlide">
            <img src={url} alt={url} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SimpleSlider;
