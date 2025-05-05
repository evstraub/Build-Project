"use client";
import "../app/globals.css";
import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_REONOMY_PROPERTY = gql`
  query GetPropertyByParcelId($parcelId: String!) {
    reonomyProperties(filter: { parcel_id: { eq: $parcelId } }) {
      items {
        parcel_id
        address_line1
        city
        year_built
        year_renovated
        floors
        sum_buildings_nbr
        existing_floor_area_ratio
        commercial_units
        residential_units
        total_units
        building_area
        max_floor_plate
        building_class
        frontage
        depth
        asset_type
        lot_size_sqft
        lot_size_acres
        zoning
        lot_size_depth_feet
        lot_size_frontage_feet
        census_tract
        opp_zone
        msa_name
        fips_county
        municipality
        mcd_name
        neighborhood_name
        legal_description
        zoning_district_1
        zoning_district_2
        special_purpose_district
        split_boundary
        sanborn_map_number
        zoning_map_number
      }
    }
  }
`;

const ParcelDetails = ({ parcelId, vectorProps }) => {
  let { data, loading, error } = useQuery(GET_REONOMY_PROPERTY, {
    variables: { parcelId },
  });

  // loading = true;

  const property = data?.reonomyProperties?.items?.[0];

  return (
    <div className="parcel-panel">
      <h2 className="parcel-heading">Property Info (Matched)</h2>
      {loading && <div>Loading parcel data...</div>}
      {error && <div>Error: {error.message}</div>}
      {!loading && !error && property && (
        <>
          <p className="parcel-meta">Parcel ID: {property.parcel_id}</p>
          <p className="parcel-meta">Address: {property.address_line1}</p>
          <p className="parcel-meta">City: {property.city}</p>
          <p>{JSON.stringify(property, null, 2)}</p>
        </>
      )}
      {!loading && !error && !property && (
        <p className="parcel-meta">
          No property found for Parcel ID: {parcelId}
        </p>
      )}
    </div>
  );
};

export default ParcelDetails;
