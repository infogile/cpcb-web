export function stateWiseReducers(
    state = {
        data:[],
        isLoading: true,
        },
        action
    ) {
    const {data, type} = action;
    switch (type) {
        case "INIT_STATE_WISE_ACTION":
            return {
                ...state,
                isLoading: true,
                };
        case "GET_STATE_WISE_ACTION":
        return {
            ...state,
            data,
            isLoading: false,
            };
        case "ERROR_STATE_WISE_ACTION":
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