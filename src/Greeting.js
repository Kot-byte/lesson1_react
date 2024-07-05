import React from 'react';

const Greeting = () => {
    return <h1>Привет, Мир!</h1>
}

const GreetingNew = ({ name }) => {
    return <h1>Привет, {name}!</h1>
}

export default Greeting;
export { GreetingNew };
