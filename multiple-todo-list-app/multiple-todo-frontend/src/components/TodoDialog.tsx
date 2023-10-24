import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react"
export interface TodoDialogProps {
    open: boolean,
    title: string,
    content: string
}

export const TodoDialog: React.FC<TodoDialogProps> = ({open, title, content}: TodoDialogProps) => {
    const [openState, setOpenState] = useState(open);

    const handleClickOk = () => {

    }

    const handleClose = () => {

    }

    return (
        <div>
            <Dialog open={openState} onClose={handleClose}>
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
                    <Button>Cancel</Button>
                </DialogContent>
            </Dialog>

        </div>
    )

}