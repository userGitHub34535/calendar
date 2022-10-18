import {useContext, useEffect, useState} from 'react';
import DateTimePicker from 'react-datetime-picker';
// import GlobalContext from '../Context/GlobalContext';
import { GlobalContext } from '../Context/ContextWrapper';
import '../Sidebar.css';

export default function DatePanel() {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState();
  const [description, setDescription] = useState("no desc");
  const {   setShowTLForm
          , savedTLs
          , setSavedTLs } = useContext(GlobalContext);
  
  const saveTL = () => {
    // console.log(startTime); todo-delete
    // console.log(endTime);
    const TL = {startTime, endTime, description};
    savedTLs.push(TL);
    console.log(savedTLs);
    setSavedTLs(savedTLs);
  }

  return (
    <div className="DatePanel">
      <button onClick={() => {
        setShowTLForm(false);
        saveTL();
        }} >Close</button>
      <DateTimePicker format="HH:mm dd/MM/yyyy" value={startTime} onChange={setStartTime} disableClock={true} autoFocus={true} />
      <DateTimePicker format="HH:mm dd/MM/yyyy" value={endTime}   onChange={setEndTime}   disableClock={true} />
      <input value={description} onChange={(e) => setDescription(e.target.value)} />
    </div>
  );
}
