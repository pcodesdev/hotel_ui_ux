import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app_img-reverse">
      <img src={images.chef1} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Quis proident fugiat anim culpa.</p>
        </div>
        <p className="p__opensans">
          Occaecat irure amet nostrud nisi et do quis. Dolore cupidatat occaecat
          occaecat est sint adipisicing velit anim sit nisi excepteur quis ad
          exercitation. Sunt ipsum et occaecat duis nisi aliqua ullamco id minim
          culpa qui. Culpa Lorem pariatur cupidatat quis tempor proident minim
          occaecat dolore quis. Ea anim excepteur Lorem do excepteur ullamco.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Peter Cook</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
