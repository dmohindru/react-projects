import { Paper, Stack, Typography, Button, Divider, ButtonGroup } from "@mui/material"
import { incrementAlpha, decrementAlpha, resetAlpha, alphaIncrementByValue } from "../../store";
import { useDispatch } from "react-redux";
import { AlphaCounterValue } from "./AlphaCounterValue";

export const AlphaNumericCounter: React.FC = () => {

    const dispatch = useDispatch();

    return (
        <Paper sx={{padding: '32px', width: '30%', justifyContent: 'center', margin: '20px'}} elevation={4}>
            <Stack direction='column' spacing={1}>
            <Typography variant="h6" sx={{flexGrow: 1, textAlign: 'center'}}>Alpha Numeric Counter</Typography>
            <Divider />
            <ButtonGroup orientation="vertical" variant="contained">
                <Button variant='contained' onClick={() => dispatch(incrementAlpha())}>Increment</Button>
                <Button variant='contained' onClick={() => dispatch(decrementAlpha())}>Decrement</Button>
                <Button variant='contained' onClick={() => dispatch(resetAlpha())}>Reset</Button>
                <Button variant='contained' onClick={() => dispatch(alphaIncrementByValue(2))}>Increment By 2</Button>
            </ButtonGroup>
            <Divider />
            <AlphaCounterValue />
            </Stack>
        </Paper>

    )
}