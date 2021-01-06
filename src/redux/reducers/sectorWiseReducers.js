export function sectorWiseReducers(
    state = {
        data:[],
        isLoading: true,
        },
        action
    ) {
    const {data, type} = action;
    switch (type) {
        case "INIT_SECTOR_WISE_ACTION":
            return {
                ...state,
                isLoading: true,
                };
        case "GET_SECTOR_WISE_ACTION":
        return {
            ...state,
            data,
            isLoading: false,
            };
        case "ERROR_SECTOR_WISE_ACTION":
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