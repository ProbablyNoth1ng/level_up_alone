import React,{useEffect, useState} from "react";
import '../styles/Main.scss'
import BlockItem from '../components/BlockItem'
import { useSelector,useDispatch } from "react-redux";
import { addBlock, removeBlock, updateBlock } from "../store/blockSlice";
export default function Main(){

    const dispatch = useDispatch();
    const blocks = useSelector((state) => state.blocks.blocks);

    const [newTitle, setNewTitle] = React.useState("Missiondddddddddddddddasdasd1ddd")
    const [newSubtitle, setNewSubtitle] = React.useState("aaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaiption aaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaassssssssssssssssssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption descrsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaiption ------- ")

    const [opened, setOpened] = useState(false);
    const [clickedBlock, setClickedBlock] = useState();


    const handleAddBlock = () => {
        dispatch(addBlock({title:newTitle,subtitle:newSubtitle}));

    }

    const handleRemoveBlock = (id) =>{
        dispatch(removeBlock(id))
    }

    const handleUpdateBlock = (id) => {
        dispatch(updateBlock({id, changes: {title:newTitle,subtitle:newSubtitle}}))
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
       
        
       
        console.log('closeedd')
      
        
        document.querySelector('#body').classList.remove('lock');
   }
    return (
        <>
   
   
	


            <main className="main flex flex-wrap gap-6 justify-center">
                <div className={`block p-6 cursor-pointer  `} onClick={!opened ? blockOpen : ""}> 
                                    <h3 className="title text-3xl  flex justify-center pb-3">123</h3>
                                    <p className="text-xl text-center">123</p>
                                    
                </div>
               
                {/* <div className={`block p-6 cursor-pointer  `} onClick={!opened ? blockOpen : ''}> 
                    <h3 className="title text-3xl flex justify-center pb-3">title</h3>
                    <p className="text-xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi magnam accusamus tempore dignissimos corrupti atque voluptatibus earum, facilis ipsum assumenda?</p>
                    
                </div> */}
              
                    {/* <input
                    type="number"
                    min="1"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                    /> */}
                    {/* <button onClick={addElements}>Add {1} Elements</button> */}
                    {blocks.map((block) => (
                        
                            <div className={`block p-6 cursor-pointer  `} onClick={!opened ? blockOpen : ''}> 
                            
                               <BlockItem  blockId={block.id}   />

                            </div>

                                    
                    ))}
              
                < div className="add__block flex justify-center items-center cursor-pointer "  onClick={handleAddBlock}>
                    <i class="fa-solid fa-plus"></i>
                </div>
                <i class={`fa-solid fa-xmark close ${opened ? '' : 'hidden'}`} onClick={close}></i>


              


            </main>

        </>
    )
}




