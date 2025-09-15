import { useEffect } from 'react';
import { useState } from 'react';

const UseEffectTest = () => {
    const [ToggleOne, setToggleOne] = useState(false);
    const [ToggleTwo, setToggleTwo] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('UseEffect1 Ran');
    }, [ToggleOne]);
    useEffect(() => {
        console.log('UseEffect2 Ran');
        if (ToggleTwo)
            console.log('toggleTwo slice of state is true so this code runs');
    }, [ToggleTwo]);

    useEffect(() => {
        const myInterval = setInterval(() => {
            console.log(`UseEffect3 with interval number ${count} is running`);
        }, 1000);

        return () => {
            console.log(
                `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
            );
            clearInterval(myInterval);
        };
    }, [count]);

    return (
        <div>
            {console.log('rendered or re-rendered')}
            <h1>UseEffectTest Component</h1>
            <button onClick={() => setToggleOne(!ToggleOne)}>ToggleOne</button>
            <button onClick={() => setToggleTwo(!ToggleTwo)}>ToggleTwo</button>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </div>
    );
};

export default UseEffectTest;