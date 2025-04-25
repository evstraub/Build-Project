"use client";
import "./globals.css";
import React, { useState } from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Nav from "../Components/Nav.jsx";
import Footer from "../Components/Footer.jsx";
import MapComp from "../Components/Map.jsx";
import ParcelDetails from "../Components/ParcelDetails.jsx";

const client = new ApolloClient({
  uri: "https://graphql.eng.meridiancapital.com/graphql",
  cache: new InMemoryCache(),
});


export default function RootLayout({ children }) {


  const [parcelId, setParcelId] = useState(null);
const [vectorProps, setVectorProps] = useState(null);
  
  return (
    <html lang="en" className="app-root">
    <body className="app-body">
    
        <ApolloProvider client={client}>
          <Nav />
          
          <main className="main-layout">
          <ParcelDetails parcelId={parcelId} vectorProps={vectorProps} />
  <div className="map-wrapper">
  <MapComp setParcelId={setParcelId} setVectorProps={setVectorProps} />
  </div>
</main>



          <Footer />
        </ApolloProvider>
      </body>
    </html>
  );
}
