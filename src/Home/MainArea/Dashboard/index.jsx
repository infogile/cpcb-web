import React from "react";
import RiverStats from "./RiverStats";
import { Grid } from "../../../shared/Grid";

export const Dashboard = () => {
  return (
    <Grid>
      <RiverStats title="Ganga Dashboard"></RiverStats>
      <RiverStats title="Yamuna Dashboard"></RiverStats>
    </Grid>
  );
};

export default Dashboard;
