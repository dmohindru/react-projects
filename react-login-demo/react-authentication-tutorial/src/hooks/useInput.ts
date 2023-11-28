import { useState } from "react";

const useInput = (initValue: string) => {
    const [value, setValue] = useState(initValue);

    const reset = () => setValue(initValue);

    const attributeObj = {
        value,
        // todo fix any return type here
        onChange: (e: any) => setValue(e.target.value)
    }

    return [value, reset, attributeObj];

}

export default useInput;