import { Grid, Typography, Button, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from "react";

export interface GroceryItemProps {
    id: number
    itemName: string;
    quantity: number;
    totalAmount: number;

}
export const GroceryItem: React.FC<GroceryItemProps> = ({id, itemName, quantity, totalAmount}: GroceryItemProps) => {
    return (
        <>
            <Grid item xs={4}>
                <Typography variant="h6">{itemName}</Typography>
            </Grid>
            <Grid item xs={1}>
                <IconButton aria-label='increment' color='success' size='small'><AddIcon /></IconButton>
            </Grid>
            <Grid item xs={2}>
                <Typography variant='h6' textAlign='center'>{quantity}</Typography>
            </Grid>
            <Grid item xs={1}>
                <IconButton aria-label='decrement' color='success' size='small'><RemoveIcon /></IconButton>
            </Grid>
            <Grid item xs={3}>
                <Typography variant='h6' textAlign='right'>{`$ ${totalAmount}`}</Typography>
            </Grid>
            <Grid item xs={1}>
                <IconButton aria-label='cancel' color='warning' size='small'><CancelIcon /></IconButton>
            </Grid>
        </>
    )
}