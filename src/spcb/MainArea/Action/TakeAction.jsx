import React, { useRef, useState, useEffect } from "react";
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Div } from "../../../shared/Div";
import { RadioInput } from "../../../shared/Input";
import { Label } from "../../../shared/Input";
import { Text } from "../../../shared/Text";
import TakeActionReport from "./TakeActionReport";
import { Form } from "../../../shared/Form";
import { sub } from "../../../redux/services";
import { Grid } from "../../../shared/Grid";
import InspectionReport from "./InspectionReport";
import { FormButton, LabeledInput } from "../../../shared/Input";
import {
  getInspectionReport,
  submitActionTakenform,
} from "../../../redux/services/";
import { useParams } from "react-router";
import { DatePicker } from "../../../shared/Input";
import "react-datepicker/dist/react-datepicker.css";

const TakeAction = () => {
  const [showNonComplianceTerms, setShowNonComplianceTerms] = useState(false);
  // const [validationWaring, setValidationWarning] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const [formFailure, setFormFailure] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const params = useParams();
  const [actionDate, setActionDate] = useState(new Date());

  const { data, isLoading } = useSelector(
    (state) => state.inspectionReportReducer
  );
  useEffect(() => {}, []);

  const [actionTakenform, setActionTakenForm] = useState({
    compliancestatus: "compliance",
    finalrecommendation: "",
    file: "",
  });

  const onInputChange = (e) => {
    const {
      target: { name, type, checked, value },
    } = e;
    const fieldValue = type === "checkbox" ? checked : value;
    if (name === "compliancestatus") {
      setActionTakenForm((prevState) => ({
        ...prevState,
        [name]: fieldValue,
      }));
      return;
    }
    setActionTakenForm((prevState) => ({
      ...prevState,
      [name]: fieldValue,
    }));
  };

  const onUploadComplete = (name, fileLocation) => {
    setActionTakenForm((prevState) => ({ ...prevState, [name]: fileLocation }));
  };

  const onRemoveFile = (name) => {
    setActionTakenForm((prevState) => ({ ...prevState, [name]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    setIsloading(true);
    store
      .dispatch(
        submitActionTakenform(params.id, {
          ...actionTakenform,
          date: actionDate?.toString(),
        })
      )
      .then((res) => {
        setIsloading(false);
        if (res.status === 200) {
          setFormSuccess(true);
        } else {
          setFormFailure(true);
        }
      });
  };

  if (isloading) {
    return "loading...";
  }
  if (formSuccess) {
    return "Action Report Submitted Successfully.";
  }
  if (formFailure) {
    return "Action Report was not submitted because of some error.";
  }
  if (data && data.status === 3) {
    return "Action Report Submitted Already.";
  }

  return (
    <div style={{ marginBottom: "100px", marginRight: "10px" }}>
      <InspectionReport />
      <Form
        marginTop="40px"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <Text
            style={{
              fontSize: "30px",
              marginLeft: "-10px",
              fontFamily:
                "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif",
            }}
            marginLeft="60px"
          >
            <strong>Action Taken By SPCB</strong>
          </Text>
          <Div marginTop="30px">
            <Label marginTop="30px">Compliance status (as per SPCB)</Label>
          </Div>
          <Grid templateColumns="auto auto">
            <RadioInput
              marginTop="10px"
              labelProps={{ label: "Compliance" }}
              inputProps={{
                name: "compliancestatus",
                id: "compliance",
                value: "compliance",
                checked: actionTakenform.compliancestatus === "compliance",
                onChange: onInputChange,
              }}
            />
            <RadioInput
              marginTop="10px"
              labelProps={{ label: "Non-Compliance" }}
              inputProps={{
                name: "compliancestatus",
                id: "noncompliance",
                value: "noncompliance",
                checked: actionTakenform.compliancestatus === "noncompliance",
                onChange: onInputChange,
              }}
            />
          </Grid>

          <Div marginTop="30px">
            <Label marginTop="30px">Action Taken Date</Label>
          </Div>
          <DatePicker
            marginTop="10px"
            selected={actionDate}
            name="actiondate"
            onChange={(date) => {
              setActionDate(date);
            }}
          />

          <TakeActionReport
            onUploadComplete={onUploadComplete}
            onRemoveFile={onRemoveFile}
            name="actionreport"
            label="Upload Report"
            id="actionreport"
          />

          <LabeledInput
            marginTop="30px"
            labelProps={{ label: "Final Recommendation" }}
            inputProps={{
              name: "finalrecommendation",
              id: "finalrecommendation",
              value: actionTakenform.finalRecommendation,
              type: "text",
              onChange: onInputChange,
            }}
          />
        </div>
        <FormButton
          marginTop="20px"
          title="Please Check Above All Conditions Of Non-compliance To Submit Form"
          onClick={submit}
        />
      </Form>
    </div>
  );
};

export default TakeAction;
