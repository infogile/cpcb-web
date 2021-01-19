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
import { UploadedReportList } from "./UploadedReportList";
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
    compliancestatus: 1,
    showcausenoticestatus: "showcausenotice",
    finalrecommendation: "",
    actionreport: "",
    uploadedActionReports: [],
  });

  useEffect(() => {
    const { actions } = data;
    if (actions && actions.length > 0) {
      const action = actions[actions.length - 1];
      setActionTakenForm({
        compliancestatus: action.complianceStatus,
        showcausenoticestatus: action.showcausenoticeStatus
          ? "showcausenotice"
          : "closure",
        finalrecommendation: action.finalRecommendation || "",
        actionreport: "",
        uploadedActionReports: action.reports || [],
      });
      setActionDate(action.date ? new Date(action.date) : new Date());
      setShowNonComplianceTerms(!action.complianceStatus);
    } else {
      setActionTakenForm({
        compliancestatus: 1,
        showcausenoticestatus: "showcausenotice",
        finalrecommendation: "",
        actionreport: "",
        uploadedActionReports: [],
      });
    }
  }, [data]);

  const onInputChange = (e) => {
    const {
      target: { name, type, checked, value },
    } = e;
    const fieldValue = type === "checkbox" ? checked : value;
    if (name === "compliancestatus") {
      const complianceValue = parseInt(fieldValue);
      if (complianceValue !== 0) {
        setShowNonComplianceTerms(false);
      } else {
        setShowNonComplianceTerms(true);
      }
      setActionTakenForm((prevState) => ({
        ...prevState,
        showcausenoticestatus: "showcausenotice",
        [name]: complianceValue,
      }));
      return;
    }
    setActionTakenForm((prevState) => ({
      ...prevState,
      [name]: fieldValue,
    }));
  };

  const onUploadComplete = (name, fileLocation) => {
    setActionTakenForm((prevState) => ({
      ...prevState,
      actionreport: fileLocation,
    }));
  };

  const onRemoveFile = (name) => {
    setActionTakenForm((prevState) => ({ ...prevState, [name]: undefined }));
  };

  const save = (e) => {
    e.preventDefault();
    setIsloading(true);
    store
      .dispatch(
        submitActionTakenform(params.id, {
          ...actionTakenform,
          actionreports: actionTakenform.actionreport
            ? [
                ...actionTakenform.uploadedActionReports,
                actionTakenform.actionreport,
              ]
            : actionTakenform.uploadedActionReports,
          date: actionDate?.toString(),
        })
      )
      .then((res) => {
        setIsloading(false);
        setFormSaveSuccess(true);
      })
      .catch(() => {
        setIsloading(false);
        setFormFailure(true);
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
            actionreports: actionTakenform.actionreport
              ? [
                  ...actionTakenform.uploadedActionReports,
                  actionTakenform.actionreport,
                ]
              : actionTakenform.uploadedActionReports,
            date: actionDate?.toString(),
          },
          true
        )
      )
      .then((res) => {
        setIsloading(false);
        setFormSubmitSuccess(true);
      })
      .catch(() => {
        setIsloading(false);
        setFormFailure(true);
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
    return (
      <div style={{ marginBottom: "100px", marginRight: "10px" }}>
        <InspectionReport />
        <Text fontWeight="bold">Action Report Submitted Already.</Text>
      </div>
    );
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
            <Label marginTop="30px" fontWeight="bold" color="dimgray">
              Compliance status (as per SPCB):
            </Label>
          </Div>
          <Grid templateColumns="auto">
            <RadioInput
              marginTop="10px"
              labelProps={{ label: "Compliance" }}
              inputProps={{
                name: "compliancestatus",
                id: "compliance",
                value: 1,
                checked: actionTakenform.compliancestatus === 1,
                onChange: onInputChange,
              }}
            />
            <RadioInput
              marginTop="10px"
              labelProps={{ label: "Non-Compliance" }}
              inputProps={{
                name: "compliancestatus",
                id: "noncompliance",
                value: 0,
                checked: actionTakenform.compliancestatus === 0,
                onChange: onInputChange,
              }}
            />
            <RadioInput
              marginTop="10px"
              labelProps={{ label: "Temporarily Closed" }}
              inputProps={{
                name: "compliancestatus",
                id: "tempclose",
                value: 2,
                checked: actionTakenform.compliancestatus === 2,
                onChange: onInputChange,
              }}
            />
            <RadioInput
              marginTop="10px"
              labelProps={{ label: "Permanent Closed" }}
              inputProps={{
                name: "compliancestatus",
                id: "permanentclose",
                value: 3,
                checked: actionTakenform.compliancestatus === 3,
                onChange: onInputChange,
              }}
            />
          </Grid>
          <Grid templateColumns="auto" hide={!showNonComplianceTerms}>
            <Div as="div" marginTop="20px">
              <Text fontWeight="bold" color="dimgray">
                *Condition of Non-Compliance:
              </Text>
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
            <Label marginTop="30px" fontWeight="bold" color="dimgray">
              Action Taken Date:
            </Label>
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
          <UploadedReportList
            marginTop="20px"
            label={"Uploaded Reports:"}
            links={actionTakenform.uploadedActionReports}
          />
          <UploadReport
            onUploadComplete={onUploadComplete}
            onRemoveFile={onRemoveFile}
            file={actionTakenform.actionreport}
            name="actionreport"
            label="Upload Report:"
            labelProps={{ fontWeight: "bold", color: "dimgray" }}
            id="actionreport"
          />

          <LabeledInput
            marginTop="30px"
            labelProps={{
              label: "Final Recommendation:",
              fontWeight: "bold",
              color: "dimgray",
            }}
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
