import React from "react";
import "./Milestones.css";

const Milestones = () => {
  return (
    <section className="milestones-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="milestone">
              <h2>14</h2>
              <p>
                Years <br />
                of <br />
                Experience
              </p>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="milestone">
              <h2>237</h2>
              <p>
                Projects <br />
                Taken
              </p>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="milestone">
              <h2>11k</h2>
              <p>
                Twitter <br />
                Followers
              </p>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="milestone">
              <h2>12</h2>
              <p>
                Awards <br />
                Won
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
