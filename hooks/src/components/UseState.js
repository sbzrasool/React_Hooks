import React, { useState, useEffect } from 'react';

const UseState = () => {

    const [counter, setCounter] = useState(0);
    const [username, setUsername] = useState('');

    useEffect(() => {

        console.log("useEffect executed");

    },[counter,username]);

    return(
        <div>
            <p>Count: {counter}</p>
            <button onClick={ () => setCounter(counter+1 )}>Increment</button>
            <br />
            <br />

            Name{" "}
            <input 
                type="text"
                name="username"
                value={username}
                placeholder="Enter your name"
                autoComplete = "off"
                onChange={event => setUsername(event.target.value)}
            />
            <br />
            {username}
        </div>
    );
}


export default UseState;