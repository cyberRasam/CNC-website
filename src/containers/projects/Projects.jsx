import React from 'react';
import './projects.css';
import sample1 from '../../assets/sample1.jpg';
import sample2 from '../../assets/CnciumGif.gif';
import sample3 from '../../assets/GifBitcoin.gif';

function Projects() {
  return (
    <div id="projects" className="cncium_projects">
      <div className="cncium_projects_header">
        <h1 className="gradient__text_two">
          Take a look at our recent projects and capabilities
        </h1>
      </div>
      <div className="cncium_projects_canvas">
        <div className="cncium_projects_canvas-item">
          <div className="cncium_projects_canvas-img">
            <img src={sample1} alt="5-axis cnc" />
          </div>
          <div className="cncium_projects_canvas-txt">
            <h6>3 axis CNC machining in Perth Australia</h6>
            <p className="description">
              For complex and time-sensitive machined parts, 3-axis CNC machines
              offer unparalleled flexibility and speed.
            </p>
            <p className="details">
              3-axis machining can be used on all manner of titanium and
              aluminum,... and aerospace parts, including: <br />
              <br /> Bulkheads <br /> Fuselage sections Landing gear components
            </p>
          </div>
        </div>
        <div className="cncium_projects_canvas-item">
          <div className="cncium_projects_canvas-img">
            <img src={sample2} alt="5-axis cnc" />
          </div>
          <div className="cncium_projects_canvas-txt">
            <h6>5 axis CNC machining in Perth Australia</h6>
            <p className="description">
              For complex and time-sensitive machined parts, 5-axis CNC machines
              offer unparalleled flexibility and speed.
            </p>
            <p className="details">
              5-axis machining can be used on all manner of titanium and
              aluminum aerospace parts, including: <br />
              <br /> Bulkheads <br /> Fuselage sections Landing gear components
            </p>
          </div>
        </div>
        <div className="cncium_projects_canvas-item">
          <div className="cncium_projects_canvas-img">
            <img src={sample3} alt="5-axis cnc" />
          </div>
          <div className="cncium_projects_canvas-txt">
            <h6>5 axis CNC machining in Perth Australia</h6>
            <p className="description">
              For complex and time-sensitive machined parts, 5-axis CNC machines
              offer unparalleled flexibility and speed.
            </p>
            <p className="details">
              5-axis machining can be used on all manner of titanium and
              aluminum aerospace parts, including: <br />
              <br /> Bulkheads <br /> Fuselage sections Landing gear components
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
