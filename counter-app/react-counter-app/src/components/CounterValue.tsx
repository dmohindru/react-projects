import { useTypeSelector } from "../hooks/useTypedSelector";
export const CounterValue: React.FC = () => {

    const count = useTypeSelector((state) => state.counter.value)

    return (
        <h3>{count}</h3>
    );
}