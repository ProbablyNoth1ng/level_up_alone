import React, { useState } from "react";
import '../styles/WeekAccomplishments.scss';

    
export default function WeekAccomplishments(){
    const options = { weekday: "long" };
    const daysOfWeekNumbers = [];
    const daysOfWeek = []
    const today = new Date();
    const dayOfWeek = today.getDay(); 
    
 
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)); 

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date();
      currentDate.setDate(startOfWeek.getDate() + i);
    
      
      daysOfWeekNumbers[i] = {date:currentDate.getDate(),day:new Intl.DateTimeFormat("en-US", options).format(currentDate)};

    }
    const currentDate = new Date();      
    console.log(daysOfWeekNumbers)
    return (
        <>
          <p className="text-4xl flex justify-center pt-10">{new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate)}</p>
        <div className="week__accomplishments flex justify-center">
            
            {daysOfWeekNumbers.map((elem,index) => (
                <div className={`day__block  ${currentDate.getDate() === elem ? 'current__day' : ''}`} key={index}> 
                   <p className={`date `}>{elem.date}</p>
                    <p className="day">{elem.day} </p>
                    
                </div>
            ))}
          
            
        </div>
        <p>aaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaiption aaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaassssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption -----</p>
        </>
    )
}
