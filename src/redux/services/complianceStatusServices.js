import { initcomplianceAction, compliancestatusSuccess, compliancestatusError } from "../actions";
import axios from "../../axios"

export function getComplianceStatus() {
    return (dispatch) => {
        dispatch(initcomplianceAction());
        axios
            .get('/inspection/allinspection')
            .then((res) => {
                const resdata = res.data;
                let data = []
                const rivers = ["ganga", "yamuna"];
                if (resdata && resdata.length > 0) {
                    resdata.forEach((inspection) => {
                        rivers.forEach((river) => {
                            if (inspection.factory.basin.name.includes(river)) {
                                if(!data[river]){
                                    data[river]=[];
                                }
                                const state=inspection.factory.district.state.name;
                                if(!data[river][state])
                                {
                                    data[river][state]={
                                        id: inspection._id,
                                        statename: state,  
                                        title: river,
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
                                    data[river][state].actioncompleted = data[river][state].actioncompleted + 1;
                                    if (inspection.actions[inspection.actions.length-1].complianceStatus === 1){
                                        data[river][state].complied = data[river][state].complied + 1;
                                    } 
                                    else if (inspection.actions[inspection.actions.length-1].complianceStatus === 2){
                                        data[river][state].tempclose = data[river][state].tempclose + 1;
                                    } 
                                    else if (inspection.actions[inspection.actions.length-1].complianceStatus === 3){
                                        data[river][state].permanentclose = data[river][state].permanentclose + 1;
                                    } 
                                    else if (inspection.actions[inspection.actions.length-1].complianceStatus === 0 && inspection.actions[inspection.actions.length-1].showcausenoticeStatus === true){
                                        data[river][state].showcausenotice = data[river][state].showcausenotice + 1;
                                    } 
                                    else if (inspection.actions[inspection.actions.length-1].complianceStatus === 0 && inspection.actions[inspection.actions.length-1].showcausenoticeStatus === false){
                                        data[river][state].closerdirection = data[river][state].closerdirection + 1;
                                    } 
                                    else if (inspection.actions[inspection.actions.length-2].complianceStatus === 0 && inspection.actions[inspection.actions.length-2].showcausenoticeStatus === true
                                            && inspection.actions[inspection.actions.length-1].complianceStatus === 1){
                                        data[river][state].scnwithdrawn = data[river][state].scnwithdrawn + 1;
                                    } 
                                    else if (inspection.actions[inspection.actions.length-2].complianceStatus === 0 && inspection.actions[inspection.actions.length-2].showcausenoticeStatus === false
                                        && inspection.actions[inspection.actions.length-1].complianceStatus === 1){
                                        data[river][state].closurerevoke = data[river][state].closurerevoke + 1;
                                    }
                                }   
                            }
                        });
                    });
                }
                rivers.forEach((river)=>{
                    const stateArray = Object.keys(data[river]).map(
                        (state) => data[river][state]
                    );
                    data[river] = stateArray;
                })
                
                const riverArray = Object.keys(data).map(
                    (river) => data[river]
                );    
                dispatch({ ...compliancestatusSuccess(), data: riverArray});
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
                dispatch(compliancestatusError());
            });
    };
}


//compliancestatus: inspection.actions.length > 0 && inspection.actions[inspection.actions.length-1].complianceStatus,
