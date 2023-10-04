import React, { useState } from "react";
import cards from "./data/data.json";
import "./App.css";
import Tab from "./components/Tab";
import { FaBath, FaBuilding, FaBed, FaArrowsAlt } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
import { AiFillHeart } from "react-icons/ai";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = cards.slice(firstIndex, lastIndex);
  const npage = 10;
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const [noOfElement, setnoOfElement] = useState(3);
  const loadMore = () => {
    setnoOfElement(noOfElement + 3);
  };
  const slice = cards.slice(0, noOfElement);
  return (
    <div>
      <Tab />
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 py-2">
          {cards &&
            slice.map((card) => {
              return (
                <div className="col" key={card.id}>
                  <div className="card">
                    <div className="container1">
                      <img src={card.image} class="card-img-top"></img>
                      <button className="btn2">{card.status}</button>
                      <div className="heart">
                        <AiFillHeart />
                      </div>
                    </div>

                    <div className="card1" data-label="Popular"></div>
                    <div className="location">
                      <FaLocationDot />
                      {card.address}
                    </div>

                    <h4 className="title">{card.title}</h4>

                    <div className="icon d-flex mx-5 justify-content-space-around">
                      <div className="bullets d-block">
                        <span>
                          {" "}
                          <FaBuilding />
                        </span>
                        <h6>{card.rooms}</h6>
                      </div>
                      <div className="bullets d-block">
                        <span>
                          {" "}
                          <FaBed />
                        </span>
                        <h6>{card.bed}</h6>
                      </div>
                      <div className="bullets d-block">
                        <span>
                          {" "}
                          {/* <i className="fa fa-address-book"></i>
                           */}
                          <FaBath />
                        </span>
                        <h6>{card.bath}</h6>
                      </div>
                      <div className="bullets d-block">
                        <span>
                          {" "}
                          <FaArrowsAlt />
                        </span>
                        <h6>{card.area}</h6>
                      </div>
                    </div>

                    <div className="mb-3 d-flex justify-content-around">
                      <h5>
                        <b>{card.price}</b>
                      </h5>
                      <button className="btn btn-primary">Read More</button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="btn">
          <button className="show-more" onClick={() => loadMore()}>
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
