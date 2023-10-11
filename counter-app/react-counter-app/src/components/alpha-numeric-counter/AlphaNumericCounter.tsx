import { Paper, Stack, Typography, Button, Divider } from "@mui/material"
import { incrementAlpha, decrementAlpha } from "../../store";
import { useDispatch } from "react-redux";
import { AlphaCounterValue } from "./AlphaCounterValue";

export const AlphaNumericCounter: React.FC = () => {

    const dispatch = useDispatch();

    return (
        <Paper sx={{padding: '32px', width: '30%', justifyContent: 'center'}} elevation={4}>
            <Stack direction='column' spacing={1}>
            <Typography variant="h6" sx={{flexGrow: 1, textAlign: 'center'}}>Alpha Numeric Counter</Typography>
            <Divider />
            <Stack direction='row' sx={{flexGrow: 1, alignItems: 'center', padding: '10px'}}>
                <Button variant='contained' onClick={() => dispatch(incrementAlpha())}>Increment</Button>
                <Button variant='contained' onClick={() => dispatch(decrementAlpha())}>Decrement</Button>
            </Stack>
            <Divider />
            <AlphaCounterValue />
            </Stack>
        </Paper>

    )
}