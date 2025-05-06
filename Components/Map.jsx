"use client";
import React, { useRef, useEffect, useState } from "react";
import Map, { Source, Layer } from 'react-map-gl/mapbox';


import "mapbox-gl/dist/mapbox-gl.css";

const MapComp = ({ setParcelId, setVectorProps }) => {
  const mapRef = useRef(null);
  const [viewState, setViewState] = useState({
    longitude: -73.971321,
    latitude: 40.776676,
    zoom: 12,
  });

  const handleClick = (event) => {
    if (event.features?.length > 0) {
      const props = event.features[0].properties;
      setParcelId(props.ID);
      setVectorProps(props);
    }
  };

  useEffect(() => {
    const map = mapRef.current?.getMap();
    if (!map) return;
    map.on("load", () => {
      const features = map.querySourceFeatures("my-source-id", {
        sourceLayer: "attom-parcels",
      });
      const ids = features.map((f) => f.properties?.ID).filter(Boolean);
      console.log("All visible parcel IDs:", ids);
    });
  }, []);

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken="pk.eyJ1Ijoic3ZheXNlciIsImEiOiJjbGgwbzl5NXcwdmMzM2VwdTkya2J6cDVmIn0.VrQewCt9w1K8QPsLzuDZjg"
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/light-v10"
      onClick={handleClick}
      interactiveLayerIds={["line-layer-id", "fill-layer-id"]}
    >
      <Source id="my-source-id" type="vector" url="mapbox://svayser.parcel-boundaries">
        <Layer
          id="line-layer-id"
          type="line"
          source-layer="attom-parcels"
          paint={{ "line-color": "#6382f2", "line-width": 2 }}
        />
        <Layer
          id="fill-layer-id"
          type="fill"
          source-layer="attom-parcels"
          paint={{ "fill-color": "#6382f2", "fill-opacity": 0.3 }}
        />
      </Source>
    </Map>
  );
};

export default MapComp;
