import React, { useState } from "react";
import '../styles/WeekAccomplishments.scss';
let one = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-square-fill" viewBox="0 0 16 16">
<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"/>
</svg>;

import { Button, Card, Menu, MenuDivider, MenuItem, Popover } from "@blueprintjs/core";

    
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

    const exampleMenu = (
        <Menu>
            {/* <i class="bi bi-1-square-fill"></i> */}
            <MenuItem  text="1" />
            <MenuItem  text="2" />
            <MenuItem  text="3" />
            <MenuItem  text="4" />
            <MenuItem  text="5" />
            <MenuItem  text="6" />
            <MenuItem  text="7" />
            <MenuItem  text="8" />
            <MenuItem  text="9" />
            <MenuItem  text="10" />
        </Menu>
    );

    return (
        <>
          <p className="text-4xl flex justify-center pt-10">{new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate)}</p>
        <div className="week__accomplishments flex justify-center ">
            
            {daysOfWeekNumbers.map((elem,index) => (
                <div className={`day__block  ${currentDate.getDate() === elem ? 'current__day' : ''}`} key={index}> 
                    <p className={`date `}>{elem.date}</p>
                    <p className="day">{elem.day} </p>
                  


                <div className="done pt-3">
                    <p>Completed?</p>
                    <div>T/F?</div>
                </div>
                <div className="rate pt-3">
                    <p>Rate you work</p>
                    <div className="drop_down">
                    {/* <i class="bi bi-1-square-fill"></i> */}
                    <Popover  content={exampleMenu} fill={true} placement="bottom">
                        <Button
                            className="btn__drop "
                            alignText="center"
                            // fill={true}
                            // icon="applications"
                            // rightIcon="caret-down"
                            text="0"
                        > /10</Button>
                    </Popover>
                    </div>
                </div>
                <div className="reflection pt-3">
                    <p className="mb-1">Maybe u have smth to say?</p>
                    <textarea className="day__reflection" name="" id="" ></textarea>
                    
                </div>
                    
                </div>
            ))}
           
        </div>
        {/* <p>aaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaiption aaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaassssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption -----</p> */}
        </>
    )
}
