"use client";
import "./globals.css";
import Query from "../Components/Query";
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
  return (
    <html lang="en">
      <body>
        {children}

        <Nav />
        <main className=" flex items-center bg-sky-500">
          <SideBar />
          <MapComp />
          <ApolloProvider client={client}></ApolloProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
