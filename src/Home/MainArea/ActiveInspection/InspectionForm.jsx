import React, { useState } from "react";
import { Form } from "../../../shared/Form";
<<<<<<< HEAD
import {
  CheckBox,
  FormButton,
  Input,
  LabeledInput,
} from "../../../shared/Input";
=======
import { CheckBox, LabeledInput } from "../../../shared/Input";
>>>>>>> 103609f... initial commit
import { Grid } from "../../../shared/Grid";
import { Text } from "../../../shared/Text";
import { Div } from "../../../shared/Div";
import { RadioInput } from "../../../shared/Input";
import { Label } from "../../../shared/Input";
<<<<<<< HEAD
import Media from "./Media";
import axios from "../../../axios";

const InspectionForm = () => {
  const [showNonComplianceTerms, setShowNonComplianceTerms] = useState(false);
  const [consentCopyProgree, setConsentCopyProgree] = useState(-1);
  const [inspectionForm, setInspectionForm] = useState({
    teamnames: "",
    finalrecommendation: "",
    compliancestatus: "compliance",
    watergeneration: "",
    waterdischarge: "",
    BOD: "",
    BODload: "",
    COD: "",
    CODload: "",
    othercharacterestics: "",
    nonInstallationofOCEMS: false,
    temperedOCEMS: false,
    dissentBypassArrangement: false,
    provision: false,
    defunctETP: false,
    ZLDnorms: false,
    standardExceedance: false,
    dilutionInETP: false,
    dissentWaterDischarge: false,
    unauthorizedDisposal: false,
    effluent: false,
    invalidCTO: false,
  });
  const onInputChange = (e) => {
    const {
      target: { name, type, checked, value },
    } = e;
    const fieldValue = type === "checkbox" ? checked : value;
    if (name === "compliancestatus") {
      if (fieldValue === "noncompliance") {
        setShowNonComplianceTerms(true);
      } else {
        setShowNonComplianceTerms(false);
        setInspectionForm((prevState) => ({
          ...prevState,
          compliancestatus: fieldValue,
          nonInstallationofOCEMS: false,
          temperedOCEMS: false,
          dissentBypassArrangement: false,
          provision: false,
          defunctETP: false,
          ZLDnorms: false,
          standardExceedance: false,
          dilutionInETP: false,
          dissentWaterDischarge: false,
          unauthorizedDisposal: false,
          effluent: false,
          invalidCTO: false,
        }));
        return;
      }
    }
    setInspectionForm((prevState) => ({
      ...prevState,
      [name]: fieldValue,
    }));
  };
  const onFileInputChange = (e) => {
    const formData = new FormData();
    formData.append("consentcopy", e.target.files[0], e.target.name);
    axios.post("/inspections/consent_copy", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: function (progressEvent) {
        var percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setConsentCopyProgree(percentCompleted);
      },
    });
  };
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <Form marginTop="40px" onSubmit={submit}>
=======

const InspectionForm = () => {
  const [complianceStatus, setComplianceStatus] = useState("compliance");
  const [showNonComplianceTerms, setShowNonComplianceTerms] = useState(false);
  const onComplianceStatusCheck = (e) => {
    setComplianceStatus(e.target.value);
    if (e.target.value === "noncompliance") {
      setShowNonComplianceTerms(true);
    } else {
      setShowNonComplianceTerms(false);
    }
  };
  return (
    <Form marginTop="40px">
>>>>>>> 103609f... initial commit
      <LabeledInput
        labelProps={{ label: "Memeber of inspection Team" }}
        inputProps={{
          name: "teamnames",
          id: "teamnames",
          type: "text",
<<<<<<< HEAD
          onChange: onInputChange,
          value: inspectionForm.teamnames,
=======
>>>>>>> 103609f... initial commit
          placeholder: "Team Names",
        }}
      />
      <LabeledInput
        marginTop="30px"
        labelProps={{ label: "Upload consent Copy" }}
        inputProps={{
<<<<<<< HEAD
          accept:
            "application/msword, application/vnd.ms-excel, application/pdf",
          name: "consentcopy",
          id: "consentcopy",
          type: "file",
          onChange: onFileInputChange,
        }}
      />
      {`${consentCopyProgree}%`}
=======
          name: "teamnames",
          id: "teamnames",
          type: "file",
          placeholder: "Team Names",
        }}
      />
