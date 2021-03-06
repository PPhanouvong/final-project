import React from 'react';
import './TypeWriter.css';
import Typing from 'react-typing-animation';


const TypeWriter = () => {
    return (
        <Typing startDelay={1000} hideCursor='true' speed={100}>
            <div>
                <span id='typing'> Welcome back </span>
                <Typing.Delay ms={5000} />  <Typing.Backspace count={50} />
                <span id='typing'> Your objective is to gather intel on the enemy. </span>
                <Typing.Reset count={2} delay={500000} />
            </div>
        </Typing>
    );
};

export default TypeWriter;