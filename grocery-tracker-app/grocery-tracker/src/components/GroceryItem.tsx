import { Grid, Typography, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CancelIcon from '@mui/icons-material/Cancel';
import { useAppDispatch } from "../hooks/useHooks";
import { removeGroceryItem, updateGroceryItem, GroceryItemUpdateSlice } from "../store";

export interface GroceryItemProps {
    id: number
    itemName: string;
    quantity: number;
    totalAmount: number;

}
export const GroceryItem: React.FC<GroceryItemProps> = ({id, itemName, quantity, totalAmount}: GroceryItemProps) => {
    const dispatch = useAppDispatch();

    const incrementGroceryItem = (item: GroceryItemUpdateSlice) => {
        if (item.itemQuantity < 10) {
            item.itemQuantity++;
            dispatch(updateGroceryItem(item));
        }
    }

    const decrementGroceryItem = (item: GroceryItemUpdateSlice) => {
        if (item.itemQuantity > 1) {
            item.itemQuantity--;
            dispatch(updateGroceryItem(item));
        }
    }

    return (
        <>
            <Grid item xs={4}>
                <Typography variant="h6">{itemName}</Typography>
            </Grid>
            <Grid item xs={1}>
                <IconButton 
                    aria-label='increment' 
                    color='success' 
                    size='small'
                    onClick={() => incrementGroceryItem({
                        id: id,
                        itemQuantity: quantity
                    })}><AddIcon /></IconButton>
            </Grid>
            <Grid item xs={2}>
                <Typography variant='h6' textAlign='center'>{quantity}</Typography>
            </Grid>
            <Grid item xs={1}>
                <IconButton 
                    aria-label='decrement' 
                    color='success' 
                    size='small'
                    onClick={() => decrementGroceryItem({
                        id,
                        itemQuantity: quantity
                    })}><RemoveIcon /></IconButton>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='h6' textAlign='right'>{`$ ${totalAmount.toFixed(2)}`}</Typography>
            </Grid>
            <Grid item xs={1}>
                <IconButton 
                    aria-label='cancel' 
                    color='warning' 
                    size='small'
                    onClick={() => dispatch(removeGroceryItem(id))}><CancelIcon /></IconButton>
            </Grid>
        </>
    )
}