import { useState, useEffect, useMemo } from 'react';

const UseMemo = () => {
    const [items, setItems] = useState([1, 2, 3]);
    const [visible, setVisible] = useState(true);
    
    const doubleItems = items.map((item) => item * 2);

    const memoizedDoubleItems = useMemo(() => {
        return items.map((item) => item * 2);
    }, [items]);

    const addToItems = () => {
        setItems([ ...items, 1]);
    }

    const changeVisible = () => {
        setVisible(!visible);
    }

    useEffect(() => {
        console.log("doubleItems changed");
    }, [doubleItems]);

    useEffect(() => {
        console.log("memoizedDoubleItems changed");
    }, [memoizedDoubleItems]);

    return (
        <div style={{margin: 32}}>
            <button onClick={addToItems}>Push</button>
            <button onClick={changeVisible} style={{marginLeft: 8}}>Change visible</button>
            { visible && (
                <div>
                    <p>{items.join(", ")}</p>
                    <p>{memoizedDoubleItems.join(", ")}</p>
                </div>
            )}
        </div>
    );
};

export default UseMemo;