import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { useParams } from "react-router-dom";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      mission_name
      flight_year
      rocket {
        rocket_name
        rocket_id
      }
    }
  }
`;

const Launch = props => {
  let { flight_number } = useParams();
  flight_number = parseInt(flight_number);
  return (
    <div>
      <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {({ loading, error, data }) => {
          if (loading) return <div> Loading...</div>;

          return (
            <div>
              <h1>{data.launch.mission_name}</h1>
              <div>
                Rocket: <h3> {data.launch.rocket.rocket_name} </h3>
              </div>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Launch;
