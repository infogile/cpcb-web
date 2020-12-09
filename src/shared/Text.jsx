import styled from "styled-components";

export const Text = styled.span`
  color: ${(props) => (props.color ? props.color : "black")};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;
