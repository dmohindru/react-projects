import ReactDOM from 'react-dom/client';
import { GroceryTracker } from './components/GroceryTracker';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);
root.render(<GroceryTracker />);
