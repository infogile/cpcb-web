import React from "react";
import styled from "styled-components";
import { Grid } from "./Grid";
import { Div } from "./Div";

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #aaaaaa;
  box-sizing: border-box;
  border-radius: 5px;
  height: ${(props) => (props.height ? props.height : "35px")};
  font-size: 16px;
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => (props.width ? props.width : "-webkit-fill-available")};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  padding: 5px 15px;
`;

export const Label = styled.label`
  color: black;
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
`;

export const LabeledInput = ({ labelProps, inputProps, ...otherProps }) => {
  const { id } = inputProps;
  const { label } = labelProps;

  return (
    <Grid {...otherProps}>
      <Label {...{ htmlFor: id, ...labelProps }}>{label}</Label>
      <Input {...{ marginTop: "10px", ...inputProps }} />
    </Grid>
  );
};

export const RadioInput = ({ labelProps, inputProps, ...otherProps }) => {
  const { id } = inputProps;
  const { label } = labelProps;

  return (
    <Div {...otherProps}>
      <Input {...{ height: "13px", ...inputProps, type: "radio" }} />
      <Label {...{ htmlFor: id, marginLeft: "10px", ...labelProps }}>
        {label}
      </Label>
    </Div>
  );
};

export const CheckBox = ({ labelProps, inputProps, ...otherProps }) => {
  const { id } = inputProps;
  const { label } = labelProps;

  return (
    <Div {...otherProps}>
      <Input {...{ height: "13px", ...inputProps, type: "checkbox" }} />
      <Label {...{ htmlFor: id, marginLeft: "10px", ...labelProps }}>
        {label}
      </Label>
    </Div>
  );
};
