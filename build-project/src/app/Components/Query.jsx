import { useQuery, gql } from '@apollo/client';

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

function Query() {
  const { loading, error, data } = useQuery(GET_TAX_ASSESSORS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;

  return (
    <div>
      {data.attomTaxAssessors.items.map(({ PropertyAddressFull }, index) => (
        <div key={index}>
          <p>{PropertyAddressFull}</p>
        </div>
      ))}
    </div>
  );
}

export default Query