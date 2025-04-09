"use client";

import React, { useState } from "react";
import Map, { Layer, Source } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const MapComp = () => {
  const [parcelId, setParcelId] = useState(null); // stores clicked parcels ID

  const handleClick = (event) => {
    if (event.features && event.features.length > 0) { // Check if features exist
      setParcelId(event.features[0].properties.ID); // Store the ID of the clicked parcel
      console.log("Clicked Parcel ID:", event.features[0].properties.ID);
    } else {
      console.log("No feature clicked"); // Optional: log when no feature is clicked
    }
  };


  (event) => {
    if (event.features.length > 0) {
        setParcelId(event.features[0].properties.ID);
    }
}


  return (
    <>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoic3ZheXNlciIsImEiOiJjbGgwbzl5NXcwdmMzM2VwdTkya2J6cDVmIn0.VrQewCt9w1K8QPsLzuDZjg"
        initialViewState={{
          longitude: -73.971321,
          latitude: 40.776676,
          zoom: 12,
        }}
        style={{ width: 1200, height: 800 }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        onClick={handleClick}
        interactiveLayerIds={["line-layer-id", "fill-layer-id"]} // Specify the layer IDs to make interactive
      >
        <Source
          id="my-source-id"
          type="vector"
          url="mapbox://svayser.ae1mculr"
        >
          <Layer
            id="line-layer-id"
            source="my-source-id"
            type="line"
            source-layer="manhattan_staten_island_parce-7ng65o"
            paint={{
              "line-color": "#6382f2",
              "line-width": 2,
            }}
          />
          <Layer
            id="fill-layer-id"
            source="my-source-id"
            type="fill"
            source-layer="manhattan_staten_island_parce-7ng65o"
            paint={{
              "fill-color": "#6382f2",
               "fill-opacity": 0.3,
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
