<<<<<<< HEAD
import React, { useEffect } from "react";
import styled from "styled-components";
import { Text } from "../../../shared/Text";
import { useHistory } from "react-router-dom";
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { getFieldReport } from "../../../redux/services/";
=======
import React from "react";
import styled from "styled-components";
import { Text } from "../../../shared/Text";
>>>>>>> 103609f... initial commit

const FieldReportStyled = styled.div`
  margin-top: 30px;
`;

const Report = styled.div`
  display: block;
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
<<<<<<< HEAD
  padding-top: 10px;
  padding-bottom: 10px;
=======
>>>>>>> 103609f... initial commit
`;

const Td = styled.td`
  text-align: left;
  border-left: 1px solid #c0c0c0;
  border-bottom: 1px solid #c0c0c0;
  border-top: 1px solid #c0c0c0;
  padding-left: 10px;
`;

<<<<<<< HEAD
export const FieldReport = () => {
  const history = useHistory();
  const { data, isLoading } = useSelector((state) => state.fieldReportReducers);
  useEffect(() => {
    store.dispatch(getFieldReport("5f928c3e5147573a1a2d26bc"));
  }, []);
  console.log(data);
  if (isLoading) {
    return "loading...";
  }
=======
export const FieldReport = ({ title }) => {
>>>>>>> 103609f... initial commit
  return (
    <FieldReportStyled>
      <Text as="h3" marginLeft="10px">
        Field Report
      </Text>
      <Report>
<<<<<<< HEAD
        <Text as="h4">{data.name}</Text>
        <Table>
          <tbody>
            <tr>
              <Th>Unit Code</Th>
              <Td>{data.code}</Td>
            </tr>
            <tr>
              <Th>Unit Sector</Th>
              <Td>{data.sector}</Td>
=======
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
>>>>>>> 103609f... initial commit
            </tr>
            <tr>
              <Th>Eve</Th>
              <Td>Jackson</Td>
            </tr>
          </tbody>
        </Table>
      </Report>
    </FieldReportStyled>
  );
};

export default FieldReport;
