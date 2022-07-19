import { useState, useEffect, useMemo, useCallback } from 'react';

const UseMemo = () => {
    const [items, setItems] = useState([1, 2, 3]);
    const [visible, setVisible] = useState(true);
    const [user, setUser] = useState(null);
    
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

    const getNewUser = useCallback((id) => {
        fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((resJson) => {
            setUser(resJson.results[0]);
        });
    }, []);

    useEffect(() => {
        getNewUser(1);
    }, [getNewUser]);

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
            <button onClick={getNewUser} style={{marginBottom: 16}}>Refresh</button>
            {user && (
                <div>
                    <img src={user.picture.medium} alt="" />
                    <p>{user.name.first} {user.name.last}</p>
                </div>
            )}
        </div>
    );
};

export default UseMemo;