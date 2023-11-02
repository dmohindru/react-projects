import { Grid, TextField, Button, Paper } from'@mui/material';
import { useState, useEffect } from 'react';
import { addTodo, Todo } from '../store';
import { useAppDispatch } from '../hooks/useHooks';

interface TodoInputProps {
    title: string
}
export const TodoInput: React.FC<TodoInputProps> = ({title}: TodoInputProps) => {
    const [addButtonState, setAddButtonState] = useState(true);
    const [todoText, setTodoText] = useState('');

    useEffect(() => {
        if (todoText.trim())
            setAddButtonState(false);
        else
            setAddButtonState(true);

    }, [todoText, addButtonState]);

    const dispatch = useAppDispatch();

    const dispatchTodoItem = () => {
        const todoItem: Todo = {
            todoText: todoText,
            done: false,
            deleted: false
        };
        dispatch(addTodo({
            todoListTitle: title,
            todo: todoItem
        }));

        setTodoText('');
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            dispatchTodoItem();
        }
    }

    return (
        
            <Paper elevation={1}>
                <Grid container padding={2}>
                    <Grid item md={11}>
                        <TextField 
                            label='Todo Text'
                            variant='outlined'
                            value={todoText}
                            size='small' 
                            sx={{display: 'flex', flexGrow: 1, mx: 1}}
                            onChange={e => setTodoText(e.target.value)}
                            onKeyPress={handleKeyPress}
                            />
                    </Grid>
                    <Grid item md={1}>
                        <Button 
                            variant='contained' 
                            color='primary'
                            disabled={addButtonState}
                            onClick = {() => dispatchTodoItem()}
                            >Add</Button>
                    </Grid>
                </Grid>
            </Paper>
        
    )
}