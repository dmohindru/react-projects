import { Typography, Stack } from '@mui/material';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

interface TodoComponentProps {
    title: string
}
export const TodoComponent: React.FC<TodoComponentProps> = ({title}) => {
    return (
        <Stack direction='column' margin={1} sx={{display: 'flex', flexGrow: 1}}>
            <Typography variant="h4" sx={{textAlign: 'center'}}>{title}</Typography>
            <TodoInput title={title} />
            <TodoList todoTitle={title} />
        </Stack>
           
        
    )
}