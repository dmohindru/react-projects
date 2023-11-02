import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Button } from "@mui/material";
import { useState } from "react"
export interface TodoDialogProps {
    open: boolean,
    title: string,
    content: string
}

export const TodoDialog: React.FC<TodoDialogProps> = ({open, title, content}: TodoDialogProps) => {
    const [openState, setOpenState] = useState(open);

    const handleDialogClose = () => {
        setOpenState(false);
    }

    const handleCloseButtonClick = () => {
        setOpenState(false);
    }

    return (
        <div>
            <Dialog open={openState} onClose={() => handleDialogClose()}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{content}</DialogContentText>
                    <TextField 
                        autoFocus
                        margin='dense'
                        label='TODO List Name'
                        fullWidth
                        variant='standard'
                    />
                    <Button>Add</Button>
                    <Button onClick={() => handleCloseButtonClick()}>Cancel</Button>
                </DialogContent>
            </Dialog>

        </div>
    )

}