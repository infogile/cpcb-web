export function initStateWiseAction() {
    return {
      type: "INIT_STATE_WISE_ACTION",
    };
  }
  export function StateWiseSuccess() {
    return {
      type: "GET_STATE_WISE_ACTION",
    };
  }
  export function StateWiseError() {
    return {
      type: "ERROR_STATE_WISE_ACTION",
    };
  }