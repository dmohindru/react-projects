import { TextField, Button, Grid, IconButton, Paper } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState, useEffect } from 'react';
import { addGroceryItem, GroceryItemSlice } from '../store';
import { useAppDispatch } from '../hooks/useHooks';


const getRandomInt = (min: number, max: number) => {
    const minVal = Math.ceil(min);
    const maxVal = Math.ceil(max);
    return Math.floor(Math.random() * (maxVal - minVal)) + minVal;
}

export const GroceryInput: React.FC = () => {
    const [quantity, setQuantity] = useState(1);
    const [itemName, setItemName] = useState('');
    const [addButtonState, setAddButtonState] = useState(true);
    const [itemPrice, setItemPrice] = useState<number | null>(null);

    useEffect(() => {
        if (quantity > 0 && itemName && itemPrice) {
            setAddButtonState(false);
        } else {
            setAddButtonState(true);
        }

    }, [quantity, itemName, itemPrice])

    const dispatch = useAppDispatch();
    
    const incrementQuantity = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const getGroceryItem = (): GroceryItemSlice => {

        return {
            id: getRandomInt(1, 1000),
            itemName: itemName,
            itemQuantity: quantity,
            unitPrice: itemPrice || 0.0
        }    
    }

    const dispatchGroceryItem = () => {
        const groceryItem = getGroceryItem()
        dispatch(addGroceryItem(groceryItem));
        setItemName('');
        setQuantity(1);
        setItemPrice(null);
        
    }


    return (
        <Paper elevation={1} sx={{p: 1, width: '100%'}}>
            <Grid container spacing={1} alignItems='center'>
                <Grid item xs={3}>
                    <TextField 
                        label='Item' 
                        variant='outlined' 
                        size='small' 
                        onChange={e => setItemName(e.target.value)} 
                        value={itemName}/>
                </Grid>
                <Grid item xs={1}>
                    <IconButton aria-label='increment' color='success' size='small' onClick={() => incrementQuantity()}><AddIcon /></IconButton>
                </Grid>
                <Grid item xs={2}>
                    <TextField 
                        label='Qty' 
                        disabled 
                        size='small'
                        type='number'
                        value={quantity}
                    ></TextField>    
                </Grid>
                <Grid item xs={1}>
                    <IconButton aria-label='decrement' color='success' size='small' onClick={() => decrementQuantity()}><RemoveIcon /></IconButton>    
                </Grid>
                <Grid item xs={3}>
                    <TextField 
                        label='Price' 
                        size='small'
                        type='number'
                        onChange={e => setItemPrice(+(e.target.value))}
                        value={itemPrice || ''}
                    ></TextField>
                </Grid>
                <Grid item xs={2}>
                    <Button 
                        variant='contained' 
                        size='small'
                        disabled={addButtonState}
                        onClick={() => dispatchGroceryItem()}
                        >
                            Add
                        </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}