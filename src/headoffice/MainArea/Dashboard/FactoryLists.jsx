import React, { useEffect } from "react";
import styled from "styled-components";
import store from "../../../redux/store";
import { Loading } from "../../../shared/Loading";
import { Text } from "../../../shared/Text";
import { useSelector } from "react-redux";
import { getFactorylist } from "../../../redux/services/";
import { Link, useParams } from "react-router-dom";

const FactoryListsStyled = styled.div`
  margin-top: 30px;
  margin-left: 40px;
  margin-bottom: 30px;
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr 1fr 1fr;
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
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr 1fr 1fr;
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

const Sector = styled.div`
  text-align: center;
  margin: 10px 0px;
`;

const Assign = styled.div`
  text-align: center;
  margin: 10px 0px;
`;

const FieldReport = styled.div`
  text-align: center;
  margin: 10px 0px;
  color: red;
`;

const InspectionReport = styled.div`
  text-align: center;
  margin: 10px 0px;
  color: red;
`;

const Action = styled.div`
  text-align: center;
  margin: 10px 0px;
  color: red;
`;

const ReportLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: #00a8f3;
  font-weight: 600;
  padding: 10px 0px;
`;

const List = styled.div`
  display: block;
  margin-top: 22px;
  margin-left: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  max-width: 1528px;
  background: #f6f6f6;
  :first-child {
    margin-top: 10px;
  }
`;

export const FactoryLists = () => {

  const params = useParams();  

  const { isLoading, factorylist } = useSelector((state) => state.factoryReducers);
    useEffect(() => {
        store.dispatch(getFactorylist(params.status,params.river, params.state));
    }, []);
    if (isLoading) {
        return <Loading />;
    }
    return (
      <FactoryListsStyled >
        <Text as="h3" marginLeft="10px">
         Factories
        </Text>
        <List>
          <ListHeader>
            <ListItemHeader>Unit code</ListItemHeader>
            <ListItemHeader>Unitname</ListItemHeader>
            <ListItemHeader>Sector</ListItemHeader>
            <ListItemHeader>Assign-to</ListItemHeader>
            <ListItemHeader>Field report</ListItemHeader>
            <ListItemHeader>Inspection report</ListItemHeader>
            <ListItemHeader>Action</ListItemHeader>
          </ListHeader>
          {factorylist.map(({ id, unitcode, unitname, sector, assignto, status }) => (
            <ListItem key = {id} >
              <UnitCode>{unitcode}</UnitCode>
              <UnitName>{unitname}</UnitName>
              <Sector>{sector}</Sector>
              <Assign>{assignto}</Assign>
              <FieldReport>
              {status === 0 && "Pending"}
              {status > 0 && (
                  <ReportLink target="_blank" to={`/headoffice/dashboard/${params.status}/${params.river}/field_report/${id}`} >
                    View Field Report
                  </ReportLink>
              )} 
              </FieldReport>
              <InspectionReport>
              {(status === 1 || status === 0) && "Pending"}
              {status >= 2 && (
                <ReportLink to={`/headoffice/dashboard/${params.status}/${params.river}/inspection_report/${id}`} target="_blank">
                    View Report
                </ReportLink>
              )}
              </InspectionReport>
              <Action>
              {(status === 1 || status === 0 || status === 2) && "Pending"}
              {status >= 3 && (
                <ReportLink to={`/headoffice/dashboard/${params.status}/${params.river}/view_action/${id}`}>
                    View Action
                </ReportLink>
              )}
              </Action>
            </ListItem>
          ))}
        </List>
      </FactoryListsStyled>
    );
  };

  export default FactoryLists;