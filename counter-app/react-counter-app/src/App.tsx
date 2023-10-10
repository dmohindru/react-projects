
import { AlphaCounterValue } from "./components/AlphaCounterValue";
import { Counter } from "./components/Counter";
import { CounterValue } from "./components/CounterValue";

const App: React.FC = () => {
  return (
      <div>
        <Counter />
        <CounterValue />
        <AlphaCounterValue />
      </div>
  )
}

export default App;
