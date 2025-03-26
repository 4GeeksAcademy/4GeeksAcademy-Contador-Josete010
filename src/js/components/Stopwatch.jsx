import React, {useState, useEffect, useRef} from 'react';

function Stopwatch() {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const interval = useRef(null);
    const startTime = useRef(0);

   

    useEffect(() => {
        if(isRunning) {
            interval.current = setInterval(() => {
                setTime(Date.now() - startTime.current);
            }, 10);
    }

    return () => {
        clearInterval(interval.current);
    }

}, [isRunning]);

    function start(){
        setIsRunning(true);
        startTime.current = Date.now() - time;
    }

    function stop(){
        setIsRunning(false)
    }

    function reset(){
        setTime(0);
        setIsRunning(false);
    }
    
    function formartTime() {
        let hours = Math.floor(time / (1000 * 60 * 60));
        let minutes = Math.floor(time / (1000 * 60) % 60);
        let seconds = Math.floor(time / (1000) % 60);
        let milliseconds = Math.floor((time % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }
   
    return (
        <div className="Stopwatch">
            <div className="display">{formartTime()}</div>
            <div className="buttons">
                <button onClick={start} className="start-time">Start</button>
                <button onClick={stop} className="stop-time">Stop</button>
                <button onClick={reset} className="reset-time">Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch;