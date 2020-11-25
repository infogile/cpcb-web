import styled from "styled-components";

export const Grid = styled.div`
  display: ${(props) => (props.hide ? "none" : "grid")};
  grid-template-columns: ${(props) => props.templateColumns};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
`;
