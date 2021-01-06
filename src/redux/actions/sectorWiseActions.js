export function initSectorWiseAction() {
    return {
      type: "INIT_SECTOR_WISE_ACTION",
    };
  }
  export function SectorWiseSuccess() {
    return {
      type: "GET_SECTOR_WISE_ACTION",
    };
  }
  export function SectorWiseError() {
    return {
      type: "ERROR_SECTOR_WISE_ACTION",
    };
  }