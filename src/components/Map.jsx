// import axios from "axios";
import React, { useState } from "react";
import ReactMapGl from "react-map-gl";
// import { getAllCars } from "../contactService";


// {queryCar, search, filteredCars}
const MapGl = ({searchCar}) => {
  // const [filteredCars, setFilteredCars] = useState([]);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 29.591768,
    longitude: 52.583698,
    zoom: 11,
  });

  return (
    <div className="map-page" style={{ width: "100vw", height: "100vh" }}>
      <ReactMapGl
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxAccessToken="pk.eyJ1IjoiYWhtYWRueiIsImEiOiJjbDlxeGFzcmExNHhvM3BwOHJybWZnNHVlIn0.0dAue9VQRlO8fLFK8MbN3w"
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
      <div className="col-3">
        <div className="card card-req-cars p-2">
          <div className="text-end p-2 text-danger">
            <i className="fa fa-map-marker" />
            <span className="fw-bold">
              مبدا:{"  "}
              {viewport.latitude} و {viewport.longitude}
            </span>
          </div>
          <div className="text-end p-2  text-success">
            <i className="fa fa-map-marker" />
            <span className="fw-bold">
              مقصد:{"  "}
              {viewport.longitude} و {viewport.longitude}
            </span>
          </div>
          <div className="cars">
            <input
              type="text"
              className="cars form-control mx-2 p-2 fw-bold"
              placeholder="نوع ماشین آلات"
              // onChange={(event) => carSearch(event.target.value)}
              // value={queryCar.text}
              // onChange={search}
            />
            <i className="fa fa-search fw-bold" />
          </div>
          <div className="row m-2">
            {viewport.latitude && viewport.longitude ? (
              <button
                className="btn btn-warning p-2 fw-bold"
                style={{ borderRadius: ".7rem" }}
                onClick={searchCar}
              >
                ثبت درخواست
              </button>
            ) : (
              <button
                className="btn btn-secondary p-2 fw-bold"
                style={{ borderRadius: ".7rem" }}
                disabled={true}
              >
                ثبت درخواست
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapGl;
