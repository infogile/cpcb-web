import { initcomplianceAction, compliancestatusSuccess, compliancestatusError } from "../actions";
import axios from "../../axios"

export function getComplianceStatus(river) {
    return (dispatch) => {
        dispatch(initcomplianceAction());
        axios
            .get('/inspection/allinspection')
            .then((res) => {
                const resdata = res.data;
                let data = []
                if (resdata && resdata.length > 0) {
                    resdata.forEach((inspection) => {
                        // if (inspection.factory.basin.name.includes(river)) {
                          const state=inspection.factory.district.state.name;
                          if (!data[state]){
                              data[state] = {
                                id: inspection._id,
                                statename: state,  
                                title: inspection.factory.basin.name,
                                actioncompleted: 0,
                                complied: 0,
                                tempclose: 0,
                                permanentclose: 0,
                                showcausenotice: 0,
                                closerdirection: 0,
                                scnwithdrawn: 0,
                                closurerevoke: 0,
                              };
                          }
                          if (inspection.status >= 3) {
                            data[state].actioncompleted = data[state].actioncompleted + 1;
                            if (inspection.actions[inspection.actions.length-1].complianceStatus === 1){
                                data[state].complied = data[state].complied + 1;
                            } else if (inspection.actions[inspection.actions.length-1].complianceStatus === 2){
                                data[state].tempclose = data[state].tempclose + 1;
                            } else if (inspection.actions[inspection.actions.length-1].complianceStatus === 3){
                                data[state].permanentclose = data[state].permanentclose + 1;
                            } else if (inspection.actions[inspection.actions.length-1].complianceStatus === 0 && inspection.actions[inspection.actions.length-1].showcausenoticeStatus === true){
                                data[state].showcausenotice = data[state].showcausenotice + 1;
                            } else if (inspection.actions[inspection.actions.length-1].complianceStatus === 0 && inspection.actions[inspection.actions.length-1].showcausenoticeStatus === false){
                                data[state].closerdirection = data[state].closerdirection + 1;
                            } else if (inspection.actions[inspection.actions.length-2].complianceStatus === 0 && inspection.actions[inspection.actions.length-2].showcausenoticeStatus === true
                                       && inspection.actions[inspection.actions.length-1].complianceStatus === 1){
                                data[state].scnwithdrawn = data[state].scnwithdrawn + 1;
                            } else if (inspection.actions[inspection.actions.length-2].complianceStatus === 0 && inspection.actions[inspection.actions.length-2].showcausenoticeStatus === false
                                && inspection.actions[inspection.actions.length-1].complianceStatus === 1){
                                data[state].closurerevoke = data[state].closurerevoke + 1;
                            } 
                        }
                        // }

                    });
                    }
                    const stateArray = Object.keys(data).map(
                        (state) => data[state]
                      );
                dispatch({ ...compliancestatusSuccess(), data: stateArray});
                
            })
            .catch((err) => {
                console.log(err)
                dispatch(compliancestatusError());
            });
    };
}


//compliancestatus: inspection.actions.length > 0 && inspection.actions[inspection.actions.length-1].complianceStatus,