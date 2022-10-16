import { createContext } from "react";

const GlobalContext = createContext();

//wrapping this inside an 
//export default function ContextWrapper() {            }
//and declaring the corresponding state for the context at the top of the ContextWrapper i.e. Context file
//also declaring the values 

//when w3 and React docs tells me that <MyContext.Provider value={pass in all the variables that you want to be passed as context}>
//</MyContext.Provider> needs to wrap the parent Component of the tree (all children componets) that you want context to be acessible for.
//React docs tell me that the corresponding state needs to     

//ans: this is wrapping the <MyContext.Provider> itself within a component that I export called <ContextWrapper>

export default function ContextWrapper() {
    const [showTLForm, setShowTLForm] = useState(true);

    return (
        <GlobalContext.Provider value={showTLForm}>
        </GlobalContext.Provider>
    );
}
