import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: #ffffff;
  border: 1px solid #aaaaaa;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;
  height: ${(props) => (props.height ? props.height : "35px")};
  font-size: 16px;
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  max-width: ${(props) => props.maxWidth};
  width: ${(props) => (props.width ? props.width : "-webkit-fill-available")};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  padding: 5px 15px;
`;

export const Button = ({ primary, ...props }) => {
  return (
    <ButtonStyled
      width="160px "
      bg={primary ? "#00A8F3" : "white"}
      color={primary ? "white" : "#00A8F3"}
      {...props}
    />
  );
};
