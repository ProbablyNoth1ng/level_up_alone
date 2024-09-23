import React,{useEffect, useState} from "react";
import '../styles/AsideBar.scss'
import { useSelector,useDispatch } from "react-redux";

export default function AsideBar({blockId}){

    const dispatch = useDispatch();
    const blocks = useSelector((state) => state.blocks.blocks);

  
   
    return (
        <>
          <aside className="aside__bar flex flex-col items-center">
                 
            {
                  blocks.map((block) => (
                    (
                        <div className="block__fast flex justify-center items-center" > 
                            <div className="aside__emoji text-3xl">{block.emoji}</div>
                        </div>
                    )
                            

                  ))
            }
            
               
            </aside>    
        </>
    )
}