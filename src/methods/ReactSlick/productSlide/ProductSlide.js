import Slider from "react-slick";

import "./ProductSlide.css";

const ProductSlide = ({ itemList, View }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="ProductSlide">
      <Slider {...settings}>
        {itemList?.map((item) => (
          <div key={item.id} className="singleSlider">
            <View item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ProductSlide;
