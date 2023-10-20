import { TextField, Button, Grid, IconButton, Paper } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

export const GroceryInput: React.FC = () => {
    const [quantity, setQuantity] = useState(0);
    const [itemName, setItemName] = useState('');
    const [addButtonState, setAddButtonState] = useState(true);
    const [itemPrice, setItemPrice] = useState(0.0);
    
    const incrementQuantity = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
            if (itemName && itemPrice) {
                setAddButtonState(false);
            }
        }
    }

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            if (quantity - 1 === 0) {
                setAddButtonState(true);
            }
        }
    }

    const updateItemName = (value: string) => {
        const trimmedValue = value.trim();
        setItemName(trimmedValue);
        if (trimmedValue && quantity > 0 && itemPrice > 0) {
                setAddButtonState(false);
        } else {
            setAddButtonState(true);
        }
    }

    const updateItemPrice = (value: string) => {
        const trimmedValue = value.trim();
        if (trimmedValue)
            setItemPrice(+trimmedValue);
        if (quantity > 0 && itemName && +trimmedValue > 0) {
            setAddButtonState(false);
        } else {
            setAddButtonState(true);
        }
    }
    return (
        <Paper elevation={1} sx={{p: 1, width: '100%'}}>
            <Grid container spacing={1} alignItems='center'>
                <Grid item xs={3}>
                    <TextField label='Item' variant='outlined' size='small' onChange={e => updateItemName(e.target.value)}/>
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
                        onChange={e => updateItemPrice(e.target.value)}
                    ></TextField>
                </Grid>
                <Grid item xs={2}>
                    <Button 
                        variant='contained' 
                        size='small'
                        disabled={addButtonState}
                        >
                            Add
                        </Button>
                </Grid>
            </Grid>
        </Paper>
        
        
    )
}