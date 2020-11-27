<<<<<<< HEAD
import React, { useEffect } from "react";
import styled from "styled-components";
import { Text } from "../../../shared/Text";
import { Link } from "react-router-dom";
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { getActiveInspections } from "../../../redux/services/";
=======
import React from "react";
import styled from "styled-components";
import { Text } from "../../../shared/Text";
import { Link } from "react-router-dom";
>>>>>>> 103609f... initial commit

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr;
  background: white;
  box-shadow: 0px 2px 5px 0px #17171747;
  margin-top: 22px;
  margin-left: 20px;
  margin-right: 20px;
  :first-child {
    margin-top: 0px;
  }
`;

const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr;
  margin-top: 22px;
  margin-left: 20px;
  margin-right: 20px;
  :first-child {
    margin-top: 0px;
  }
`;

const ListItemHeader = styled.div`
  text-align: center;
  margin: 10px 0px;
`;

const UnitCode = styled.div`
  text-align: center;
  margin: 10px 0px;
`;

const UnitName = styled.div`
  text-align: center;
  margin: 10px 0px;
`;

const ReportLink = styled(Link)`
  text-align: center;
  padding: 10px 0px;
`;

const List = styled.div`
  display: block;
  margin-top: 22px;
  margin-left: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  max-width: 1000px;
  background: #f6f6f6;
  :first-child {
    margin-top: 10px;
  }
`;

export const InspectionsList = ({ title }) => {
<<<<<<< HEAD
  const { data, isLoading } = useSelector(
    (state) => state.activeInspectionReducers
  );
  useEffect(() => {
    store.dispatch(getActiveInspections());
  }, []);

  if (isLoading) {
    return "loading...";
  }
=======
  const reportIds = [123, 234, 53, 23, 42];
>>>>>>> 103609f... initial commit
  return (
    <>
      <Text as="h3" marginLeft="10px">
        Active Inspections
      </Text>
      <List>
        <ListHeader>
          <ListItemHeader>Unit code</ListItemHeader>
          <ListItemHeader>Unitname</ListItemHeader>
          <ListItemHeader>Field reports</ListItemHeader>
          <ListItemHeader>Inspection reports</ListItemHeader>
        </ListHeader>
<<<<<<< HEAD
        {data.map(({ id, code, name }) => (
          <ListItem key={id}>
            <UnitCode>{code}</UnitCode>
            <UnitName>{name}</UnitName>
=======
        {reportIds.map((id) => (
          <ListItem key={id}>
            <UnitCode>234</UnitCode>
            <UnitName>Bajirao mastani slaughter house</UnitName>
>>>>>>> 103609f... initial commit
            <ReportLink to={`/home/active_inspections/field_report/${id}`}>
              View Report
            </ReportLink>
            <ReportLink
              to={`/home/active_inspections/upload_inspection_report/${id}`}
            >
              Upload Report
            </ReportLink>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default InspectionsList;
