import { Grid, Typography } from "@mui/material";

export const GroceryTotal: React.FC = () => {
    return (
        <Grid container>
            <Grid item xs={4}>
                <Typography variant="h4">Total</Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h4" textAlign='right'>$100.00</Typography>
            </Grid>
        </Grid>
    )
}