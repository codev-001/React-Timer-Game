import { useRef, useState } from "react"
import Modal from "./Modal";

export default function Challenges({title,targetTime}){
    const timer=useRef();
    const dialog=useRef();

    const [timeRemaining,setTimeRemaining]=useState(targetTime*1000)

    const timeIsActive=timeRemaining >0 && timeRemaining < targetTime * 1000; 

    if(timeRemaining <= 0){
        dialog.current.open();
        clearInterval(timer.current);
    }
    function handleClick(){
        timer.current=setInterval(()=>{
            setTimeRemaining(prevValue=>
                prevValue-10
            );
        },10);

    }
    function handleStop(){
        dialog.current.open();
        clearInterval(timer.current);
    }
    function handleReset(){
        setTimeRemaining(targetTime*1000)
    }

    return(
        <>
       <Modal ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining} onReset={handleReset}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime>1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timeIsActive ? handleStop : handleClick
                }>{timeIsActive ? 'Stop Challenge' : 'Start Challenge'}</button>
            </p>
            <p className={timeIsActive ? 'active' : undefined}>
                { timeIsActive ?'Time is running...' : 'timer inactive'}
            </p>
        </section>
        </>

    )
}