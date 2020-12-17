import React, { useState, useEffect } from "react";
import store from "../../../redux/store";
import { Loading } from "../../../shared/Loading";
import { useSelector } from "react-redux";
import { Div } from "../../../shared/Div";
import { RadioInput } from "../../../shared/Input";
import { Label } from "../../../shared/Input";
import { Text } from "../../../shared/Text";
import { UploadReport } from "../../../shared/UploadReport";
import { Form } from "../../../shared/Form";
import { Grid } from "../../../shared/Grid";
import InspectionReport from "./InspectionReport";
import { FormButton, LabeledInput } from "../../../shared/Input";
import { submitActionTakenform } from "../../../redux/services/";
import { useParams } from "react-router";
import { DatePicker } from "../../../shared/Input";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "../../../shared/Button";

const TakeAction = () => {
  const [formSubmitSuccess, setFormSubmitSuccess] = useState(false);
  const [formSaveSuccess, setFormSaveSuccess] = useState(false);
  const [formFailure, setFormFailure] = useState(false);
  const [showNonComplianceTerms, setShowNonComplianceTerms] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const params = useParams();
  const [actionDate, setActionDate] = useState(new Date());

  const { data } = useSelector((state) => state.inspectionReportReducer);

  const [actionTakenform, setActionTakenForm] = useState({
    compliancestatus: "compliance",
    tempclosestatus: "tempclose",
    showcausenoticestatus: "showcausenotice",
    finalrecommendation: "",
    actionreport: "",
  });

  useEffect(() => {
    if (data.action) {
      const { action } = data;
      setActionTakenForm({
        compliancestatus: action.complianceStatus
          ? "compliance"
          : "noncompliance",
        tempclosestatus: action.tempcloseStatus
          ? "tempclose"
          : "permanentclose",
        showcausenoticestatus: action.showcausenoticeStatus
          ? "showcausenotice"
          : "closure",
        finalrecommendation: action.finalRecommendation || "",
        actionreport: action.report || "",
      });
      setActionDate(new Date(action.date));
      setShowNonComplianceTerms(!action.complianceStatus);
    }
  }, [data]);

  const onInputChange = (e) => {
    const {
      target: { name, type, checked, value },
    } = e;
    const fieldValue = type === "checkbox" ? checked : value;
    if (name === "compliancestatus") {
      if (fieldValue === "compliance") {
        setShowNonComplianceTerms(false);
        setActionTakenForm((prevState) => ({
          ...prevState,
          showcausenoticestatus: "showcausenotice",
          [name]: fieldValue,
        }));
        return;
      } else {
        setShowNonComplianceTerms(true);
      }
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

  const save = (e) => {
    e.preventDefault();
    setIsloading(true);
    console.log(actionTakenform);
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
          setFormSaveSuccess(true);
        } else {
          setFormFailure(true);
        }
      });
  };

  const submit = (e) => {
    e.preventDefault();
    setIsloading(true);
    store
      .dispatch(
        submitActionTakenform(
          params.id,
          {
            ...actionTakenform,
            date: actionDate?.toString(),
          },
          true
        )
      )
      .then((res) => {
        setIsloading(false);
        if (res.status === 200) {
          setFormSubmitSuccess(true);
        } else {
          setFormFailure(true);
        }
      });
  };

  if (isloading) {
    return <Loading />;
  }
  if (formSubmitSuccess) {
    return "Action Report Submitted Successfully.";
  }
  if (formSaveSuccess) {
    return "Action Report Saved Successfully.";
  }
  if (formFailure) {
    return "Action Report was not save/submitted because of some error.";
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
          <Grid templateColumns="auto">
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
          <Grid templateColumns="auto" hide={!showNonComplianceTerms}>
            <Div as="div" marginTop="20px">
              <Text>*Condition of Non-Compliance</Text>
            </Div>
            <RadioInput
              marginTop="10px"
              labelProps={{
                label: "Show-Cause Notice",
              }}
              inputProps={{
                name: "showcausenoticestatus",
                id: "showcausenotice",
                value: "showcausenotice",
                checked:
                  actionTakenform.showcausenoticestatus === "showcausenotice",
                onChange: onInputChange,
              }}
            />
            <RadioInput
              marginTop="10px"
              labelProps={{
                label: "Closure",
              }}
              inputProps={{
                name: "showcausenoticestatus",
                id: "closure",
                value: "closure",
                checked: actionTakenform.showcausenoticestatus === "closure",
                onChange: onInputChange,
              }}
            />
          </Grid>
          <Div marginTop="30px">
            <Label marginTop="30px">Close status:</Label>
          </Div>
          <Grid templateColumns="auto">
            <RadioInput
              marginTop="10px"
              labelProps={{ label: "Temporarily Closed" }}
              inputProps={{
                name: "tempclosestatus",
                id: "tempclose",
                value: "tempclose",
                checked: actionTakenform.tempclosestatus === "tempclose",
                onChange: onInputChange,
              }}
            />
            <RadioInput
              marginTop="10px"
              labelProps={{ label: "Permanent Closed" }}
              inputProps={{
                name: "tempclosestatus",
                id: "permanentclose",
                value: "permanentclose",
                checked: actionTakenform.tempclosestatus === "permanentclose",
                onChange: onInputChange,
              }}
            />
          </Grid>

          <Div marginTop="30px">
            <Label marginTop="30px">Action Taken Date</Label>
          </Div>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            marginTop="10px"
            selected={actionDate}
            name="actiondate"
            onChange={(date) => {
              setActionDate(date);
            }}
          />

          <UploadReport
            onUploadComplete={onUploadComplete}
            onRemoveFile={onRemoveFile}
            file={actionTakenform.actionreport}
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
              value: actionTakenform.finalrecommendation,
              type: "text",
              onChange: onInputChange,
            }}
          />
        </div>
        <Button
          marginTop="20px"
          onClick={save}
          primary
          title="Save the action to update it later"
        >
          Save
        </Button>
        <FormButton
          marginTop="20px"
          marginLeft="20px"
          title="Please Check Above All Conditions Of Non-compliance To Submit Form"
          onClick={submit}
        />
      </Form>
    </div>
  );
};

export default TakeAction;
