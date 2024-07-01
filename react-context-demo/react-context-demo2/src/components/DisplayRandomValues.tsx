import {useContext} from "react";
import {Box} from "@mui/material";
import RandomValueComponent from "./RandomValueComponent";
import {RandomRepeatedServiceContext} from "../context/RandomRepeatedServiceContext";
import {RandomServiceContextProps} from "../context/RandomServiceContext";

const DisplayRandomValues: React.FC = () => {
    const {person, car, color, number} = useContext<RandomServiceContextProps>(RandomRepeatedServiceContext);

    return (
        <Box display="flex" flexDirection="column" justifyContent="center">
            <RandomValueComponent
                label="Random Person"
                stringValue={person}
            />
            <RandomValueComponent
                label="Random Car"
                stringValue={car}
            />
            <RandomValueComponent
                label="Random Number"
                numberValue={number}
            />
            <RandomValueComponent
                label="Random Color"
                stringValue={color}
            />
        </Box>
    );
};

export default DisplayRandomValues;
