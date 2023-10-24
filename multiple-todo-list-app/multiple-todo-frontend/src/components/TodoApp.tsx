import { Container, Typography, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import { TodoDialog } from './TodoDialog';
import { useState } from 'react';

const clicked = () => {
    console.log('I got clicked');
}


export const TodoApp: React.FC = () => {
    const [dialogState, setDialogState] = useState(false);

    return (
        <Container maxWidth='md' sx={{backgroundColor: 'grey'}}>
            <Typography variant='h4'>Multiple TODO List App</Typography>


            <TodoDialog 
                open={dialogState}
                title='Add TODO'
                content='Add new TODO list name'
            />
            <SpeedDial
                ariaLabel='Navigation Speed Dial'
                sx={{position: 'absolute', bottom: 50, right: 50}}
                icon={<SpeedDialIcon openIcon={<EditIcon />} />}>
                    <SpeedDialAction icon={<AddBoxIcon />} tooltipTitle='New Todo list' tooltipOpen onClick={() => clicked()}/>

            </SpeedDial>

        </Container>
    )
}