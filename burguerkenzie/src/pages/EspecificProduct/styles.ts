import styled from "styled-components";

export const ProductImageDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;

  background-color: var(--whitefixed);

  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxSx = {
  p: 6,
  borderRadius: 1,
  maxHeight: 400,
  backgroundColor: "white",
};

export const FontSx = { fontFamily: "Inter" };

export const ImageSx = {
  backgroundColor: "white",
  objectFit: "contain",
  width: "100%",
  height: "100%",
  padding: 2,
  maxHeight: 350,
};
