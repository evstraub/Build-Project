"use client";
import "./globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Nav from "./Components/Nav.jsx";
import SideBar from "./Components/SideBar.jsx";
import Footer from "./Components/Footer.jsx";
import MapComp from "./Components/Map.jsx";

const client = new ApolloClient({
  uri: "https://graphql.eng.meridiancapital.com/graphql",
  cache: new InMemoryCache(),
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ApolloProvider client={client}>
          {children}
          <Nav />
          <main className="flex items-center justify-center bg-sky-500 flex-grow mt-0">
            {/* <SideBar /> */}
            <div className="flex justify-center">
              <MapComp />
            </div>
          </main>
          <Footer />
        </ApolloProvider>
      </body>
    </html>
  );
}
