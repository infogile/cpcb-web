import {initfactorylistAction, factorylistSuccess,factorylistError} from "../actions";
import axios from "../../axios"

export function getFactorylist(status,river){
    return (dispatch) => {
        dispatch(initfactorylistAction());
        axios
        .get('/inspection/allinspection')
        .then((res) => {
            const data = res.data;
            let factorylist = []
            if (data && data.length > 0) {

                factorylist = data.filter(inspection => {
                    if(status === "alotted_factory" && inspection.status >= 0 && inspection.factory.basin.name.includes(river)){
                        return true;
                    } else if (status === "pending_factory" && inspection.status === 0 && inspection.factory.basin.name.includes(river)){
                        return true;
                    }
                    else if (status === "fdone_factory" && inspection.status === 1 && inspection.factory.basin.name.includes(river)){
                        return true;
                    }
                    else if (status === "idone_factory" && inspection.status === 2 && inspection.factory.basin.name.includes(river)){
                        return true;
                    }
                }).map((inspection) => ( {
                    id: inspection._id,
                    unitcode: inspection.factory.unitcode,
                    unitname: inspection.factory.name,
                    sector: inspection.factory.sector.name,
                    assignto: inspection.assignedTo.username.split(".")[0],
                    status: inspection.status
                    }));
            
            }
            dispatch({ ...factorylistSuccess(),  factorylist});
          })
        .catch((err) => {
            console.log(err)
            dispatch(factorylistError());
        });
    };
}