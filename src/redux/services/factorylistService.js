import {initfactorylistAction, factorylistSuccess,factorylistError} from "../actions";
import axios from "../../axios"

export function getFactorylist(status,river, state){
    return (dispatch) => {
        dispatch(initfactorylistAction());
        axios
        .get('/inspection/allinspection')
        .then((res) => {
            const data = res.data;
            let factorylist = [];
            var flag = false;
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
                    else if (status === "idone_factory" && inspection.status >= 2 && inspection.factory.basin.name.includes(river)){
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

                data.forEach((inspection) => {
                    if(inspection.status >= 3 && 
                    inspection.factory.basin.name.includes(river) && 
                    inspection.factory.district.state.name.includes(state)){
                        if(status === "actioncompleted" ){
                            flag = true;
                        }
                        else if (status === "complied" && 
                        inspection.actions[inspection.actions.length-1].complianceStatus === 1){
                            flag = true;
                        }
                        else if (status === "tempclose" &&
                        inspection.actions[inspection.actions.length-1].complianceStatus === 2){
                            flag = true;
                        }
                        else if (status === "permanentclose" && 
                        inspection.actions[inspection.actions.length-1].complianceStatus === 3){
                            flag = true;
                        }
                        else if (status === "showcausenotice" && 
                        inspection.actions[inspection.actions.length-1].complianceStatus === 0 && 
                        inspection.actions[inspection.actions.length-1].showcausenoticeStatus === true){
                            flag = true;
                        }
                        else if (status === "closerdirection" && 
                        inspection.actions[inspection.actions.length-1].complianceStatus === 0 && 
                        inspection.actions[inspection.actions.length-1].showcausenoticeStatus === false){
                            flag = true;
                        }
                        else if (status === "scnwithdrawn" &&  
                        inspection.actions[inspection.actions.length-2].complianceStatus === 0 && 
                        inspection.actions[inspection.actions.length-2].showcausenoticeStatus === true && 
                        inspection.actions[inspection.actions.length-1].complianceStatus === 1){
                            flag = true;
                        }
                        else if (status === "closurerevoke" && 
                        inspection.actions[inspection.actions.length-2].complianceStatus === 0 && 
                        inspection.actions[inspection.actions.length-2].showcausenoticeStatus === false && 
                        inspection.actions[inspection.actions.length-1].complianceStatus === 1){
                            flag = true;
                        }    

                        if(flag === true)
                        {
                            factorylist.push({
                                id: inspection._id,
                                unitcode: inspection.factory.unitcode,
                                unitname: inspection.factory.name,
                                sector: inspection.factory.sector.name,
                                assignto: inspection.assignedTo.username.split(".")[0],
                                status: inspection.status
                            })
                            flag = false;
                        }  
                    }
                });
            }
            dispatch({ ...factorylistSuccess(),  factorylist});
          })
        .catch((err) => {
            console.log(err)
            dispatch(factorylistError());
        });
    };
}