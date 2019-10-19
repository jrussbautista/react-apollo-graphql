import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default ({ mission_name, launch_date_local, flight_number }) => {
  return (
    <li>
      <h2>{mission_name}</h2>
      <div>
        Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
      </div>
      <Link to={`/launch/${flight_number}`}> Go to details </Link>
    </li>
  );
};
