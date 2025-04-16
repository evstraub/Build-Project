import { gql, useQuery } from '@apollo/client';
import SidebarCards from './SidebarCards';
import schema from '../data/schema.json';

const GET_TAX_ASSESSORS = gql`
query {
  attomTaxAssessors {
    items {
      parcel_id
      PropertyAddressFull
      PropertyLatitude
      PropertyLongitude
      ATTOM_ID
      
    }
  }
}

`;
const SideBar = ({ parcelId }) => {
  const { data, loading, error } = useQuery(GET_TAX_ASSESSORS);

if (data) {
  console.log(
    "All returned parcel IDs:",
    data.attomTaxAssessors.items.map((item) => item.parcel_id)
  );
  
}



  if (!parcelId) return <div className="p-6">Click a parcel to view info.</div>;
  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">Error loading parcel.</div>;

  // find the matching item
  const parcel = data?.attomTaxAssessors?.items.find(
    (item) => String(item.parcel_id).trim().toLowerCase() === String(parcelId).trim().toLowerCase()
  );
  
  

  if (!parcel) return <div className="p-6">Parcel not found.</div>;

  return (
    <div className="p-6 overflow-y-auto h-full">
      <SidebarCards schema={schema} data={parcel} />
    </div>
  );
};

export default SideBar;
