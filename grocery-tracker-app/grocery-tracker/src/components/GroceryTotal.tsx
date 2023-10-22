import { Grid, Typography, Paper } from "@mui/material";
import { useTypeSelector } from "../hooks/useHooks";

export const GroceryTotal: React.FC = () => {
    const itemList = useTypeSelector((state) => state.groceryItems);
    return (
        <Paper sx={{p: 1, width: '100%'}} elevation={1} >
            <Grid container>
                <Grid item xs={4}>
                    <Typography variant="h4">Total</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h4" textAlign='right'>{`$ ${itemList.reduce(
                            (acc, item) => acc + (item.itemQuantity * item.unitPrice), 0)                        
                        }`}</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}