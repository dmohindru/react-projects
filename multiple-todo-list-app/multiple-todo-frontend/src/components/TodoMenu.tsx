import { SpeedDial, SpeedDialAction, SpeedDialIcon, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Button } from "@mui/material"
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from "react";
export const TodoMenu: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [saveBtnState, setSaveBtnState] = useState(true);
    const [todoListName, setTodoListName] = useState('');

    useEffect(() => {
        if (todoListName.trim()) {
            setSaveBtnState(false);
        } else {
            setSaveBtnState(true);
        }

    }, [todoListName])


    const handleAddTodoListClick = () => {
        setOpen(true);
    }

    const handleDialogClose = () => {
        setOpen(false);
    }

    const handleDialogSave = () => {
        console.log('Entered value: ', todoListName);
        setOpen(false);
        setTodoListName('');
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoListName(e.target.value);
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && todoListName.trim()) {
            handleDialogSave();
        }
    }

    return (
        <>
        <Dialog open={open} onClose={handleDialogClose}>
                <DialogTitle>New TODO List Name</DialogTitle>
                <DialogContent>
                    <TextField 
                        autoFocus
                        margin='dense'
                        label='Name'
                        name='todoListName'
                        fullWidth
                        variant='standard'
                        value={todoListName}
                        onKeyPress={handleKeyPress}
                        onChange={handleInputChange}
                    />
                    <Button disabled={saveBtnState} onClick={handleDialogSave}>Save</Button>
                    {/* <Button onClick={() => handleDialogClose() }>Cancel</Button> */}
                </DialogContent>
            </Dialog>
        <SpeedDial
                ariaLabel='Navigation Speed Dial'
                sx={{position: 'absolute', bottom: 50, right: 50}}
                icon={<SpeedDialIcon openIcon={<EditIcon />} />}>
                    <SpeedDialAction icon={<AddBoxIcon />} tooltipTitle='New List' tooltipOpen onClick={handleAddTodoListClick}/>

            </SpeedDial>
        </>
    )
}