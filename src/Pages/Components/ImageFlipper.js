import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { ImageStyles } from "../../Styles/HomeStyles";

export default function ImageFlipper({
  src,
  altText,
  backText,
  imageStyles,
  textStyles,
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box
      onClick={() => setFlipped((prev) => !prev)}
      sx={{
        ...ImageStyles,
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s ease",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <Box
          component="img"
          src={src}
          alt={altText}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backfaceVisibility: "hidden",
            borderRadius: 2,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            p: 2,
            bgcolor: "background.paper",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: 2,
            border: "2px solid",
            borderColor: "black", // or any color you like
          }}
        >
          <Typography variant="body2" sx={textStyles}>
            {backText}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
