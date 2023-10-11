import { Paper, Stack, Typography, Button, Divider, Grid } from "@mui/material"
import { increment, decrement, reset, incrementByValue } from "../../store";
import { useDispatch } from "react-redux";
import { NumericCounterValue } from "./NumericCounterValue";

export const NumericCounter: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <Paper sx={{padding: '32px', width: '30%', justifyContent: 'center'}} elevation={4}>
            <Stack direction='column' spacing={1}>
                <Typography variant="h6" sx={{flexGrow: 1, textAlign: 'center'}}>Alpha Numeric Counter</Typography>
                <Divider />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Button variant='contained' onClick={() => dispatch(increment())}>Increment</Button>    
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant='contained' onClick={() => dispatch(decrement())}>Decrement</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant='contained' onClick={() => dispatch(reset())}>Reset</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant='contained' onClick={() => dispatch(incrementByValue(10))}>Increment by 10</Button>
                    </Grid>
                </Grid>
                <Divider />
                <NumericCounterValue />

            </Stack>
            

        </Paper>

    )
}