>>>>>>> 103609f... initial commit
      <LabeledInput
        marginTop="30px"
        labelProps={{ label: "Upload inspection report" }}
        inputProps={{
<<<<<<< HEAD
          name: "inspectionreport",
          id: "inspectionreport",
=======
          name: "teamnames",
          id: "teamnames",
>>>>>>> 103609f... initial commit
          type: "file",
          placeholder: "Team Names",
        }}
      />
      <LabeledInput
        marginTop="30px"
        labelProps={{ label: "Final Recommendation" }}
        inputProps={{
          name: "finalrecommendation",
          id: "finalrecommendation",
<<<<<<< HEAD
          value: inspectionForm.finalrecommendation,
          type: "text",
          onChange: onInputChange,
=======
          type: "text",
>>>>>>> 103609f... initial commit
        }}
      />
      <Div marginTop="30px">
        <Label marginTop="30px">Compliance status as per discharge norms</Label>
      </Div>
      <Grid templateColumns="auto auto">
        <RadioInput
          marginTop="10px"
          labelProps={{ label: "Compliance" }}
          inputProps={{
            name: "compliancestatus",
            id: "compliance",
            value: "compliance",
<<<<<<< HEAD
            checked: inspectionForm.compliancestatus === "compliance",
            onChange: onInputChange,
=======
            checked: complianceStatus === "compliance",
            onChange: onComplianceStatusCheck,
>>>>>>> 103609f... initial commit
          }}
        />
        <RadioInput
          marginTop="10px"
          labelProps={{ label: "Non-Compliance" }}
          inputProps={{
            name: "compliancestatus",
            id: "noncompliance",
            value: "noncompliance",
<<<<<<< HEAD
            checked: inspectionForm.compliancestatus === "noncompliance",
            onChange: onInputChange,
=======
            checked: complianceStatus === "noncompliance",
            onChange: onComplianceStatusCheck,
>>>>>>> 103609f... initial commit
          }}
        />
      </Grid>
      <Grid templateColumns="auto auto">
        <LabeledInput
          marginTop="30px"
          labelProps={{ label: "Waste water generation" }}
          inputProps={{
            name: "watergeneration",
            id: "watergeneration",
<<<<<<< HEAD
            value: inspectionForm.watergeneration,
            type: "text",
            onChange: onInputChange,
=======
            type: "text",
>>>>>>> 103609f... initial commit
            maxWidth: "300px",
          }}
        />
        <LabeledInput
          marginTop="30px"
          labelProps={{ label: "Waste water discharge" }}
          inputProps={{
            name: "waterdischarge",
            id: "waterdischarge",
<<<<<<< HEAD
            value: inspectionForm.waterdischarge,
            type: "text",
            onChange: onInputChange,
=======
            type: "text",
>>>>>>> 103609f... initial commit
            maxWidth: "300px",
          }}
        />
      </Grid>
      <Grid templateColumns="auto auto">
        <LabeledInput
          marginTop="30px"
          labelProps={{ label: "BOD" }}
          inputProps={{
            name: "BOD",
            id: "BOD",
<<<<<<< HEAD
            value: inspectionForm.BOD,
            type: "text",
            onChange: onInputChange,
=======
            type: "text",
>>>>>>> 103609f... initial commit
            maxWidth: "300px",
          }}
        />
        <LabeledInput
          marginTop="30px"
          labelProps={{ label: "BOD Load" }}
          inputProps={{
            name: "BODload",
            id: "BODload",
<<<<<<< HEAD
            value: inspectionForm.BODload,
            type: "text",
            onChange: onInputChange,
=======
            type: "text",
>>>>>>> 103609f... initial commit
            maxWidth: "300px",
          }}
        />
      </Grid>
      <Grid templateColumns="auto auto">
        <LabeledInput
          marginTop="30px"
          labelProps={{ label: "COD" }}
          inputProps={{
            name: "COD",
            id: "COD",
<<<<<<< HEAD
            value: inspectionForm.COD,
            type: "text",
            onChange: onInputChange,
=======
            type: "text",
>>>>>>> 103609f... initial commit
            maxWidth: "300px",
          }}
        />
        <LabeledInput
          marginTop="30px"
          labelProps={{ label: "COD Load" }}
          inputProps={{
            name: "CODload",
            id: "CODload",
<<<<<<< HEAD
            value: inspectionForm.CODload,
            type: "text",
            onChange: onInputChange,
=======
            type: "text",
>>>>>>> 103609f... initial commit
            maxWidth: "300px",
          }}
        />
      </Grid>
      <LabeledInput
        marginTop="30px"
        labelProps={{ label: "Other characterestics" }}
        inputProps={{
<<<<<<< HEAD
          name: "othercharacterestics",
          value: inspectionForm.othercharacterestics,
          type: "text",
          onChange: onInputChange,
        }}
      />
      <Grid templateColumns="auto" hide={!showNonComplianceTerms}>
        <Div as="div" marginTop="20px">
          <Text as="strong">Conditions of Non-Compliance</Text>
        </Div>
=======
          name: "compliancestatus",
          type: "text",
        }}
      />
      <Div as="div" marginTop="20px">
        <Text as="strong">Conditions of Non-Compliance</Text>
      </Div>
      <Grid templateColumns="auto" hide={!showNonComplianceTerms}>
