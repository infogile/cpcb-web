import React, { useEffect } from "react";
import RiverStats from "./RiverStats";
import { Loading } from "../../../shared/Loading";
import { Grid } from "../../../shared/Grid";
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { getInspections } from "../../../redux/services/";
import { capitalizeFirstLetter } from "../../../helpers";

export const Dashboard = () => {
  const { isLoading, data } = useSelector((state) => state.dashboardReducers);
  useEffect(() => {
    store.dispatch(getInspections());
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Grid>
      {data &&
        data.map((riverData) => {
          return (
            <RiverStats
              key={riverData.title}
              title={`${capitalizeFirstLetter(riverData.title)} Dashboard`}
              data={riverData}
            />
          );
        })}
      {(!data || data.length === 0) &&
        "There are no Inspections asssigned to you."}
      {/* <RiverStats title="Yamuna Dashboard"></RiverStats> */}
    </Grid>
  );
};

export default Dashboard;
