import React from "react";
import { Box, Typography, Card } from "@mui/material";
import { useEffect, useState } from "react";
import "../Styles/App.css";

import { CardStyles, ImageStyles, ScreenStyles, TextStyles } from "../Styles/HomeStyles.js";
import ImageFlipper from "./Components/ImageFlipper.js";
import Data from "../Data/Home.json";

const importImages = (data) => {
  Object.values(data).map((entry) => ({
    fineName: entry.fileName,
    src: entry.src,
    backText: entry.backText,
  }));
};
const HomePage = ({}) => {
  const [Images, setImages] = useState([]);
  useEffect(() => {
        const imported = importImages(Data);
        setImages(imported);
  }, []);
  console.log(Images)
  console.log(Data)
  return (
    <Box sx={ScreenStyles}>
      <ImageFlipper
        src={Data[1]["fileName"]}
        altText={Data[1]["altText"]}
        backText={Data[1]["backText"]}
        imageStyles={ImageStyles}
        textStyles={TextStyles}
      />
    </Box>
  );
};

export default HomePage;
