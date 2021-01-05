import {
    initSectorWiseAction, 
    SectorWiseSuccess, 
    SectorWiseError } 
    from "../actions";
import axios from "../../axios"

export function getSectorWise(river){
    return (dispatch) => {
        dispatch(initSectorWiseAction());
        axios
        .get('/inspection/allinspection')
        .then((res) => {
            const data = res.data;
            const sectors = [];
            if (data && data.length > 0) {
              data.forEach((inspection) => {
                  if (inspection.factory.basin.name.includes(river)) {
                    const sector=inspection.factory.sector.name;
                    if (!sectors[sector]){
                        sectors[sector]=[];
                    }
                    sectors[sector].push({
                        id: inspection._id,
                        status: inspection.status,
                        sectorname: sector,
                        title: river,
                        unitcode: inspection.factory.unitcode,
                        unitname: inspection.factory.name,
                        region: inspection.factory.region,
                        inspectionDate: inspection.status===2? inspection.inspectionDate: null,
                    });
                  }
              });
            }
            const sectorWiseArray = Object.keys(sectors).map(
                (sector) => sectors[sector]
              );
              console.log(sectorWiseArray)
              dispatch({ ...SectorWiseSuccess(), data : sectorWiseArray });
          })
        .catch((err) => {
            console.log(err)
            dispatch(SectorWiseError());
        });
    };
}