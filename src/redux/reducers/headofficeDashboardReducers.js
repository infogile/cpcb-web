export function headofficeDashboardReducers(
    state = {
        data:[],
        isLoading: true,
        },
        action
    ) {
    const {data, type} = action;
    switch (type) {
        case "INIT_HEADOFFICE_DAHBOARD":
            return {
                ...state,
                isLoading: true,
                };
        case "GET_HEADOFFICE_DASHBOARD":
        return {
            ...state,
            data,
            isLoading: false,
            };
        case "ERROR_HEADOFFICE_DASHBOARD":
            return {
                ...state,
                isLoading: false,
                };
        default:
            return {
                ...state,
            };
        }         
    }