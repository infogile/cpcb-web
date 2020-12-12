import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid } from "./Grid";
import { Div } from "./Div";
import { UploadIcon } from "../icons/";
import { Button } from "./Button";
import { ProgressBar } from "./ProgressBar";

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #aaaaaa;
  box-sizing: border-box;
  border-radius: 5px;
  height: ${(props) => (props.height ? props.height : "35px")};
  font-size: 16px;
  cursor: ${(props) =>
    props.disable || props.type !== "submit" ? "" : "pointer"};
  background: ${(props) => (props.disable ? "grey" : props.bg)};
  color: ${(props) => props.color};
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => (props.width ? props.width : "-webkit-fill-available")};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  padding: 5px 15px;
`;

export const FileInputStyled = styled.input`
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
      <FileInputStyled {...props} />
      <UploadIcon />
    </Div>
  );
};

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

export const FileInput = ({
  onUpload,
  fileRef,
  fileLink,
  name,
  label,
  progress,
  onCancel,
  onRemove,
  labelProps,
  inputProps,
  ...otherProps
}) => {
  const fileLinkPath = fileLink.split("/");
  const fileName = fileLinkPath[fileLinkPath.length - 1];
  return (
    <Grid {...otherProps}>
      <Label {...labelProps}>{label}</Label>
      {progress === -1 && (
        <Grid templateColumns="auto auto" marginTop="10px">
          <Input
            ref={fileRef}
            {...{
              accept: "application/msword, application/pdf",
              name: name,
              id: name,
              type: "file",
              ...inputProps,
            }}
          />
          <Button onClick={onUpload} name={name} marginLeft="10px">
            Upload
          </Button>
        </Grid>
      )}
      {progress > -1 && progress <= 100 && (
        <Grid templateColumns="auto auto" marginTop="10px">
          <ProgressBar progress={progress} />
          <Button onClick={onCancel} name={name} marginLeft="10px">
            Cancel
          </Button>
        </Grid>
      )}
      {progress > 100 && (
        <Div marginTop="10px">
          <a href={fileLink.split()} target="_blank">
            {fileName}
          </a>
          <Button onClick={onRemove} name={name} marginLeft="10px">
            Remove
          </Button>
        </Div>
      )}
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

export const FormButton = (props) => {
  return (
    <Input type="submit" width="160px " bg="#00A8F3" color="white" {...props} />
  );
};
