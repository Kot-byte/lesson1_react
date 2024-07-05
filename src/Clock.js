import React, { useState, useEffect } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={styles.clock}>
        <h2>Текущее время : {time.toLocaleTimeString()}</h2>
        </div>
    );
};

const styles = {
    clock: {
        padding: '20px',
        margin: '20px',
        backgroundColor: '#f0f0f0',
borderRadius: '5px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }
}

export default Clock;