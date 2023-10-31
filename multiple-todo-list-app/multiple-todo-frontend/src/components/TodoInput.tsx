import { Grid, TextField, Button, Paper } from'@mui/material';
import { useState, useEffect } from 'react';
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
                            onChange={e => setTodoText(e.target.value)}/>
                    </Grid>
                    <Grid item md={1}>
                        <Button 
                            variant='contained' 
                            color='primary'
                            disabled={addButtonState}
                            >Add</Button>
                    </Grid>
                </Grid>
            </Paper>
        
    )
}