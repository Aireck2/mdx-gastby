import React from "react";
import "./style.css";
const FirstSlide = props => {
  return (
    <div>
      <div className="triangulo_top_left"></div>
      <div className="triangulo_bottom_right"></div>
      <p className="bold">Introduction to </p>
      <div className="flex-center mb">
        <img
          style={{ width: 400, height: "100%" }}
          src="https://user-images.githubusercontent.com/841294/53402609-b97a2180-39ba-11e9-8100-812bab86357c.png"
        />
        <h2>Client</h2>
      </div>
      <p>by</p>
      <p className="bold">Erick Escriba Arango</p>
      {props.children}
    </div>
  );
};

export default FirstSlide;
