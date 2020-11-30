import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  max-height: ${(props) => (props.hide ? "0px" : "1000px")};
  overflow: hidden;
  transition: max-height 0.5s;
  grid-template-columns: ${(props) => props.templateColumns};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
`;
