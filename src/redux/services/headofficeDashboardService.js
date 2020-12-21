import {initHeadofficeDashboardAction, HeadofficeDashboardSuccess,HeadofficeDashboardError} from "../actions";
import axios from "../../axios"

export function getHeadofficedashboard(){
    return (dispatch) => {
        dispatch(initHeadofficeDashboardAction());
        axios
        .post('/inspection')
        .then((res) => {
            console.log(res.data)
            dispatch({ ...HeadofficeDashboardSuccess(), data: dashboardArray });
        })
        .catch((err) => {
            console.log(err)
            dispatch(HeadofficeDashboardError());
        });
    };
}