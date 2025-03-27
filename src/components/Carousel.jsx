import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";

const mobilePhones = [
  {
    img: "https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_UL320_.jpg",
    name: "iPhone 13",
    specs: "128GB, 4GB RAM",
    price: "$799",
  },
  {
    img: "https://m.media-amazon.com/images/I/81JHcYDLcHL._AC_UY218_.jpg",
    name: "Samsung S21",
    specs: "256GB, 8GB RAM",
    price: "$899",
  },
  {
    img: "https://m.media-amazon.com/images/I/61VfAnDQqYL._AC_UY218_.jpg",
    name: "Google Pixel 6",
    specs: "128GB, 8GB RAM",
    price: "$699",
  },
  {
    img: "https://m.media-amazon.com/images/I/71N4hshhfNL._AC_UY218_.jpg",
    name: "OnePlus 9 Pro",
    specs: "256GB, 12GB RAM",
    price: "$749",
  },
  {
    img: "https://m.media-amazon.com/images/I/61RWmrzQG9S._AC_UY218_.jpg",
    name: "Xiaomi Mi 11",
    specs: "128GB, 8GB RAM",
    price: "$499",
  },
  {
    img: "https://m.media-amazon.com/images/I/61HyiMlCuTL._AC_UY218_.jpg",
    name: "Realme GT",
    specs: "256GB, 12GB RAM",
    price: "$599",
  },
  {
    img: "https://m.media-amazon.com/images/I/71lw7TJwT+L._AC_UL320_.jpg",
    name: "Vivo X70",
    specs: "256GB, 8GB RAM",
    price: "$699",
  },
  {
    img: "https://m.media-amazon.com/images/I/61Gq6YKRQlL._AC_UY218_.jpg",
    name: "Oppo Reno 6",
    specs: "128GB, 6GB RAM",
    price: "$399",
  },
];

const Carousel = () => {
  const settings = {
    infinite: true,               
    speed: 3000,                   
    slidesToShow: 4,               
    slidesToScroll: 1,
    autoplay: true,          
    autoplaySpeed: 0,         
    cssEase: "linear",            
    pauseOnHover: true,           
    responsive: [
      {
        breakpoint: 1024,         
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,       
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
