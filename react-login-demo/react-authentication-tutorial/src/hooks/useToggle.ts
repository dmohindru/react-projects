import useLocalStorage from "./useLocalStorage";

const useToggle = (key: string, initValue: any): [value: string, toggle: (value: any) => void] => {
    const [value, setValue] = useLocalStorage(key, initValue);

    const toggle = (value: any) => {
        if (typeof value === 'boolean') {
            setValue(value.toString());
        } else {

        }
        //setValue((prev: boolean) => (typeof value === 'boolean') ? value : !prev);
    }

    return [value, toggle];
}

export default useToggle;