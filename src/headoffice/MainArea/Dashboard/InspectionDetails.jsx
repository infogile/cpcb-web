import React, { useEffect } from "react";
import RiverStats from "../../../Home/MainArea/Dashboard/RiverStats";
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
        <>
        <Grid style={{ marginLeft: "140px"}}>
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
        <Grid>
            <iframe width="95%" height="1200px" src="https://datastudio.google.com/embed/reporting/ea2b21de-7e3c-4804-a719-c54a68789280/page/LnUuB" ></iframe>
        </Grid>
        </>
    )
  };
  
  export default InspectionDetails;