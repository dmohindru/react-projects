import { Container, Typography, Box, Stack } from '@mui/material';
import { GroceryInput } from './GroceryInput';
export const GroceryTracker: React.FC = () => {
    return (
        <Container maxWidth='xs' sx={{backgroundColor: 'red'}}>
            <Stack direction='column' alignItems='center'>
                <Typography variant='h4'>Grocery Tracker</Typography>
                <GroceryInput />
            </Stack>
        </Container>
    )
}