import { Container, Typography, Stack, Divider } from '@mui/material';
import { GroceryInput } from './GroceryInput';
import { GroceryList } from './GroceryList';
import { GroceryTotal } from './GroceryTotal';
export const GroceryTracker: React.FC = () => {
    return (
        <Container maxWidth='xs'>
            <Stack direction='column' alignItems='center' spacing={1}>
                <Typography variant='h4'>Grocery Tracker</Typography>
                <Divider />
                <GroceryInput />
                <GroceryTotal />
                <GroceryList />
            </Stack>
        </Container>
    )
}