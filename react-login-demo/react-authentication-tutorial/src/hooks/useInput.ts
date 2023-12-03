import useLocalStorage from "./useLocalStorage";

const useInput = (key: string, initValue: string): [value: string, reset: () => void, attObj: {value: string, onChange: (e:any) => void}] => {
    const [value, setValue] = useLocalStorage(key, initValue);

    const reset = () => setValue(initValue);

    const attributeObj = {
        value,
        // todo fix any return type here
        onChange: (e: any) => setValue(e.target.value)
    }

    return [value, reset, attributeObj];

}

export default useInput;