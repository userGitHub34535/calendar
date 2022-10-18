import { useState, createContext, useEffect } from "react";
// import GlobalContext from "./GlobalContext";

export const GlobalContext = createContext({
      showTLForm: true
    , setShowTLForm: () => {}
    , savedTLs: []
    , setSavedTLs: () => {}
});

export function ContextWrapper(props) {
    const [showTLForm, setShowTLForm] = useState(false);
    const [savedTLs, setSavedTLs] = useState([]);

    useEffect(() => {
        console.log(savedTLs);
        alert("SS");
    }, [savedTLs]);

    return (
        <GlobalContext.Provider value={
            {showTLForm
            ,setShowTLForm
            ,savedTLs
            ,setSavedTLs}
        }>
            {props.children}
        </GlobalContext.Provider>
    );
}
