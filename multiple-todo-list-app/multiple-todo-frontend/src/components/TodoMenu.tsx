import { SpeedDial, SpeedDialAction, SpeedDialIcon, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Button } from "@mui/material"
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useRef, useEffect } from "react";
export const TodoMenu: React.FC = () => {
    const dialogState = useRef(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        dialogState.current = !dialogOpen;
        console.log('inside useEffect' + dialogState.current);
    }, [dialogOpen])

    const handleAddTodoListClick = () => {
        console.log('clicked')
        setDialogOpen(!dialogOpen);
    }

    const handleDialogClose = () => {
        setDialogOpen(false);
    }

    return (
        <>
        <Dialog open={dialogState.current} onClose={() => handleDialogClose()}>
                <DialogTitle>Add Todo </DialogTitle>
                <DialogContent>
                    <DialogContentText>Add Todo content</DialogContentText>
                    <TextField 
                        autoFocus
                        margin='dense'
                        label='TODO List Name'
                        fullWidth
                        variant='standard'
                    />
                    <Button>Add</Button>
                    <Button onClick={() => handleDialogClose() }>Cancel</Button>
                </DialogContent>
            </Dialog>
        <SpeedDial
                ariaLabel='Navigation Speed Dial'
                sx={{position: 'absolute', bottom: 50, right: 50}}
                icon={<SpeedDialIcon openIcon={<EditIcon />} />}>
                    <SpeedDialAction icon={<AddBoxIcon />} tooltipTitle='New Todo list' tooltipOpen onClick={() => handleAddTodoListClick()}/>

            </SpeedDial>
        </>
    )
}