export function initfactorylistAction(){
    return {
        type: "INIT_FACTORY_LIST"
    };
}

export function factorylistSuccess(){
    return {
        type : "GET_FACTORY_LIST"
    };
}

export function factorylistError() {
    return {
        type: "ERROR_FACTORY_LIST"
    };
}