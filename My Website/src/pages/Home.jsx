import React from "react";
import Slide from "../components/Slide";
import "../css/Home.css";

function Home() {
  return (
    <div className="Home">
      <Slide />
      <div className="haber-container">
        <h1>NEWS</h1>
        <div className="haberler-container">
          <div className="haber">
            <img src="src/images/img1.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              esse inventore voluptatum voluptate illo eius, alias vitae
              sapiente nesciunt perferendis.
            </p>
          </div>
          <div className="haber">
            <img src="src/images/img2.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              esse inventore voluptatum voluptate illo eius, alias vitae
              sapiente nesciunt perferendis.
            </p>
          </div>
          <div className="haber">
            <img src="src/images/img3.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              esse inventore voluptatum voluptate illo eius, alias vitae
              sapiente nesciunt perferendis.
            </p>
          </div>
          <div className="haber">
            <img src="src/images/img4.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              esse inventore voluptatum voluptate illo eius, alias vitae
              sapiente nesciunt perferendis.
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Home;
