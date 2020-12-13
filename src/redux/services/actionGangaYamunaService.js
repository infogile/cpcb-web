import {
    initActionsGangaAction,
    actionGangaSuccess,
    actionGangaError,
  } from "../actions";
  import axios from "../../axios";
  
  export function getActionGanga() {
    return (dispatch) => {
      dispatch(initActionsGangaAction());
      axios
        .get(`inspection/mycompletedinspections`)
        .then((res) => {
          const responseData = res.data;
          let data = [];
          let data1=[];
          if (responseData && responseData.length>0) {
            responseData.forEach((inspection) => {
                if(inspection.factory.basin.name.includes("ganga")){
                    data.push({
                        id: inspection._id,
                        status : inspection.status,
                        code: inspection.factory.unitcode,
                        name: inspection.factory.name,
                        basin : inspection.factory.basin.name,
                        sector : inspection.factory.sector.name,
                        region : inspection.factory.region,
                        username : inspection.assignedTo && inspection.assignedTo.username.split(".")[0].toUpperCase(),
                    })
                 }
                 else if(inspection.factory.basin.name.includes("yamuna")){
                  data1.push({
                      id: inspection._id,
                      status : inspection.status,
                      code: inspection.factory.unitcode,
                      name: inspection.factory.name,
                      basin : inspection.factory.basin.name,
                      sector : inspection.factory.sector.name,
                      region : inspection.factory.region,
                      username : inspection.assignedTo.username.split(".")[0].toUpperCase(),
                  })
               }
            });
        }
          dispatch({ ...actionGangaSuccess(), data, data1 });
        })
        .catch((err) => {
          console.log(err);
          dispatch(actionGangaError());
        });
    };
  }
  