import React from "react";
import './works.css';

// icons import
import { GoLightBulb } from "react-icons/go";
import { TbTools } from "react-icons/tb";
import { HiOutlineMap } from "react-icons/hi2";

const Works = () => {
  return (
    <div className="works">
      <div className="main_container">
        <div className="main_row works_content">
          <div className="column-8 column-8-ml content_header">
            <h1>How It Works</h1>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>
          </div>
        </div>
        <div className="main_row">
          <div className="column-4">
            <div className="works_box">
              <span className="works_icon">
                <GoLightBulb/>
              </span>
              <h3>User Experience</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line</p>
            </div>
          </div>
          <div className="column-4">
            <div className="works_box">
              <span className="works_icon">
                <TbTools style={{strokeWidth: '1'}}/>
              </span>
              <h3>Virtual Design</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line</p>
            </div>
          </div>
          <div className="column-4">
            <div className="works_box">
              <span className="works_icon">
                <HiOutlineMap style={{strokeWidth: '0.8'}}/>
              </span>
              <h3>Design & Research</h3>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;