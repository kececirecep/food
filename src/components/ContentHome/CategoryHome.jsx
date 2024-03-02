import React, { useContext } from 'react'
import './category.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import { Row, Col } from 'react-bootstrap'; 

import { CategoryContext } from '../../context/CategoryContext';

 
const CategoryHome = () => {
  const category = useContext(CategoryContext)

  const arrowStyle = {
    width: "250px",
    height: "250px",
    fontSize: "124px",
  };

  const settings = {
    dots: false,
    arrows: true,
    prevArrow: <img src="/images/arrow-left.png" alt="Previous" style={arrowStyle} />,
    nextArrow: <img src="/images/arrow-right.png" alt="Next" style={arrowStyle} />,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='slider-container'>
      <h2>Categories</h2>
      <Slider {...settings} className='m-4'>
        {category.map((category, index) => {
          return (
            <div key={index} className="categoryCardHome">
              <img src={category.imageUrl} alt="" />
              <h4>{category.name}</h4>
            </div>
          )
        })}
      </Slider>
    </div>


  )
}

export default CategoryHome