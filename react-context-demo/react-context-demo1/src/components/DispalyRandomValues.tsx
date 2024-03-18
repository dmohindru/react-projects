import { useContext } from "react";
import { Box } from "@mui/material";
import RandomValueComponent from "./RandomValueComponent";
import { RandomServiceContext } from "../context/RandomServiceContext";
const DisplayRandomValues: React.FC = () => {
  const randomServiceObj = useContext(RandomServiceContext);

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <RandomValueComponent
        label="Random Person"
        stringValue={randomServiceObj?.personName}
      />
      <RandomValueComponent
        label="Random Car"
        stringValue={randomServiceObj?.car}
      />
      <RandomValueComponent
        label="Random Number"
        numberValue={randomServiceObj?.randomNumber}
      />
      <RandomValueComponent
        label="Random Color"
        stringValue={randomServiceObj?.color}
      />
    </Box>
  );
};

export default DisplayRandomValues;
