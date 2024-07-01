import {Button, Box, Typography} from "@mui/material";
import {useContext} from "react";
import {RandomRepeatedServiceContext, RandomServiceContextProps} from "../context/RandomServiceContextProvider";

interface SetRandomValuesProp {
    title: string
}

const SetRandomValues: React.FC<SetRandomValuesProp> = ({title}) => {
    const {updateValues} = useContext<RandomServiceContextProps>(RandomRepeatedServiceContext);
    const dispatchSetRandomObjSet = () => {
        updateValues();
        console.log('updated value');
    };

    return (
        <Box display="flex" flexDirection="column">
            <Typography variant="h5">{title}</Typography>
            <Button variant="contained" onClick={dispatchSetRandomObjSet}>
                Set Random Values
            </Button>
        </Box>
    );
};

export default SetRandomValues;
