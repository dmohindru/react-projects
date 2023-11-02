import { Paper, Grid, Typography, IconButton, Switch } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { useAppDispatch } from '../hooks/useHooks';
import { updateTodo } from '../store';

interface TodoItemProps {
    todoTitle: string;
    id: string;
    text: string;
    done: boolean;
    deleted: boolean;
    
}
export const TodoItem: React.FC<TodoItemProps> = ({todoTitle, id, text, done, deleted}: TodoItemProps) => {

    const dispatch = useAppDispatch();
    const handleDoneBtn = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateTodo({
            todoListTitle: todoTitle, 
            todo: {
                id,
                done: event.target.checked
            }
        }));
    };

    const handleDeleteBtn = () => {
        dispatch(updateTodo({
            todoListTitle: todoTitle, 
            todo: {
                id,
                deleted: true
            }
        }));
    };

    return (
        <Paper sx={{my: 1}}>
            <Grid container>
                <Grid item md={10}>
                    <Typography variant='h5' style={{textDecoration: done ? 'line-through' : 'none'}}>{text}</Typography>
                </Grid>
                <Grid item md={1}>
                    <Switch size="small" checked={done} onChange={handleDoneBtn} />
                </Grid>
                <Grid item md={1}>
                    <IconButton
                        aria-label='cancel'
                        color='error'
                        size='small'
                        onClick={() => handleDeleteBtn()}
                    ><CancelIcon /></IconButton>
                </Grid>
            </Grid>
        </Paper>
    )
}