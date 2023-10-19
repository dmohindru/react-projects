import { Stack, TextField, Button  } from '@mui/material'
export const GroceryInput: React.FC = () => {
    return (
        <Stack direction='row' justifyItems='center' sx={{backgroundColor: 'blue'}}>
            <TextField label='Item' variant='outlined' sx={{width: '40%'}} />
            <Button variant='contained'>+</Button>
            <TextField label='Quantity' disabled></TextField>
            <Button variant='contained'>-</Button>
            <TextField label='Price' disabled></TextField>
            <Button variant='contained'>Add</Button>
        </Stack>
        
    )
}