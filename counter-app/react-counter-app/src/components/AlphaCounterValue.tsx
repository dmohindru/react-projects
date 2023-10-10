import { useTypeSelector } from "../hooks/useTypedSelector"
export const AlphaCounterValue: React.FC = () => {
    const alphaCount = useTypeSelector((state) => state.alphaCounter.value)
    return (
        <div>
            {alphaCount}
        </div>
    )
}