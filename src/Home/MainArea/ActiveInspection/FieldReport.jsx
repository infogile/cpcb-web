import React, { useEffect } from "react";
import styled from "styled-components";
import { Loading } from "../../../shared/Loading";
import { Text } from "../../../shared/Text";
import store from "../../../redux/store";
import { useSelector } from "react-redux";
import { getFieldReport } from "../../../redux/services/";
import { useParams } from "react-router";
import { ImageGrid } from "../../../shared/ImageGrid";

const FieldReportStyled = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Report = styled.div`
  display: block;
  margin-top: 22px;
  margin-left: 10px;
  padding: 20px 20px;
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
  width: 50%;
  border-right: 1px solid #c0c0c0;
  border-bottom: 1px solid #c0c0c0;
  border-top: 1px solid #c0c0c0;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Td = styled.td`
  text-align: left;
  width: 50%;
  border-left: 1px solid #c0c0c0;
  border-bottom: 1px solid #c0c0c0;
  border-top: 1px solid #c0c0c0;
  padding-left: 10px;
`;

export const FieldReport = () => {
  const { data, isLoading } = useSelector((state) => state.fieldReportReducers);
  const params = useParams();

  console.log(params)

  // window.localStorage.setItem('localLoader', 'false');
  
  useEffect(() => {
    let id = params.id;
    store.dispatch(getFieldReport(id));
    console.log("after store dispatch in field report");
  }, [params.id]);
  
  if (isLoading) {
    return <Loading />;
  }
  if (!data) {
    return <Text as="h4">No Data Available for given Inspection</Text>
  }
  return (
    <FieldReportStyled>
      {console.log("this is the dataaaaaaaaaaaaaaa : ", data)}
      <Text as="h3" marginLeft="10px">
        Field Report
      </Text>
      <Report>
        <Text as="h4">{data.name}</Text>
        <Table>
          <tbody>
            {data.fields &&
              data.fields.map((field) => {
                return (
                  <tr key={field.id}>
                    <Th>{field.title}</Th>
                    <Td>{field.value || "-"}</Td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        {data.images && (
          <>
            <Text as="h4">Images</Text>
            <ImageGrid images={data.images} />
          </>
        )}
      </Report>
    </FieldReportStyled>
  );
};

export default FieldReport;
