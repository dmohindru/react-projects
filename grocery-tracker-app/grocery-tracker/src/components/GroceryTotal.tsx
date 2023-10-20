import { Grid, Typography, Paper } from "@mui/material";

export const GroceryTotal: React.FC = () => {
    return (
        <Paper sx={{p: 1, width: '100%'}} elevation={1} >
            <Grid container>
                <Grid item xs={4}>
                    <Typography variant="h4">Total</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h4" textAlign='right'>$100.00</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}