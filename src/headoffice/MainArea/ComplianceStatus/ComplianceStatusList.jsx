import React from "react";
import styled from "styled-components";


const Table = styled.table`
  border-spacing: 0px;
  margin-top:40px;
  width: 95%;
`;

const Th = styled.th`
  color: #353535;
  border-bottom: solid 1px #cccccc;
  border-left: solid 1px #cccccc;
  :first-child {
    border-left: ;
  }
`;

const Tr = styled.tr`
  color: ${(props) => props.Color};
  :nth-child(even) {
    background-color: #f2f2f2;
  }
  :hover {
    background: #dadada;
  }
`;

const Td = styled.td`
  color: #797979;
  padding: 20px 10px;
  font-size: ${(props) => props.fontSize};
  white-space: ${(props) => props.whiteSpace};
  text-align: center;
  border-left: solid 1px #cccccc;
  :first-child {
    border-left:;
  }
`;

export const ComplianceStatusList = () => {
  
  return (
    <div style={{ marginBottom: "100px", marginRight: "20px" }}>
      <h2>Compliance status for Ganga GPIs</h2>
      <Table key="ganga">
        <tbody>
          <tr>
            <Th >S. No.</Th>
            <Th>State</Th>
            <Th>Action Completed</Th>
            <Th>Complied</Th>
            <Th>Temporary Close</Th>
            <Th>Permanent Close</Th>
            <Th>Non Complied
              <Tr>
                <Td>Show Cause Notice</Td>
                <Td>Closer Direction</Td>
              </Tr>
            </Th>
            <Th>Revoke
              <Tr>
                <Td>SCN with Drawn</Td>
                <Td>Closure Revoke</Td>
              </Tr>
            </Th>
          </tr>
                <Tr>
                  <Td>1</Td>
                  <Td>Bihar</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                </Tr>
        </tbody>
      </Table>
      <h2>Compliance status for Yamuna GPIs</h2>
      <Table key="yamuna">
      <tbody>
          <tr>
            <Th >S. No.</Th>
            <Th>State</Th>
            <Th>Action Completed</Th>
            <Th>Complied</Th>
            <Th>Temporary Close</Th>
            <Th>Permanent Close</Th>
            <Th>Non Complied
              <Tr>
                <Td>Show Cause Notice</Td>
                <Td>Closer Direction</Td>
              </Tr>
            </Th>
            <Th>Revoke
              <Tr>
                <Td>SCN with Drawn</Td>
                <Td>Closure Revoke</Td>
              </Tr>
            </Th>
          </tr>
                <Tr>
                  <Td>1</Td>
                  <Td>Bihar</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                </Tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ComplianceStatusList;
