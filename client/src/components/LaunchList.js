import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export default () => {
  return (
    <div>
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return <div>Loading...</div>;
          }
          return (
            <ul>
              {data.launches.map(launch => (
                <LaunchItem {...launch} key={launch.flight_number} />
              ))}
            </ul>
          );
        }}
      </Query>
    </div>
  );
};
