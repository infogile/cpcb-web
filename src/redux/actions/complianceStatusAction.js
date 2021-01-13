export function initcomplianceAction() {
    return {
        type: "INIT_COMPLIANCE_STATUS"
    };
}

export function compliancestatusSuccess() {
    return {
        type: "GET_COMPLIANCE_STATUS"
    };
}

export function compliancestatusError() {
    return {
        type: "ERROR_COMPLIANCE_STATUS"
    };
}