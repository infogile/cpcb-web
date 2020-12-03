import React from "react";
import styled from "styled-components";
import { Text } from "../../../shared/Text";
import InspectionForm from "./InspectionForm";

const InspectionReportStyled = styled.div`
  margin-top: 30px;
`;

const Report = styled.div`
  display: block;
  margin-bottom: 50px;
  margin-top: 22px;
  margin-left: 10px;
  padding: 10px 20px;
  max-width: 900px;
  background: #f6f6f6;
  box-shadow: 0px 4px 4px 0px #00000033;
  :first-child {
    margin-top: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  background: white;
  border-collapse: collapse;
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
`;

const Th = styled.th`
  text-align: right;
  border-right: 1px solid #c0c0c0;
  border-bottom: 1px solid #c0c0c0;
  border-top: 1px solid #c0c0c0;
  padding-right: 10px;
`;

const Td = styled.td`
  text-align: left;
  border-left: 1px solid #c0c0c0;
  border-bottom: 1px solid #c0c0c0;
  border-top: 1px solid #c0c0c0;
  padding-left: 10px;
`;

export const InspectionReport = ({ title }) => {
  return (
    <InspectionReportStyled>
      <Text as="h3" marginLeft="10px">
        Inspection Report
      </Text>
      <Report>
        <Text as="h4">Bajirao mastani slaughter house</Text>
        <Table>
          <tbody>
            <tr>
              <Th>Firstname</Th>
              <Td>Lastname</Td>
            </tr>
            <tr>
              <Th>Jill</Th>
              <Td>SmiTh</Td>
            </tr>
            <tr>
              <Th>Eve</Th>
              <Td>Jackson</Td>
            </tr>
          </tbody>
        </Table>
        <InspectionForm />
      </Report>
    </InspectionReportStyled>
  );
};

export default InspectionReport;
