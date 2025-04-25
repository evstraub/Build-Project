"use client";
import '../app/globals.css';
import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_REONOMY_PROPERTY = gql`
query {
  reonomyProperties {
    items {
      parcel_id
      
    }
  }
}

`;



const ParcelDetails = ({ parcelId, vectorProps }) => {
  const { data, loading, error } = useQuery(GET_REONOMY_PROPERTY, {
    skip: false,
  });

  const property = data?.reonomyProperties?.items?.find(
    (p) => p.parcel_id === parcelId
  );

  if (!parcelId) return <div className="parcel-panel">Click a parcel to view its details.</div>;
  if (loading) return <div className="parcel-panel">Loading parcel data...</div>;
  if (error) return <div className="parcel-panel error">Error: {error.message}</div>;

  // If matched in GraphQL
  if (property) {
    return (
      <div className="parcel-panel">
        <h2 className="parcel-heading">Property Info (Matched)</h2>
        <p className="parcel-meta">Parcel ID: {property.parcel_id}</p>
      </div>
    );
  }

  // If no match in GraphQL, fallback to vector tile info
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
