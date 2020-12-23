import ReactLoading from "react-loading";
import styled from "styled-components";

const StyledLoading = styled(ReactLoading)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Loading = () => {
  return <StyledLoading type="spin" color="#123" />;
};
