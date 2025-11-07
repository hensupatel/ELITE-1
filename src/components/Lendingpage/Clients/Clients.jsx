import React from "react";
import "./Clients.css";

const clients = [
  "/img/clients/1.png",
  "/img/clients/2.png",
  "/img/clients/3.png",
  "/img/clients/4.png",
  "/img/clients/5.png",
];

const Clients = () => {
  return (
    <div className="client-section spad">
      <div className="container">
        <div id="client-carousel" className="client-slider">
          {clients.map((c, i) => (
            <div className="single-brand" key={i}>
              <a href="#">
                <img src={c} alt={`client-${i}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
