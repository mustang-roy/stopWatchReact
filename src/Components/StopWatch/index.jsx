import React, { useState, useEffect } from 'react'
import Voltar from '../Voltar'

import Screen from '../../Components/Screen'
import './style.css'
import TitleTime from "../TitleTime"

const Stopwatch = () => {

  const [shouldStart, setShouldStart] = useState(false);
  const [count, setCount] = useState(0);
  const [intervalID, setIntervalID] = useState(0);
  const [notRunning, setNotRunning] = useState(true);
  useEffect(() => {
    if (shouldStart) {
      setIntervalID(setInterval(() => setCount(count => count + 10), 10));
      setShouldStart(false);
      setNotRunning(false);
    }
  }, [shouldStart, intervalID]);
  const startCount = () => notRunning && setShouldStart(true);

  const pauseCount = () => {
    clearInterval(intervalID);
    setNotRunning(true);
  };

  const stopCount = () => {
    clearInterval(intervalID);
    setCount(0);
    setNotRunning(true);
  };

  const convertTime = (count) => {

    const constConvert = { hour: 3600000, minute: 60000, second: 1000 }

    const timeCon = { hour: 0, minute: 0, second: 0, milisecond: 0 }

    timeCon.hour = Math.floor(count / constConvert.hour);
    timeCon.minute = Math.floor((count - timeCon.hour * constConvert.hour) / constConvert.minute);
    timeCon.second = Math.floor((count - timeCon.hour * constConvert.hour - timeCon.minute * constConvert.minute) / constConvert.second);
    timeCon.milisecond = Math.floor(count - timeCon.hour * constConvert.hour - timeCon.minute * constConvert.minute - timeCon.second * constConvert.second);
    return timeCon;
  }

  return (
    <Screen>
      <TitleTime count={count} convertTime={convertTime} />
      <Voltar />
      <div className="SelectStopWatch">
        <div className="timerStopWatch">
          <div>
            {convertTime(count).hour > 0 && <h1>{convertTime(count).hour}:</h1>}

            <h1>{convertTime(count).minute < 10
              ? '0' + convertTime(count).minute + ":"
              : convertTime(count).minute + ":"}</h1>

            <h1>{convertTime(count).second < 10
              ? '0' + convertTime(count).second
              : convertTime(count).second}</h1>
          </div>

          <p>{convertTime(count).milisecond === 0
            ? '000'
            : convertTime(count).milisecond < 100
              ? '0' + convertTime(count).milisecond
              : convertTime(count).milisecond}
          </p>
        </div>
        <div>

          {notRunning
            ? <button className="btnfix" onClick={startCount}>iniciar</button>
            : <button className="btnfix" onClick={pauseCount}>pausar</button>}
          <button onClick={stopCount}>
            resetar
      </button>
        </div>
      </div>
    </Screen>
  )
}

export default Stopwatch;