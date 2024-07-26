import React from "react";
import Slider from "react-slick";
import "../css/Slide.css";



function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    
    <div className="slider-container">
        <h1>HOMEPAGE</h1>
      <Slider {...settings}>
        <div>
          <h3><img src="src/images/img1.jpg" alt="" /></h3>
        </div>
        <div>
          <h3><img src="src/images/img2.jpg" alt="" /></h3>
        </div>
        <div>
          <h3><img src="src/images/img3.jpg" alt="" /></h3>
        </div>
        <div>
          <h3><img src="src/images/img4.jpg" alt="" /></h3>
        </div>
       
        
      </Slider>
      <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, tenetur. In delectus officia architecto, ex deserunt aliquam? Nobis laborum voluptatum esse minima, culpa nulla. Quibusdam dolor nisi reiciendis soluta fugiat tenetur eum atque, laudantium mollitia temporibus nulla non rem numquam recusandae aliquam voluptates deserunt fuga accusantium veritatis quas explicabo animi facilis. Inventore laboriosam impedit vero fugiat fuga eligendi eveniet facere possimus! Quod facilis necessitatibus, sed dignissimos maiores odio a, doloremque blanditiis itaque asperiores nam officia id eaque. Dignissimos ipsa aliquam repudiandae quam debitis, non qui reprehenderit nobis, ea impedit, magnam velit sed at? Quae quisquam fugit atque ipsa nemo sequi.</h1>
    </div>
  );
}

export default Slide;
