import { Container, Typography, Box } from '@mui/material';
import { GroceryInput } from './GroceryInput';
export const GroceryTracker: React.FC = () => {
    return (
        <Box maxWidth='sm' alignItems='center' justifyContent='center' display='flex'>
            <Typography variant='h4'>Grocery Tracker</Typography>
            <GroceryInput />
        </Box>
    )
}