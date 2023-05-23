import { BoxSx, ImageSx } from "../styles";
import { Box, Skeleton } from "@mui/material";

interface IProps {
  src: string;
}

export const ProductImage = ({ src }: IProps) => {
  return (
    <Box sx={BoxSx}>
      {src ? (
        <Box component="img" src={src} alt="productImage" sx={ImageSx} />
      ) : (
        <Skeleton sx={ImageSx} />
      )}
    </Box>
  );
};
