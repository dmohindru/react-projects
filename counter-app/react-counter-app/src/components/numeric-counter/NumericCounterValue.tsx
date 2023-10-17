import { useTypeSelector } from "../../hooks/useTypedSelector";
import { Typography } from "@mui/material";

export const NumericCounterValue: React.FC = () => {

    const count = useTypeSelector((state) => state.counter.value)

    return (
        <Typography variant="h1" sx={{flexGrow: 1, textAlign: 'center'}}>{count}</Typography>
    );
}