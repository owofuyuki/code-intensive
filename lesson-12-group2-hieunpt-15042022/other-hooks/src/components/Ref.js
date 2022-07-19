import { useRef, useState } from 'react';

// Cách React xử lý là render lại components

const Ref = () => {
    const inputRef = useRef(null);

    let count = 0;
    const [countState, setCountState] = useState(0);
    const countRef = useRef(0);

    console.log("count = ", count);
    console.log("countState = ", countState);
    console.log("countRef = ", countRef.current);

    const handleFocus = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };

    const increaseCount = () => {
        count++;
        console.log(count);
    };

    const increaseCountState = () => setCountState(countState + 1);

    const increaseCountRef = ()=> {
        countRef.current++;
        console.log(countRef.current);
    };

    return (
        <div style={{margin: 32}}>
            <input type="text" ref={inputRef} />
            <button style={{marginLeft: 8}} onClick={handleFocus}>Focus</button>

            <div style={{marginTop: 16}}>
                <button onClick={increaseCount}>Increase count</button>
                <button style={{marginLeft: 8}} onClick={increaseCountState}>Increase countState</button>
                <button style={{marginLeft: 8}} onClick={increaseCountRef}>Increase countRef</button>
                <div style={{marginTop: 16}}>Count: {count}</div>
                <div>CountState: {countState}</div>
                <div>CountRef: {countRef.current}</div>
            </div>
        </div>
    );
};

export default Ref;