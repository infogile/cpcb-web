import React, { useState } from "react";
import { Form } from "../../../shared/Form";
import { CheckBox, LabeledInput } from "../../../shared/Input";
import { Grid } from "../../../shared/Grid";
import { Text } from "../../../shared/Text";
import { Div } from "../../../shared/Div";
import { RadioInput } from "../../../shared/Input";
import { Label } from "../../../shared/Input";

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
      <LabeledInput
        labelProps={{ label: "Memeber of inspection Team" }}
        inputProps={{
          name: "teamnames",
          id: "teamnames",
          type: "text",
          placeholder: "Team Names",
        }}
      />
      <LabeledInput
        marginTop="30px"
        labelProps={{ label: "Upload consent Copy" }}
        inputProps={{
          name: "teamnames",
          id: "teamnames",
          type: "file",
          placeholder: "Team Names",
        }}
      />
      <LabeledInput
        marginTop="30px"
        labelProps={{ label: "Upload inspection report" }}
        inputProps={{
          name: "teamnames",
          id: "teamnames",
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
          type: "text",
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
            checked: complianceStatus === "compliance",
            onChange: onComplianceStatusCheck,
          }}
        />
        <RadioInput
          marginTop="10px"
          labelProps={{ label: "Non-Compliance" }}
          inputProps={{
            name: "compliancestatus",
            id: "noncompliance",
            value: "noncompliance",
            checked: complianceStatus === "noncompliance",
            onChange: onComplianceStatusCheck,
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
            type: "text",
            maxWidth: "300px",
          }}
        />
        <LabeledInput
          marginTop="30px"
          labelProps={{ label: "Waste water discharge" }}
          inputProps={{
            name: "waterdischarge",
            id: "waterdischarge",
            type: "text",
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
            type: "text",
            maxWidth: "300px",
          }}
        />
        <LabeledInput
          marginTop="30px"
          labelProps={{ label: "BOD Load" }}
          inputProps={{
            name: "BODload",
            id: "BODload",
            type: "text",
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
            type: "text",
            maxWidth: "300px",
          }}
        />
        <LabeledInput
          marginTop="30px"
          labelProps={{ label: "COD Load" }}
          inputProps={{
            name: "CODload",
            id: "CODload",
            type: "text",
            maxWidth: "300px",
          }}
        />
      </Grid>
      <LabeledInput
        marginTop="30px"
        labelProps={{ label: "Other characterestics" }}
        inputProps={{
          name: "compliancestatus",
          type: "text",
        }}
      />
      <Div as="div" marginTop="20px">
        <Text as="strong">Conditions of Non-Compliance</Text>
      </Div>
      <Grid templateColumns="auto" hide={!showNonComplianceTerms}>
        <CheckBox
          marginTop="10px"
          labelProps={{
            label: "Non-installation and non-connectivity of OCEMS",
          }}
          inputProps={{
            name: "noninstallationofOCEMS",
            id: "noninstallationofOCEMS",
            value: "noninstallationofOCEMS",
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
            value: "temperedOCEMS",
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label:
              "More than consented outlet(s) and/or any bypass arrangement",
          }}
          inputProps={{
            id: "bypassarrangement",
            name: "bypassarrangement",
            value: "bypassarrangement",
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
            value: "provision",
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
            value: "defunctETP",
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
            value: "ZLDnorms",
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label: "Exceedance of the notified effluent discharge standards",
          }}
          inputProps={{
            id: "exceedance",
            name: "exceedance",
            value: "exceedance",
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label:
              "Dilution or addition of fresh water at any stage of treatment in ETP.",
          }}
          inputProps={{
            id: "dilution",
            name: "dilution",
            value: "dilution",
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label: "Waste water discharge beyond consented quantity.",
          }}
          inputProps={{
            id: "waterdischarge",
            name: "waterdischarge",
            value: "waterdischarge",
          }}
        />
        <CheckBox
          marginTop="10px"
          labelProps={{
            label:
              "Unauthorized disposal of Hazardous waste or inadequate Hazardous Waste storage capacity",
          }}
          inputProps={{
            id: "unauthorizeddisposal",
            name: "unauthorizeddisposal",
            value: "unauthorizeddisposal",
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
            value: "effluent",
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
            value: "invalidCTO",
          }}
        />
      </Grid>
    </Form>
  );
};

export default InspectionForm;
