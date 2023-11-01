import { Stack } from '@mui/material';
import { Todo } from '../store';
import { TodoItem } from './TodoItem';
const todoList: Todo[] = [
    {
        id: 'random_id_1',
        todoText: 'some todo text',
        done: false,
        deleted: false
    },
    {
        id: 'random_id_2',
        todoText: 'some todo text 1',
        done: true,
        deleted: false
    },
    {
        id: 'random_id_3',
        todoText: 'some todo text 2',
        done: false,
        deleted: false
    }

]
export const TodoList: React.FC = () => {
    return (
        
            <Stack>
                {todoList
                    .filter(item => !item.deleted)
                    .map(item => <TodoItem key={item.id} id={item.id || ''} text={item.todoText} done={item.done} deleted={item.deleted} /> )}
            </Stack>
        
    )
}