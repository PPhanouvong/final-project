import React from 'react';
import './TypeWriter.css';
import Typing from 'react-typing-animation';


const TypeWriter = (props) => {
    return (
        <Typing startDelay={1000} hideCursor='true' speed={100}>
            <div>
                <span id='typing'> Welcome back </span>
                <Typing.Delay ms={1000} />  <Typing.Backspace count={50} />
                <span id='typing'> </span>
                <Typing.Reset count={2} delay={5000} />
            </div>
        </Typing>
    );
};

export default TypeWriter;