"use client";

import React from "react";
import Map, { Layer, Source } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const MapComp = () => {
  return (
    <>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiZXZzdHJhdWIiLCJhIjoiY204ZWphbXZiMDIyYjJpcHhmaWgwa2t2biJ9.XOyytpUDLUEPZUpE0lEAgQ"
        initialViewState={{
          longitude: -73.971321,
          latitude: 40.776676,
          zoom: 12,
        }}
        style={{ width: 1200, height: 800 }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <Source
          id="my-source-id"
          type="vector"
          url="mapbox://evstraub.apbmnk1d"
        >
          <Layer
            id="my-layer-id"
            source="my-source-id"
            type="circle"
            source-layer="nyc-bike-parking-shelters-5mbpg2"
            paint={{
              "circle-radius": 10,
              "circle-color": "#ff0000",
              "circle-opacity": 0.8,
            }}
          />
        </Source>
      </Map>
    </>
  );
};

export default MapComp;

// evstraub.apbmnk1d - dataset id
// layer name - nyc-bike-parking-shelters-5mbpg2
// pk.eyJ1IjoiZXZzdHJhdWIiLCJhIjoiY204ZWphbXZiMDIyYjJpcHhmaWgwa2t2biJ9.XOyytpUDLUEPZUpE0lEAgQ - access token
