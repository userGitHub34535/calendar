import { useState, createContext, useEffect } from "react";
import axios from "axios";
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
    const API = "http://localhost:8080/timeLabored";

    useEffect(() => {
        //I wanted to save TLs to the DB here
        alert("maybe useEffect fires for Context was loaded?, as opposed to savedTLs updated");
        //I think this fires in Esteba because savedTL's setter function is a useReducer & a dispatcher. Let me research useReducer.  
        //I really do think I have my answer - it's because savedTLs state in my ContextWrapper is = useState([]).
        // However, in Esteban it actually = useReducer(...dispatcher...)
        //so I think in mine, maybe the Context's savedTLs isn't updating, but if I were to useReducer & dispatcher, my state in the context, might update. 
        console.log(savedTLs);
        alert("SS");
    }, [savedTLs]);

    useEffect(() => { 
        alert("setShowTLForm context. state changed")
    }, [showTLForm]);


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
