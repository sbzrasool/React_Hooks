import React, { useState, useRef } from 'react';

const UseRef = () => {

    const [ username, setUsername] = useState('');
    
    const usernameRef = useRef();

    const handleOnSubmit = event => {
        event.preventDefault();

        setUsername(usernameRef.current.value);

        usernameRef.current.value = '';
    };

    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <input 
                    type="text"
                    name="username"
                    placeholder="Enter your name"
                    autoComplete="off"
                    ref={usernameRef}
                />
                <button>Submit</button>
            </form>
            <p>{username}</p>
        </div>
    );
};

export default UseRef;