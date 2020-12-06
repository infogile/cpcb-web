import styled from "styled-components";
import { DownloadIcon, ImageIcon } from "../icons";
import { Grid } from "./Grid";
import { Text } from "./Text";

const Image = styled.div`
  // display: flex;
  position: relative;
  width: 100px;
  height: 100px;
  margin: 15px 30px;
`;

const StyledImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  //   margin: 0 25%;
  width: 100%;
  height: 100%;
  opacity: 0;
  :hover {
    opacity: 0.8;
  }
`;

export const ImageGrid = ({ images }) => {
  return (
    <StyledImageGrid>
      {images.map((image, index) => (
        <Grid textAlign="center">
          <Image key={index}>
            <ImageIcon size="100px" />
            <Overlay>
              <a href={image} target="_blank" rel="noreferrer" download>
                <DownloadIcon color="white" />
              </a>
            </Overlay>
          </Image>
          <Text>{`Image ${index + 1}`}</Text>
        </Grid>
      ))}
    </StyledImageGrid>
  );
};
