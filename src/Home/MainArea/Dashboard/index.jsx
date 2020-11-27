<<<<<<< HEAD
import React, { useEffect } from "react";
import RiverStats from "./RiverStats";
import { Grid } from "../../../shared/Grid";
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { getInspections } from "../../../redux/services/";

export const Dashboard = () => {
  const { isLoading, data } = useSelector((state) => state.dashboardReducers);
  useEffect(() => {
    store.dispatch(getInspections());
  }, []);
  if (isLoading) {
    return "loading...";
  }
  return (
    <Grid>
      <RiverStats title="Ganga Dashboard" data={data.ganga}></RiverStats>
      {/* <RiverStats title="Yamuna Dashboard"></RiverStats> */}
=======
import React from "react";
import RiverStats from "./RiverStats";
import { Grid } from "../../../shared/Grid";

export const Dashboard = () => {
  return (
    <Grid>
      <RiverStats title="Ganga Dashboard"></RiverStats>
      <RiverStats title="Yamuna Dashboard"></RiverStats>
>>>>>>> 103609f... initial commit
    </Grid>
  );
};

export default Dashboard;
