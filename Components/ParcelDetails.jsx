"use client";
import '../app/globals.css';

import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_TAX_ASSESSORS = gql`
 query {
    attomTaxAssessors {
      items {
        PropertyAddressFull
        PropertyLatitude
        PropertyLongitude
        ATTOM_ID
        parcel_id
      }
    }
  }
`;

const ParcelDetails = ({ parcelId }) => {
  const { data, loading, error } = useQuery(GET_TAX_ASSESSORS);

  if (!parcelId) return <div className="parcel-panel">Click a parcel to view its details.</div>;
  if (loading) return <div className="parcel-panel">Loading parcel data...</div>;
  if (error) return <div className="parcel-panel error">Error: {error.message}</div>;

  const properties = data?.attomTaxAssessors?.items || [];

  const selectedProperty = properties.find(p => p.parcel_id === parcelId);

  if (!selectedProperty) {
    return <div className="parcel-panel">No matching parcel found in GraphQL data.</div>;
  }

  return (
    <div className="parcel-panel">
      <h2 className="parcel-heading">Parcel Information</h2>
      <p className="parcel-address">{selectedProperty.PropertyAddressFull}</p>
      <p className="parcel-meta">Parcel ID: {selectedProperty.parcel_id}</p>
      <p className="parcel-meta">ATTOM ID: {selectedProperty.ATTOM_ID}</p>
      <p className="parcel-meta">
        Latitude: {selectedProperty.PropertyLatitude}, Longitude: {selectedProperty.PropertyLongitude}
      </p>
    </div>
  );
};

export default ParcelDetails;
