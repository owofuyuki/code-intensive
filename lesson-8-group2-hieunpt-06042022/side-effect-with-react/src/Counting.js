import { useState, useEffect } from 'react';

const Counting = () => {
    const [count, setCount] = useState(2);

    useEffect(() => {
        document.title = `You have clicked ${count} times!`;
    });

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => { setCount(count + 1); }}>Increase</button>
        </div>
    );
};

export default Counting;