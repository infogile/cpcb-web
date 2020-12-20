import styled from "styled-components";

export const Text = styled.span`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => (props.color ? props.color : "black")};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
`;
