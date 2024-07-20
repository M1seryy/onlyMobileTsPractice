import React, { FC } from "react";
import "./index.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
type Props = {};

interface taskData {
  id: number;
  title: string;
  complete: boolean;
  persantage: number;
}

interface data {
  data: taskData;
}

const Progress: FC<data> = ({ data }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress variant="determinate" value={data.persantage} />
      <span className="progPersantage">{data.persantage}</span>
    </Box>
  );
};

export default Progress;
