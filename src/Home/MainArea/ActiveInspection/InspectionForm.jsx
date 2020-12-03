import React, { useState } from "react";
import { Form } from "../../../shared/Form";
import {
  CheckBox,
  FormButton,
  Input,
  LabeledInput,
} from "../../../shared/Input";
import { Grid } from "../../../shared/Grid";
import { Text } from "../../../shared/Text";
import { Div } from "../../../shared/Div";
import { RadioInput } from "../../../shared/Input";
import { Label } from "../../../shared/Input";
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
      <LabeledInput
        labelProps={{ label: "Memeber of inspection Team" }}
        inputProps={{
          name: "teamnames",
          id: "teamnames",
          type: "text",
          onChange: onInputChange,
          value: inspectionForm.teamnames,
          placeholder: "Team Names",
        }}
      />
      <LabeledInput
        marginTop="30px"
        labelProps={{ label: "Upload consent Copy" }}
        inputProps={{
          accept:
            "application/msword, application/vnd.ms-excel, application/pdf",
          name: "consentcopy",
          id: "consentcopy",
          type: "file",
          onChange: onFileInputChange,
        }}
      />
      {`${consentCopyProgree}%`}
      <LabeledInput
        marginTop="30px"
        labelProps={{ label: "Upload inspection report" }}
        inputProps={{
          name: "inspectionreport",
          id: "inspectionreport",
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
          value: inspectionForm.finalrecommendation,
          type: "text",
          onChange: onInputChange,
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
            checked: inspectionForm.compliancestatus === "compliance",
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
            checked: inspectionForm.compliancestatus === "noncompliance",
            onChange: onInputChange,
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
            value: inspectionForm.watergeneration,
            type: "text",
            onChange: onInputChange,
            maxWidth: "300px",
          }}
        />
        <LabeledInput
          marginTop="30px"
          labelProps={{ label: "Waste water discharge" }}
          inputProps={{
            name: "waterdischarge",
            id: "waterdischarge",
            value: inspectionForm.waterdischarge,
            type: "text",
            onChange: onInputChange,
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
            value: inspectionForm.BOD,
            type: "text",
            onChange: onInputChange,
            maxWidth: "300px",
          }}
        />
        <LabeledInput
          marginTop="30px"
          labelProps={{ label: "BOD Load" }}
          inputProps={{
            name: "BODload",
            id: "BODload",
            value: inspectionForm.BODload,
            type: "text",
            onChange: onInputChange,
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
            value: inspectionForm.COD,
            type: "text",
            onChange: onInputChange,
            maxWidth: "300px",
          }}
        />
        <LabeledInput
          marginTop="30px"
          labelProps={{ label: "COD Load" }}
          inputProps={{
            name: "CODload",
            id: "CODload",
            value: inspectionForm.CODload,
            type: "text",
            onChange: onInputChange,
            maxWidth: "300px",
          }}
        />
      </Grid>
      <LabeledInput
        marginTop="30px"
        labelProps={{ label: "Other characterestics" }}
        inputProps={{
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
        <CheckBox
          marginTop="10px"
          labelProps={{
            label: "Non-installation and non-connectivity of OCEMS",
          }}
          inputProps={{
            name: "nonInstallationofOCEMS",
            checked: inspectionForm.nonInstallationofOCEMS,
            onChange: onInputChange,
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
            checked: inspectionForm.temperedOCEMS,
            onChange: onInputChange,
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label:
              "More than consented outlet(s) and/or any bypass arrangement",
          }}
          inputProps={{
            id: "dissentBypassArrangement",
            name: "dissentBypassArrangement",
            checked: inspectionForm.dissentBypassArrangement,
            onChange: onInputChange,
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
            checked: inspectionForm.provision,
            onChange: onInputChange,
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
            checked: inspectionForm.defunctETP,
            onChange: onInputChange,
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
            checked: inspectionForm.ZLDnorms,
            onChange: onInputChange,
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label:
              "standardExceedance of the notified effluent discharge standards",
          }}
          inputProps={{
            id: "standardExceedance",
            name: "standardExceedance",
            checked: inspectionForm.standardExceedance,
            onChange: onInputChange,
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label:
              "dilutionInETP or addition of fresh water at any stage of treatment in ETP.",
          }}
          inputProps={{
            id: "dilutionInETP",
            name: "dilutionInETP",
            checked: inspectionForm.dilutionInETP,
            onChange: onInputChange,
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label: "Waste water discharge beyond consented quantity.",
          }}
          inputProps={{
            id: "dissentWaterDischarge",
            name: "dissentWaterDischarge",
            checked: inspectionForm.dissentWaterDischarge,
            onChange: onInputChange,
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label:
              "Unauthorized disposal of Hazardous waste or inadequate Hazardous Waste storage capacity",
          }}
          inputProps={{
            id: "unauthorizedDisposal",
            name: "unauthorizedDisposal",
            checked: inspectionForm.unauthorizedDisposal,
            onChange: onInputChange,
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
            checked: inspectionForm.effluent,
            onChange: onInputChange,
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
            checked: inspectionForm.invalidCTO,
            onChange: onInputChange,
          }}
        />
      </Grid>
      {/* <Media /> */}
      <FormButton marginTop="20px" />
    </Form>
  );
};

export default InspectionForm;
