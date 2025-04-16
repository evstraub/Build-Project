"use client";

import React from "react";
import Map, { Layer, Source } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const MapComp = ({ setParcelId }) => {
  const handleClick = (event) => {
    if (event.features?.length > 0) {
      // Log the full properties to verify
      console.log("Clicked feature properties:", event.features[0].properties);
      const clickedId = event.features[0].properties.APN;
      setParcelId(clickedId);
    }
  };

  return (
    <Map
      mapboxAccessToken="pk.eyJ1Ijoic3ZheXNlciIsImEiOiJjbGgwbzl5NXcwdmMzM2VwdTkya2J6cDVmIn0.VrQewCt9w1K8QPsLzuDZjg"
      initialViewState={{
        longitude: -73.971321,
        latitude: 40.776676,
        zoom: 12,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
      onClick={handleClick}
      interactiveLayerIds={["line-layer-id", "fill-layer-id"]}
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
  );
};

export default MapComp;
