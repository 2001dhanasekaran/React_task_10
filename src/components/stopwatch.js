import { useEffect, useState } from 'react';
import './style.css';
export default function Stopwatch(){
    const [time,settime]=useState(0);
    const [run,setRun]=useState(false);

    useEffect(()=>{
        let timer;

        if(run){
            timer=setInterval(() => {
                settime((prevTime)=>prevTime+1);
            }, 1000);
        }
        return()=>clearInterval(timer);
    },[run]);

    const timeFormate=(seconds)=>{
        const minutes=Math.floor(seconds / 60).toString().padStart(2,'0');
        const sec=(seconds % 60).toString().padStart(2,'0');
        return `${minutes}:${sec}`;
    };

    const startPause=()=>{
        setRun((prevrun)=>!prevrun);
    };
    const reset=()=>{
        setRun(false);
        settime(0);
    };

    return(
        <div className='watch'>
            <div>
                <h1>Stopwatch</h1>
                <h2>{timeFormate(time)}</h2>
                <button onClick={startPause} style={{
                    backgroundColor: run?'red':'green',
                    color:'white'
                }}>{run?'Stop':'Start'}</button>
                <button onClick={reset} style={{backgroundColor:'blue',color:'white'}}>Reset</button>
            </div>
        </div>
    );
}