import { Typography, Grid } from "@mui/material";

export const GroceryList: React.FC = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={3}>
                    <Typography variant="h4" textAlign='left'>List</Typography>        
                </Grid>
            </Grid>
            
        </>
    )
}