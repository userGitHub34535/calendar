import {useState} from 'react';
import '../SidePanel.css';
import DateTimePicker from 'react-datetime-picker';

export default function DatePanel() {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState();
  
  
  return (
    <div className="DatePanel">
      
      <DateTimePicker format="HH:mm:ss dd/MM/yy" value={startTime} onChange={setStartTime} disableClock={true} autoFocus={true} />
      <DateTimePicker format="HH:mm:ss dd/MM/yy" value={endTime}   onChange={setEndTime}   disableClock={true} />
    </div>
  );
}
