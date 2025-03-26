import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";

const mobilePhones = [
  {
    img: "https://picsum.photos/200?random=1",
    name: "iPhone 13",
    specs: "128GB, 4GB RAM",
    price: "$799",
  },
  {
    img: "https://picsum.photos/200?random=2",
    name: "Samsung S21",
    specs: "256GB, 8GB RAM",
    price: "$899",
  },
  {
    img: "https://picsum.photos/200?random=3",
    name: "Google Pixel 6",
    specs: "128GB, 8GB RAM",
    price: "$699",
  },
  {
    img: "https://picsum.photos/200?random=4",
    name: "OnePlus 9 Pro",
    specs: "256GB, 12GB RAM",
    price: "$749",
  },
  {
    img: "https://picsum.photos/200?random=5",
    name: "Xiaomi Mi 11",
    specs: "128GB, 8GB RAM",
    price: "$499",
  },
  {
    img: "https://picsum.photos/200?random=6",
    name: "Realme GT",
    specs: "256GB, 12GB RAM",
    price: "$599",
  },
  {
    img: "https://picsum.photos/200?random=7",
    name: "Vivo X70",
    specs: "256GB, 8GB RAM",
    price: "$699",
  },
  {
    img: "https://picsum.photos/200?random=8",
    name: "Oppo Reno 6",
    specs: "128GB, 6GB RAM",
    price: "$399",
  },
];

const Carousel = () => {
  const settings = {
    infinite: true,                // Infinite Loop
    speed: 3000,                   // Smooth transition
    slidesToShow: 4,               // Number of cards visible at a time
    slidesToScroll: 1,
    autoplay: true,                // Auto sliding
    autoplaySpeed: 0,           // Slide every 2 seconds
    cssEase: "linear",             // Continuous sliding effect
    pauseOnHover: true,           // Keep sliding even on hover
    responsive: [
      {
        breakpoint: 1024,          // Tablets
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,           // Mobile
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <h1>Mobile Phone Carousel</h1>
      <Slider {...settings}>
        {mobilePhones.map((phone, index) => (
          <div key={index} className="mobile-card">
            <img src={phone.img} alt={phone.name} />
            <h2>{phone.name}</h2>
            <p>{phone.specs}</p>
            <p className="price">{phone.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
