import { useContext } from 'react';
// import GlobalContext from '../Context/GlobalContext';
import { GlobalContext } from '../Context/ContextWrapper';
import TimeLaboredForm from './TimeLaboredForm';

export default function Sidebar() {
  const {showTLForm
    , setShowTLForm} = useContext(GlobalContext);

  return (
    <>
      <button onClick={() => {
        setShowTLForm(true);
        alert("clicked Create");
      }}>Create</button>
      <p>{showTLForm.toString()}</p>
      
      <TimeLaboredForm />
    </>
  )
}
