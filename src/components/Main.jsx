import React,{useEffect, useState} from "react";
import '../styles/Main.scss'
import BlockItem from '../components/BlockItem'
import { useSelector,useDispatch } from "react-redux";
import { addBlock, removeBlock, updateBlock } from "../store/blockSlice";
import { updateStateFalse  } from "../store/emojiSlice";
import { reactHooksModule } from "@reduxjs/toolkit/query/react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword,onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";


export default function Main(){

    const dispatch = useDispatch();
    const blocks = useSelector((state) => state.blocks.blocks);

    const [newTitle, setNewTitle] = useState("Missiondddddddddddddddasdasd1ddd")
    const [newSubtitle, setNewSubtitle] = useState("aaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaiption aaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaassssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption ------- ")
    const [newEmoji, setNewEmoji] = useState('😊')

    const [opened, setOpened] = useState(false);
    const [clickedBlock, setClickedBlock] = useState();
    const navigate = useNavigate();

    const handleAddBlock = () => {
        dispatch(addBlock({title:newTitle,subtitle:newSubtitle,emoji:newEmoji}));

    }

    const handleRemoveBlock = (id) =>{
        dispatch(removeBlock(id))
    }

    const handleUpdateBlock = (id) => {
        dispatch(updateBlock({id, changes: {title:newTitle,subtitle:newSubtitle,emoji:newEmoji}}))
    }

    function blockOpen(e){
        setClickedBlock(e.target.closest('div .block'));
        e.target.closest('div .block').classList != 'opened' ? e.target.closest('div .block').classList.add('opened') : '';
        console.log(e)
        setOpened(true)
        document.querySelector('#body').classList.add('lock');
        console.log(true)
    }

    function close(){
        console.log(clickedBlock)
        clickedBlock.classList.remove('opened');
        setClickedBlock('')
        setOpened(false)
        console.log('block closed')
        document.querySelector('#body').classList.remove('lock');
        dispatch(updateStateFalse())
   }

    function logout() {
    console.log('loged out')
     signOut(auth)
     navigate('/Login')
    }
    return (
        <>
   
   
	


            <main className="main flex flex-wrap gap-6 justify-center">
                <div className={`block p-6 cursor-pointer  `} onClick={!opened ? blockOpen : ""}> 
                                    <h3 className="title text-3xl  flex justify-center pb-3">123</h3>
                                    <p className="text-xl text-center">123</p>
                                    
                </div>
            
                    {blocks.map((block) => (
                        
                            <div className={`block p-6 cursor-pointer ${block.id} `} onClick={!opened ? blockOpen : ''}> 
                            
                               <BlockItem  blockId={block.id}   />

                            </div>
                    ))}
              
                < div className="add__block flex justify-center items-center cursor-pointer vi"  onClick={handleAddBlock}>
                    <i class="fa-solid fa-plus"></i>
                </div>
                <i class={`fa-solid fa-xmark close ${opened ? '' : 'hidden'}`} onClick={close}></i>

                    <button className="logout" onClick={logout}>logout</button>
            </main>

        </>
    )
}




