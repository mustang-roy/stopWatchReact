import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Countdown = () => {
  const initialState = 0;
  const initialInput = { hour: 0, minute: 0, second: 0 };

  const [inputControl, setInputControl] = useState(initialInput);
  const [count, setCount] = useState(initialState);
  const [status, setStatus] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const constConvert = { hour: 3600000, minute: 60000, second: 1000 };

    if (status && pause) {
      setTimeout(() => setCount(count - 10), 10);
    } else if (!status) {
      const totalTime =
        inputControl.second * constConvert.second +
        inputControl.minute * constConvert.minute +
        inputControl.hour * constConvert.hour;
      setCount(totalTime);
    }
  }, [status, count, inputControl, pause]);

  const convertTime = (count) => {
    const constConvert = { hour: 3600000, minute: 60000, second: 1000 };

    const timeCon = { hour: 0, minute: 0, second: 0, milisecond: 0 };

    timeCon.hour = Math.floor(count / constConvert.hour);
    timeCon.minute = Math.floor(
      (count - timeCon.hour * constConvert.hour) / constConvert.minute
    );
    timeCon.second = Math.floor(
      (count -
        timeCon.hour * constConvert.hour -
        timeCon.minute * constConvert.minute) /
        constConvert.second
    );
    timeCon.milisecond = Math.floor(
      count -
        timeCon.hour * constConvert.hour -
        timeCon.minute * constConvert.minute -
        timeCon.second * constConvert.second
    );

    return timeCon;
  };

  const handleTime = ({ target }) => {
    const { name, value } = target;
    setInputControl({ ...inputControl, [name]: Number(value) });
  };

  return (
    <div>
      <h1>{convertTime(count).hour}</h1>
      <h1>{convertTime(count).minute}</h1>
      <h1>{convertTime(count).second}</h1>
      <p>{convertTime(count).milisecond}</p>
      <input
        type="number"
        placeholder="Hour"
        name="hour"
        max="24"
        min="0"
        onChange={handleTime}
      />
      <input
        type="number"
        placeholder="Minute"
        name="minute"
        max="59"
        min="0"
        onChange={handleTime}
      />
      <input
        type="number"
        placeholder="Second"
        name="second"
        max="59"
        min="0"
        onChange={handleTime}
      />
      <button
        onClick={() => {
          setStatus(true);
          setPause(!pause);
        }}
      >
        {pause ? 'Parar': 'Iniciar'}
      </button>
      <button onClick={() => {
        setStatus(false)
        setPause(false)
        }}>
          Resetar
      </button>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Countdown;
