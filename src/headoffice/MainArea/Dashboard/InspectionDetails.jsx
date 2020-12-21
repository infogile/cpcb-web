import RiverStats from "./RiverStats";
import React, { useEffect } from "react";
import { Loading } from "../../../shared/Loading";
import { Grid } from "../../../shared/Grid";
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { getHeadofficedashboard } from "../../../redux/services/";
import { capitalizeFirstLetter } from "../../../helpers";


export const InspectionDetails = () => {
    const { isLoading, data } = useSelector((state) => state.headofficeDashboardReducers);
    useEffect(() => {
        store.dispatch(getHeadofficedashboard());
    }, []);
    if (isLoading) {
        return <Loading />;
    }
    return(
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
            "There are no Inspections alloted"}
        {/* <RiverStats title="Yamuna Dashboard"></RiverStats> */}
        </Grid>
    )
  };
  
  export default InspectionDetails;