import React from "react";
import styled from "styled-components";
import { Grid } from "./Grid";
import { Div } from "./Div";
<<<<<<< HEAD
import { UploadIcon } from "../icons/";
=======
>>>>>>> 103609f... initial commit

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #aaaaaa;
  box-sizing: border-box;
  border-radius: 5px;
  height: ${(props) => (props.height ? props.height : "35px")};
  font-size: 16px;
<<<<<<< HEAD
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
=======
>>>>>>> 103609f... initial commit
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => (props.width ? props.width : "-webkit-fill-available")};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  padding: 5px 15px;
`;

<<<<<<< HEAD
export const FileInput = styled.input`
  border: 3px solid grey;
  opacity: 1;
  text-align: center;
  z-index: 2;
  height: 90px;
  width: 90px;
`;

export const MediaInput = (props) => {
  return (
    <Div bg="black" height="90px" width="90px">
      <FileInput {...props} />
      <UploadIcon />
    </Div>
  );
};

=======
>>>>>>> 103609f... initial commit
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
<<<<<<< HEAD

export const FormButton = (props) => {
  return (
    <Input type="submit" width="160px " bg="#00A8F3" color="white" {...props} />
  );
};
=======
>>>>>>> 103609f... initial commit
