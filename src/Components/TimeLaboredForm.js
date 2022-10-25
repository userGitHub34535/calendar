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
  
  //we have a choice of 2 variables which could come in through the context:
  // savedTLs & setSavedTLs
  //I created a TL object here
  //I added to the savedTL and "set" the setter (however, reference obviously didn't change)
  //
  //I believe ...
  //I could have state for this form e.g. const [TLs, setTLs] = useState([startTime, endTime, description]);
  //as well as a TL object
  //then, I could update the setter with the new state TLs - this would update the reference 
  //
  //the official blog way....
  //have TLs as state with a setter too i.e. const [TLs, setTLs] = useState();

  const saveTL = () => {
    // console.log(startTime); //todo-delete
    // console.log(endTime);
    console.log(savedTLs);
    const TL = {startTime, endTime, description};
    const TLs = savedTLs.concat(TL);
    //TLs.push(TL);
    console.log(savedTLs);
    setSavedTLs(TLs);
  };

  const viewSavedTLsContext = () => {
    alert(savedTLs[0].description);
  };
  return (
    <div className="DatePanel">
      <button onClick={() => {
        setShowTLForm(false);
        saveTL();
        }} >Close</button>
      <DateTimePicker format="HH:mm dd/MM/yyyy" value={startTime} onChange={setStartTime} disableClock={true} autoFocus={true} />
      <DateTimePicker format="HH:mm dd/MM/yyyy" value={endTime}   onChange={setEndTime}   disableClock={true} />
      <input value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={viewSavedTLsContext}>Show state of savedTLs[0].description</button>
    </div>
  );
}
