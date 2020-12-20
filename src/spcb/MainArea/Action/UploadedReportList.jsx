import React from "react";
import { Div } from "../../../shared/Div";
import { Text } from "../../../shared/Text";

export const UploadedReportList = ({ label, links, ...otherProps }) => {
  if (!links || links.length === 0) {
    return null;
  }
  return (
    <Div {...otherProps}>
      <Text as="div" fontWeight="bold" color="dimgray" fontSize="16px">
        {label}
      </Text>
      {links &&
        links.map((link) => {
          const linkSplit = link.split("/");
          const name = linkSplit[linkSplit.length - 1];
          return (
            <Div marginTop="10px">
              <a href={link} target="_blank">
                {name}
              </a>
            </Div>
          );
        })}
    </Div>
  );
};
