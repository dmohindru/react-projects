import {Button} from "@mui/material";
import {useContext} from "react";
import {RandomRepeatedServiceContext} from "../context/RandomRepeatedServiceContext";
import {RandomServiceContextProps} from "../context/RandomServiceContext";

const SetRandomValues: React.FC = () => {
    const {updateValues} = useContext<RandomServiceContextProps>(RandomRepeatedServiceContext);
    const dispatchSetRandomObjSet = () => {
        updateValues();
        console.log('updated value');
    };

    return (
        <>
            <Button variant="contained" onClick={dispatchSetRandomObjSet}>
                Set Random Values
            </Button>
        </>
    );
};

export default SetRandomValues;
