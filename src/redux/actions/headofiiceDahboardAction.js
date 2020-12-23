export function initHeadofficeDashboardAction(){
    return {
        type: "INIT_HEADOFFICE_DAHBOARD"
    };
}

export function HeadofficeDashboardSuccess(){
    return {
        type : "GET_HEADOFFICE_DASHBOARD"
    };
}

export function HeadofficeDashboardError() {
    return {
        type: "ERROR_HEADOFFICE_DASHBOARD"
    };
}