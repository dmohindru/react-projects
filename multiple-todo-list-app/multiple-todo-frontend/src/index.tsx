import ReactDOM from 'react-dom/client';
import { TodoApp } from './components/TodoApp';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);
root.render(<TodoApp />);
