import { Stack } from '@mui/material';
import { TodoItem } from './TodoItem';
import { useTypeSelector } from '../hooks/useHooks';

interface TodoListProps {
    todoTitle: string;
}
export const TodoList: React.FC<TodoListProps> = ({todoTitle}) => {
    const todoList = useTypeSelector((state) => state.todo[todoTitle]);
    return (
        
            <Stack>
                {todoList && todoList
                    .filter(item => !item.deleted)
                    .map(item => <TodoItem key={item.id} todoTitle={todoTitle} id={item.id || ''} text={item.todoText} done={item.done} deleted={item.deleted} /> )}
            </Stack>
        
    )
}