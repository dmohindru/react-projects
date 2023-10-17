import { Paper, Stack, Typography, Button, Divider, ButtonGroup } from "@mui/material"
import { increment, decrement, reset, incrementByValue, incrementNumericAsync } from "../../store";
import { NumericCounterValue } from "./NumericCounterValue";
import { useAppDispatch } from "../../hooks/useTypedSelector";

export const NumericCounter: React.FC = () => {
    const dispatch = useAppDispatch(); 
    return (
        <Paper sx={{padding: '32px', width: '30%', justifyContent: 'center', margin: '20px'}} elevation={4}>
            <Stack direction='column' spacing={1}>
                <Typography variant="h6" sx={{flexGrow: 1, textAlign: 'center'}}>Numeric Counter</Typography>
                <Divider />
                <ButtonGroup orientation="vertical" variant="contained">
                    <Button variant='contained' onClick={() => dispatch(increment())}>Increment</Button>
                    <Button variant='contained' onClick={() => dispatch(decrement())}>Decrement</Button>
                    <Button variant='contained' onClick={() => dispatch(reset())}>Reset</Button>
                    <Button variant='contained' onClick={() => dispatch(incrementByValue(10))}>Increment by 10</Button>
                    <Button variant='contained' onClick={() => dispatch(incrementNumericAsync({amount: 5, delay: 1000}))}>Increment Async +5</Button>
                </ButtonGroup>
                <Divider />
                <NumericCounterValue />

            </Stack>
            

        </Paper>

    )
}