import { useState } from 'react';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    
    // if - else function
    // let button = null;
    // if (isLoggedIn) button = <button onClick={() => {setIsLoggedIn(false)}}>Log out</button>;
    // else button = <button onClick={() => {setIsLoggedIn(true)}}>Log in</button>

    // ternary operator
    // let button = isLoggedIn ? <button onClick={() => {setIsLoggedIn(false)}}>Log out</button> : <button onClick={() => {setIsLoggedIn(true)}}>Log in</button>;

    return (
        <div>
            <button onClick={() => {setIsLoggedIn(!isLoggedIn)}}>{isLoggedIn ? "Log out" : "Log in"}</button>
            {isLoggedIn && <p>Welcome</p>}
        </div>
    );
};

export default Login;