import React from 'react';
import Hour from './Hour';
import '../Styles/Grid.css';

const getCurWeek7_24 = (date) => {
    //todo- I need to throw an exception if the object passed in is not a date.
    
    const year = (new Date()).getFullYear();
    const monthIndex = (new Date()).getMonth();
    const monIdx = date.getDate() - date.getDay() + 1;  //given the date argument, get previous Monday's date.
    const min = 0;
    const sec = 0;
    
    //build a multi-dimensional array of 7 by 24 representing hours in the week in question
    const seven_24 = [];
    for (let i = 0; i < 7; i++) {
        const all24HoursInDay = [];

        for (let j = 0; j< 24; j++) {                
            const day = monIdx + i; //date.getDate() - date.getDay() + 1 + i;
            const hours = j;
            const someHourInDay = new Date(year, monthIndex, day, hours, min, sec);

            all24HoursInDay.push(someHourInDay);
        }

        seven_24.push(all24HoursInDay);
    }
    
    return seven_24;

// todo-delete
// //get the Monday of the current week
// const today = new Date();
// const monIdx = today.getDate() - today.getDay() + 1;
// const monOfWeek = new Date(today.setDate(monIdx));
// //construct an array of 24, 7 i.e. 7 arrays, each with 24 arrays inside.
// let seven_24 = []; 
// for (var i = 0; i< 7; i++) {
//     let all24HoursInDay = [];
//     for (var j = 0; j < 24; j++) {
//         const someHourInToday = new Date(new Date(new Date(new Date((new Date()
//                                         .setDate(monOfWeek.getDate() + i))) 
//                                         .setHours(j)))
//                                         .setMinutes(0));
//                                         // .setSeconds(0);
//         all24HoursInDay.push(someHourInToday);
//     }
//     seven_24.push(all24HoursInDay);
// }
// console.log(seven_24);
}

export default function CalendarWeekView() { 

    // console.log(getCurWeek7_24(new Date()));
    // console.log(getCurWeek7_24(  new Date((new Date()).setDate(3))  ));

    const multiArray = getCurWeek7_24( new Date(new Date().setDate(14))  );
    

    return (        
        <div className="container">
            {multiArray.map((all24HoursInDay) => (
                all24HoursInDay.map((someHourInDay, i) => <Hour hour={someHourInDay} key={i}/>)
            ))}

            
        </div>
    )
};