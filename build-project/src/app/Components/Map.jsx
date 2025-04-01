'use client'

import React from 'react'
import Map from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';


const MapComp = () => {
  return (
    
    <>
    <Map
      mapboxAccessToken="pk.eyJ1IjoiZXZzdHJhdWIiLCJhIjoiY204ZWphbXZiMDIyYjJpcHhmaWgwa2t2biJ9.XOyytpUDLUEPZUpE0lEAgQ"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 1200, height: 800}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/3.10.0>/mapbox-gl.css' rel='stylesheet' />
   </>
  );
  
}

export default MapComp