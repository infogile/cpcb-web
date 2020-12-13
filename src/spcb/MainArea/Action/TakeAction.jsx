import "../../../assets/css/tech.css";
import "../../../assets/css/state.css"
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
import { submitActionTakenform } from "../../../redux/services";
import { Grid } from "../../../shared/Grid";
import {
  CheckBox,
  FormButton,
  Input,
  LabeledInput,
} from "../../../shared/Input";
import { getFieldReport } from "../../../redux/services/";
import { useParams } from "react-router";


const TakeActionStyled = styled(Link)`
  text-align: center;
  padding: 10px 0px;
`;

const TakeAction = () => {
    const [showNonComplianceTerms, setShowNonComplianceTerms] = useState(false);
    const [validationWaring, setValidationWarning] = useState("");
    const [formSuccess, setFormSuccess] = useState(false);
    const [formFailure, setFormFailure] = useState(false);
    const [isloading, setIsloading] = useState(false);
    const params = useParams();


    const { data, isLoading } = useSelector((state) => state.fieldReportReducers);
    useEffect(() => {
        const id = params.id;
        store.dispatch(getFieldReport(id));
    }, []);


    const [inspectionForm, setInspectionForm] = useState({
      finalrecommendation: "",
      compliancestatus: "compliance",
      files: {},
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
          }));
          return;
        }
      }
      setInspectionForm((prevState) => ({
        ...prevState,
        [name]: fieldValue,
      }));
    };

    const onUploadComplete = (name, fileLocation) => {
      setInspectionForm((prevState) => ({
        ...prevState,
        files: { ...prevState.files, [name]: fileLocation },
      }));
    };
    
    const onRemoveFile = (name) => {
      setInspectionForm((prevState) => ({
        ...prevState,
        files: { ...prevState.files, [name]: undefined },
      }));
    };


    const submit = (e) => {
      e.preventDefault();
      if (
        inspectionForm.compliancestatus === "noncompliance"
      ) {
        return;
      }
      if (
        !inspectionForm.files.consentcopy ||
        !inspectionForm.files.inspectionreport
      ) {
        setValidationWarning(
          "*Please upload Consent Copy and Inspection Report to continue."
        );
      } else {
        setIsloading(true);
        store
          .dispatch(submitActionTakenform(params.id, inspectionForm))
          .then((res) => {
            setIsloading(false);
            if (res.status === 200) {
              setFormSuccess(true);
            } else {
              setFormFailure(true);
            }
          });
      }
    };

    if (isLoading) {
        return "loading...";
    }

    if (isloading) {
      return "loading...";
    }
    if (formSuccess) {
      return "Inspection form Submitted Successfully.";
    }
    if (formFailure) {
      return "Inpection form was not submitted because of some error.";
    }

    

    return (
    <Form
        marginTop="40px"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
      <div class="container" style={{marginBottom:"100px", marginRight:"10px"}}>
        <Text style={{ fontSize: "30px", marginLeft: "0px",fontFamily:"Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif" }} marginLeft="60px" >
            <strong>Details of On Going Third Party Inspection</strong>
        </Text>
            <table id="state">
                <tr>
                    <td>1</td>
                    <td>
                        <table id="state">
                            <tr>
                                <td>Name and Address of the industry</td>
                                <td>{data.name}</td>
                            </tr>
                            <tr>
                                <td>Longitude</td>
                                {data.fields.map(({title, value})=>{
                                    if(title==="Longitude"){
                                        return (
                                            <td>{value}</td>
                                        )
                                }})}
                            </tr>
                            <tr>
                                <td>Latitude</td>
                                {data.fields.map(({title, value})=>{
                                    if(title==="Latitude"){
                                        return (
                                            <td>{value}</td>
                                        )
                                }})}
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>
                        <table id="state">
                            <tr>
                                <td>Name of the contact person with</td>
                                <td>NA</td>
                            </tr>
                            <tr>
                                <td>Team Members</td>
                                <td>{data.teamNames}</td>
                            </tr>
                            <tr>
                                <td>Telephone</td>
                                <td>NA</td>
                            </tr>
                            <tr>
                                <td>E-mail ID</td>
                                <td>NA</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>
                        <table id="state">
                            <tr>
                                <td>Upload Consent Copy</td>
                                <td>
                                    <TakeActionReport
                                        onUploadComplete={onUploadComplete}
                                        onRemoveFile={onRemoveFile}
                                        name="consentcopy"
                                        label="*Upload Consent Copy"
                                        id={data.id}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Upload Inspection Report</td>
                                <td>
                                    <TakeActionReport
                                        onUploadComplete={onUploadComplete}
                                        onRemoveFile={onRemoveFile}
                                        name="inspectionreport"
                                        label="*Upload Inspection Report"
                                        id={data.id}
                                    />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>
                        <table id="state">
                            <tr>
                                <td>Date of inspection and monitoring</td>
                                {data.fields.map(({title, value})=>{
                                    if(title==="Date of Inspection"){
                                        return (
                                            <td>{value}</td>
                                        )
                                }})}
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>
                        <table id="state">
                            <tr>
                                <td>Final Recommendation</td>
                                <td>{data.finalRecommendation}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>
                        <table id="state">
                            <tr>
                                <td>Compliance Status</td>
                                <td>{data.complianceStatus}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <br />
            <div class="container">
                <Text style={{ fontSize: "30px", marginLeft: "-10px" ,fontFamily:"Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif" }} marginLeft="60px" >
                    <strong>Action Taken By SPCB</strong>
                </Text> 
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
            </div>
        </div>
        <Text color="#ec3737" as="div" marginTop="10px">
            {validationWaring}
        </Text>
        <FormButton
            marginTop="20px"
            title="Please Check Above All Conditions Of Non-compliance To Submit Form"
            onClick={submit}
            disable={
                inspectionForm.compliancestatus === "noncompliance"
            }
        />
    </Form>
    
    );
};

export default TakeAction;
