import ReactDOM from 'react-dom/client';
import { TodoApp } from './components/TodoApp';
import { Provider } from 'react-redux';
import { store } from './store';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);
root.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>
    );
