import React, { useState } from 'react';
import axios from 'axios';
import SelectFloor from './SelectFloor';
import SelectNegotiation from './SelectNegotiation';
import Textarea from './Textarea';
import SelectTower from './SelectTower';
import SelectTime from './SelectTime';
import '../App.css';

const App = () => {
  const [data, setData] = useState({
    setTower: '',
    setFloor: '',
    setNegotiation: '',
    setHours: new Date(),
    setTime: '',
    setComment: '',
  });

  const handleChangeField = (e) => {
    const date = e.target.value;
    const newData = {
      ...data,
      setHours: new Date(date),
    };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData);
  };

  const handleReset = () => {
    setData({
      setTower: '',
      setFloor: '',
      setNegotiation: '',
      setHours: '',
      setTime: '',
      setComment: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/',{ data })
      .then((response) => {
        JSON.stringify(response.data);
        console.log('Object', response.data);
      })
      .catch((error)=>{
        console.log(error);
      })
  };

  return (
    <div className="">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="form-block"
        >
          <h1 className="text-center">Бронирование переговорных</h1>
          <div className="blocks">
            <div className="block-floating">
              <SelectTower
                onChange={handleChangeField}
                value={data.setTower}
              />
            </div>
            <div className="block-floating">
              <SelectFloor
                onChange={handleChangeField}
                value={data.setFloor}
              />
            </div>
            <div className="block-floating">
              <SelectNegotiation
                onChange={handleChangeField}
                value={data.setNegotiation}
              />
            </div>
            <div className="block-data">
              <input
                type="date"
                onChange={handleChangeField}
                className="form-control input-data"
              />
            </div>
            <div className="block-time">
              <SelectTime
                onChange={handleChangeField}
                value={data.setTime}
              />
            </div>
            <div className="block-textarea">
              <Textarea
                onChange={handleChangeField}
                value={data.setComment}
              />
            </div>
            <div className="flex-buttons">
              <button className="btn btn-outline-danger" onClick={handleReset} type="reset">
                Сброс
              </button>
              <button className="btn btn-outline-primary" type="submit">
                Отправить
              </button>
            </div>
          </div>
        </form>
    </div>
  );
};

export default App;


// setTower: data.setTower,
//   setFloor: data.setFloor,
//   setNegotiation: data.setNegotiation,
//   setHours: data.setHours,
//   setTime: data.setTime,
//   setComment: data.setComment,
