"use client";
import "./globals.css";
import React, { useState } from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Nav from "../Components/Nav.jsx";
import SideBar from "../Components/SideBar.jsx";
import Footer from "../Components/Footer.jsx";
import MapComp from "../Components/Map.jsx";

const client = new ApolloClient({
  uri: "https://graphql.eng.meridiancapital.com/graphql",
  cache: new InMemoryCache(),
});


export default function RootLayout({ children }) {


  const [parcelId, setParcelId] = useState(null);
  
  return (
    <html lang="en" className="h-screen overflow-hidden">
  <body className="h-screen flex flex-col overflow-hidden">

        <ApolloProvider client={client}>
          <Nav />
          
          <main className="flex flex-row flex-grow h-[calc(100vh-128px)] overflow-hidden">

  <SideBar parcelId={parcelId} />
  <div className="flex-grow h-[calc(100vh-64px-64px)]">
  <MapComp setParcelId={setParcelId} />
  </div>
</main>



          <Footer />
        </ApolloProvider>
      </body>
    </html>
  );
}
