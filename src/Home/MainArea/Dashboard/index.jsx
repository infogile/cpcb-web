import React from "react";
import RiverStats from "./RiverStats";
import UpcomingInspections from "./UpcomingInspections";

export const Dashboard = () => {
  return (
    <>
      <RiverStats title="Ganga Dashboard"></RiverStats>
      <RiverStats title="Yamuna Dashboard"></RiverStats>
      <UpcomingInspections />
    </>
  );
};

export default Dashboard;
