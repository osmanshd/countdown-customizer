import React, { useState, useEffect, useContext} from "react";
import '../styles.css';
import { TextCustomizerContext } from "./TextCustomizerContext";

const CountdownTimer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [targetDate, setTargetDate] = useState("1 March 2025");
    const [currentDate, setCurrentDate] = useState(targetDate);
    const [countdownStarted, setCountdownStarted] = useState(false);
    const {fontSize, fontColor} = useContext(TextCustomizerContext);
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({x: 430, y: 260});
    
    useEffect(() => {
        if (countdownStarted) {
            const countdownInterval = setInterval(() => {
                // calculate total time
                const eventDate = new Date(targetDate).getTime();
                const currentDate = new Date().getTime();
                let total_miliseconds = (eventDate - currentDate);

                // check if countdown is complete
                if (total_miliseconds > 0) {
                    // current total time in minutes, hours, and days
                    let total_seconds = parseInt(Math.floor(total_miliseconds / 1000));
                    let total_mins = parseInt(Math.floor(total_seconds / 60));
                    let total_hours = parseInt(Math.floor(total_mins / 60));
                    let total_days = parseInt(Math.floor(total_hours / 24));

                    // decrement in repeating order: 60, 59, ..., 0, 60, ...
                    setSeconds(formatTime(parseInt(total_seconds % 60)));
                    setMinutes(formatTime(parseInt(total_mins % 60)));
                    setHours(formatTime(parseInt(total_hours % 24)));
                    setDays(formatTime(total_days));
                } else {
                    total_miliseconds = 0;
                    clearInterval(countdownInterval);
                    alert("COUNTDOWN COMPLETE!");
                }
                
            }, 1000); // update every 1000 ms = 1 s

            return () => clearInterval(countdownInterval);
        }   
    }, [currentDate, countdownStarted]);

    function formatTime(time) {
        if (time < 10)
            return `0${time}`;
        return time;
    };

    // set target date from input
    const onChangeDateHandler = (event) => {
        setTargetDate(event.target.value);
    };

    // start countdown
    const onClickHandler = () => {
        setCurrentDate(targetDate);
        setCountdownStarted(true);
    };

    // start dragging
    const onMouseDown = (event) => {
        setIsDragging(true);
        setPosition({
            ...position,
            startX: event.clientX - position.x,
            startY: event.clientY - position.y
        });
    };

    // update position when user drags
    const onMouseMove = (event) => {
        if (isDragging) {
            setPosition({
                ...position,
                x: event.clientX - position.startX,
                y: event.clientY - position.startY
            });
        }
    };

    // stop dragging
    const onMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className="timer-container" style={{ fontSize: fontSize, color: fontColor, 
            left: `${position.x}px`, top: `${position.y}px` }} onMouseDown={onMouseDown} 
            onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
            <div className="timer-values" style={{ fontSize: fontSize, color: fontColor }}>
                
                <div className="timer-value" style={{ fontSize: fontSize, color: fontColor }}>
                    <p className="big-text">{days}</p>
                    <span style={{ fontSize: fontSize, color: fontColor }}>DAYS</span>
                </div>
                
                <div className="timer-value" style={{ fontSize: fontSize, color: fontColor }}>
                    <p className="big-text">{hours}</p>
                    <span style={{ fontSize: fontSize, color: fontColor }}>HOURS</span>
                </div>
                
                <div className="timer-value" style={{ fontSize: fontSize, color: fontColor }}>
                    <p className="big-text">{minutes}</p>
                    <span style={{ fontSize: fontSize, color: fontColor }}>MINUTES</span>
                </div>
        
                <div className="timer-value" style={{ fontSize: fontSize, color: fontColor }}>
                    <p className="big-text">{seconds}</p>
                    <span style={{ fontSize: fontSize, color: fontColor }}>SECONDS</span>
                </div>
            </div>
            
            <div className="timer-input-button" style={{ fontSize: fontSize, color: fontColor }}>
                <input type="datetime-local" className="timer-input" onChange={onChangeDateHandler} />
                <button className="timer-button" onClick={onClickHandler}>
                    START COUNTDOWN
                </button>
            </div>
        </div>
    );
};

export default CountdownTimer;