>>>>>>> 103609f... initial commit
        <CheckBox
          marginTop="10px"
          labelProps={{
            label: "Non-installation and non-connectivity of OCEMS",
          }}
          inputProps={{
<<<<<<< HEAD
            name: "nonInstallationofOCEMS",
            checked: inspectionForm.nonInstallationofOCEMS,
            onChange: onInputChange,
=======
            name: "noninstallationofOCEMS",
            id: "noninstallationofOCEMS",
            value: "noninstallationofOCEMS",
>>>>>>> 103609f... initial commit
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label: "OCEMS found disconnected/partial OCEMS/tampered.",
          }}
          inputProps={{
            id: "temperedOCEMS",
            name: "temperedOCEMS",
<<<<<<< HEAD
            checked: inspectionForm.temperedOCEMS,
            onChange: onInputChange,
=======
            value: "temperedOCEMS",
>>>>>>> 103609f... initial commit
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label:
              "More than consented outlet(s) and/or any bypass arrangement",
          }}
          inputProps={{
<<<<<<< HEAD
            id: "dissentBypassArrangement",
            name: "dissentBypassArrangement",
            checked: inspectionForm.dissentBypassArrangement,
            onChange: onInputChange,
=======
            id: "bypassarrangement",
            name: "bypassarrangement",
            value: "bypassarrangement",
>>>>>>> 103609f... initial commit
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label:
              "Provision for flow diversion through flexible pipelines in the ETP",
          }}
          inputProps={{
            id: "provision",
            name: "provision",
<<<<<<< HEAD
            checked: inspectionForm.provision,
            onChange: onInputChange,
=======
            value: "provision",
>>>>>>> 103609f... initial commit
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label:
              "Defunct/ non-operational ETP which could not be made operational during inspection",
          }}
          inputProps={{
            id: "defunctETP",
            name: "defunctETP",
<<<<<<< HEAD
            checked: inspectionForm.defunctETP,
            onChange: onInputChange,
=======
            value: "defunctETP",
>>>>>>> 103609f... initial commit
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label: "Non-compliance of ZLD norms (in case of ZLD units)",
          }}
          inputProps={{
            id: "ZLDnorms",
            name: "ZLDnorms",
<<<<<<< HEAD
            checked: inspectionForm.ZLDnorms,
            onChange: onInputChange,
=======
            value: "ZLDnorms",
>>>>>>> 103609f... initial commit
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
<<<<<<< HEAD
            label:
              "standardExceedance of the notified effluent discharge standards",
          }}
          inputProps={{
            id: "standardExceedance",
            name: "standardExceedance",
            checked: inspectionForm.standardExceedance,
            onChange: onInputChange,
=======
            label: "Exceedance of the notified effluent discharge standards",
          }}
          inputProps={{
            id: "exceedance",
            name: "exceedance",
            value: "exceedance",
>>>>>>> 103609f... initial commit
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label:
<<<<<<< HEAD
              "dilutionInETP or addition of fresh water at any stage of treatment in ETP.",
          }}
          inputProps={{
            id: "dilutionInETP",
            name: "dilutionInETP",
            checked: inspectionForm.dilutionInETP,
            onChange: onInputChange,
=======
              "Dilution or addition of fresh water at any stage of treatment in ETP.",
          }}
          inputProps={{
            id: "dilution",
            name: "dilution",
            value: "dilution",
>>>>>>> 103609f... initial commit
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label: "Waste water discharge beyond consented quantity.",
          }}
          inputProps={{
<<<<<<< HEAD
            id: "dissentWaterDischarge",
            name: "dissentWaterDischarge",
            checked: inspectionForm.dissentWaterDischarge,
            onChange: onInputChange,
=======
            id: "waterdischarge",
            name: "waterdischarge",
            value: "waterdischarge",
>>>>>>> 103609f... initial commit
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label:
              "Unauthorized disposal of Hazardous waste or inadequate Hazardous Waste storage capacity",
          }}
          inputProps={{
<<<<<<< HEAD
            id: "unauthorizedDisposal",
            name: "unauthorizedDisposal",
            checked: inspectionForm.unauthorizedDisposal,
            onChange: onInputChange,
=======
            id: "unauthorizeddisposal",
            name: "unauthorizeddisposal",
            value: "unauthorizeddisposal",
>>>>>>> 103609f... initial commit
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label:
              "Injection of treated or untreated effluent or both into ground water (reverse boring).",
          }}
          inputProps={{
            id: "effluent",
            name: "effluent",
<<<<<<< HEAD
            checked: inspectionForm.effluent,
            onChange: onInputChange,
=======
            value: "effluent",
>>>>>>> 103609f... initial commit
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label:
              "Invalid CTO, HW authorization (wherever applicable) & not applied for fresh/renewal.",
          }}
          inputProps={{
            id: "invalidCTO",
            name: "invalidCTO",
<<<<<<< HEAD
            checked: inspectionForm.invalidCTO,
            onChange: onInputChange,
          }}
        />
      </Grid>
      {/* <Media /> */}
      <FormButton marginTop="20px" />
=======
            value: "invalidCTO",
          }}
        />
      </Grid>
>>>>>>> 103609f... initial commit
    </Form>
  );
};

export default InspectionForm;
