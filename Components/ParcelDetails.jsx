"use client";
import '../app/globals.css';
import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_REONOMY_PROPERTY = gql`
  query {
    reonomyProperties {
      items {
        parcel_id
        address_line1
        city
      }
    }
  }
`;



const ParcelDetails = ({ parcelId, vectorProps }) => {
  const { data, loading, error } = useQuery(GET_REONOMY_PROPERTY, {
    skip: !parcelId,
  });

  if (!parcelId) return <div className="parcel-panel">Click a parcel to view its details.</div>;
  if (loading) return <div className="parcel-panel">Loading parcel data...</div>;
  if (error) return <div className="parcel-panel error">Error: {error.message}</div>;

  const nycCities = ["NEW YORK", "BROOKLYN", "QUEENS", "BRONX", "STATEN ISLAND"];

const nycProperties = data?.reonomyProperties?.items?.filter(
  (item) => nycCities.includes(item.city?.trim().toUpperCase())
);
console.log(
  "NYC properties with IDs:",
  nycProperties?.filter(p => p.parcel_id !== null)
);


  console.log("NYC Properties count:", nycProperties?.length); // ✅ Log how many we filtered

  // 🔍 Try to find a match in the filtered NYC data
  const property = nycProperties?.find((p) => p.parcel_id === parcelId);
  console.log("Parcel ID to match:", parcelId);                // ✅ What we're looking for
  console.log("Match found:", property);                       // ✅ Did we get one?
  if (property) {
    return (
      <div className="parcel-panel">
        <h2 className="parcel-heading">Property Info (Matched)</h2>
        <p className="parcel-meta">Parcel ID: {property.parcel_id}</p>
        <p className="parcel-meta">Address: {property.address_line1}</p>
        <p className="parcel-meta">City: {property.city}</p>
      </div>
    );
  }

  // 🧭 If we don't match, fallback to vector props
  return (
    <div className="parcel-panel">
      <h2 className="parcel-heading">Basic Parcel Info (Vector Data)</h2>
      <p className="parcel-meta">Parcel ID: {vectorProps?.ID}</p>
      <p className="parcel-meta">Address: {vectorProps?.ADDRLINE1}</p>
      <p className="parcel-meta">City: {vectorProps?.CITY}</p>
      <p className="parcel-meta">Lat: {vectorProps?.LATITUDE}</p>
      <p className="parcel-meta">Lng: {vectorProps?.LONGITUDE}</p>
    </div>
  );
};



export default ParcelDetails;
