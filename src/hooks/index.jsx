import { useState } from "react";


export function useField(intialValue){

    const [value, setValue] = useState(intialValue);

    const onChange = (event) => {
        setValue(event.target.value);
    }

    return {
        value,
        onChange,
    }
}