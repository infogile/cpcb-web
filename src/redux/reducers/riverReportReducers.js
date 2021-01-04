export function riverReportReducers(
    state = {
        data:[],
        isLoading: true,
        },
        action
    ) {
    const {data, type} = action;
    switch (type) {
        case "INIT_RIVER_REPORT_ACTION":
            return {
                ...state,
                isLoading: true,
                };
        case "GET_RIVER_REPORT_ACTION":
        return {
            ...state,
            data,
            isLoading: false,
            };
        case "ERROR_RIVER_REPORT_ACTION":
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