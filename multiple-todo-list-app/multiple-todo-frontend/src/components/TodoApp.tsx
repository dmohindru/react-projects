import { Container, Typography } from '@mui/material';
import { TodoMenu } from './TodoMenu';
import { TodoTitleList } from './TodoTitleList';


export const TodoApp: React.FC = () => {


    return (
        <Container maxWidth='md'>
            <Typography variant='h4' sx={{flexGrow: 1, textAlign: 'center'}}>TODO App</Typography>
            <TodoTitleList />
            <TodoMenu />

        </Container>
    )
}