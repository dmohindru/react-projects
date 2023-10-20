import { Grid, Paper } from '@mui/material';
import { GroceryItemProps, GroceryItem } from './GroceryItem';

const itemProps: GroceryItemProps[] = [
    {
        id: 1,
        itemName: 'Milk',
        quantity: 3,
        totalAmount: 5.56,
    },
    {
        id: 2,
        itemName: 'Bread',
        quantity: 1,
        totalAmount: 3.49,
    },
    {
        id: 1,
        itemName: 'Chips',
        quantity: 4,
        totalAmount: 10.56,
    }
]

export const GroceryList: React.FC = () => {
    return (

            <Paper sx={{width: '100%', p: 1}} elevation={1} >
            <Grid container spacing={0.5}>
                {
                    itemProps.map(item => <GroceryItem 
                        id={item.id} 
                        itemName={item.itemName}
                        quantity={item.quantity}
                        totalAmount={item.totalAmount} />)
                } 
            </Grid>
            </Paper>
    );
}