import { Grid, Paper } from '@mui/material';
import { GroceryItem } from './GroceryItem';
import { useTypeSelector } from '../hooks/useHooks';

export const GroceryList: React.FC = () => {
    const itemList = useTypeSelector((state) => state.groceryItems);
    return (

            <Paper sx={{width: '100%', p: 1}} elevation={1} >
            <Grid container spacing={0.5}>
                {
                    itemList.map(item => <GroceryItem 
                        id={item.id} 
                        itemName={item.itemName}
                        quantity={item.itemQuantity}
                        totalAmount={item.itemQuantity * item.unitPrice}
                        key={item.id} />)
                } 
            </Grid>
            </Paper>
    );
}