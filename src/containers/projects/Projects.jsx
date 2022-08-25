import React from 'react';
import './projects.css';
import sample1 from '../../assets/sample1.jpg';
import sample2 from '../../assets/CnciumGif.gif';
import sample3 from '../../assets/GifBitcoin.gif';
import inbox from '../../assets/in-box.jpg';

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
            <img src={sample1} alt="3-axis cnc" />
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
            <img src={sample2} alt="cnc aluminum working" />
          </div>
          <div className="cncium_projects_canvas-txt">
            <h6>Easy to make multiple parts with exact dimension</h6>
            <p className="description">
              The best option for producing high quality small parts for your
              product
            </p>
            <p className="details">
              If 3d printing results cannot match your needs with the material
              so it's best to make your parts with a durable one
              <br />
              <br /> parts for small motors
              <br />
              <br /> <img src={inbox} alt="sample of small parts" />
            </p>
          </div>
        </div>
        <div className="cncium_projects_canvas-item">
          <div className="cncium_projects_canvas-img">
            <img src={sample3} alt="5-axis cnc" />
          </div>
          <div className="cncium_projects_canvas-txt">
            <h6>Zero Defects and Greater Accuracy</h6>
            <p className="description">
              Autonomous CNC Milling process eliminates the potential of human
              error by running from a digital template or model.
            </p>
            <p className="details">
              Fabricate complex designs with high details
              <br />
              Final components with best quality
              <br /> <br />
              Custom CNC Milling – Using high-end machines that make use of a
              rotating cylindrical cutting tool, we’re able to execute a variety
              of functions, including drilling, tapping, slotting, keyways and
              contouring, as well as gear cutting and manufacturing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
