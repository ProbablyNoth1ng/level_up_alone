import React,{useEffect, useState} from "react";
import '../styles/AsideBar.scss'
import { useSelector,useDispatch } from "react-redux";

export default function AsideBar(){

    const dispatch = useDispatch();
    const blocks = useSelector((state) => state.blocks.blocks);

  
        
    // function blockOpen(e){
    //     let block = (e.target.classList.toString().split(' ')[e.target.classList.toString().split(' ').length-1])
    //     console.log(document.querySelector(`.block ${block}`))
    //     // setClickedBlock();
    //     // e.target.closest('div .block').classList != 'opened' ? e.target.closest('div .block').classList.add('opened') : '';
    //     // console.log(e)
    //     // setOpened(true)
    //     // document.querySelector('#body').classList.add('lock');
    //     // console.log(true)
    // }
    return (
        <>
          <aside className="aside__bar flex flex-col items-center">
                 
            {
                  blocks.map((block) => (
                    (
                        <div className={`block__fast flex justify-center items-center ${block.id}`} > 
                            <div className={`aside__emoji text-4xl ${block.id}`}>{block.emoji}</div>
                        </div>
                    )
                            

                  ))
            }
            
               
            </aside>    
        </>
    )
}