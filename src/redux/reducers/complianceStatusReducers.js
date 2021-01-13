export function complianceStatusReducers(
    state = {data: {}, isLoading: true},
    action
) {
    const {data,type} = action;
    switch (type) {
        case "INIT_COMPLIANCE_STATUS":
            return {
                ...state,
                isLoading: true
            };
        case "GET_COMPLIANCE_STATUS":
            return {
                ...state,
                data,
                isLoading: false,
            };
        case "ERROR_COMPLIANCE_STATUS":
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