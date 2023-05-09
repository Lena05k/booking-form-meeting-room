import React, { useState } from 'react';
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
    setDate: '',
    setTimeInterval: '',
    setComment: '',
  });
  const handleTimeChange = (e) => {
    setData({...data, setTimeInterval: e.target.value });
  };
  const handleDateChange = (e) => {
    setData({...data, setDate: e.target.value });
  };

  const handleChangeField = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  const handleReset = () => {
    setData({
      setTower: '',
      setFloor: '',
      setNegotiation: '',
      setDate: '',
      setTimeInterval: '',
      setComment: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
  };

  return (
    <div className="">
        <form
          onSubmit={handleSubmit}
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
                onChange={handleDateChange}
                className="form-control input-data"
                value={data.setDate}
              />
            </div>
            <div className="block-time">
              <SelectTime
                onChange={handleTimeChange}
                value={data.setTimeInterval}
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
