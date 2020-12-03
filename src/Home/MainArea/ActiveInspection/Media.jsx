import React from "react";
import { Div } from "../../../shared/Div";
import { MediaInput } from "../../../shared/Input";

const Media = () => {
  return (
    <Div marginTop="20px" bg="white">
      <MediaInput type="file" placeholder="" />
    </Div>
  );
};

export default Media;
