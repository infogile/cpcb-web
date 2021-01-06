export function factoryReducers(
    state = {
        factorylist:[],
        isLoading: true,
        },
        action
    ) {
    const {factorylist, type} = action;
    switch (type) {
        case "INIT_FACTORY_LIST":
            return {
                ...state,
                isLoading: true,
                };
        case "GET_FACTORY_LIST":
        return {
            ...state,
            factorylist,
            isLoading: false,
            };
        case "ERROR_FACTORY_LIST":
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