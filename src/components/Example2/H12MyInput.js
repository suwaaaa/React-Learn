import {useState, useCallback} from "react";

const useMyInput = (init) => {
    let [value, setValue] = useState(init);
    let onChange = useCallback( (event) => {
        setValue(event.currentTarget.value);
    }, []);

    return {
        value,
        onChange
    };
}

export default useMyInput
