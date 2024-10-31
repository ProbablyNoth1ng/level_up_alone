import React,{useState} from "react";
import sanitizeHtml from "sanitize-html"
import ContentEditable from 'react-contenteditable';
import WeekAccomplishments from './WeekAccomplishments';
import { useDispatch, useSelector } from "react-redux";
import { updateBlock } from "../store/blockSlice";
import { updateStateTrue, updateStateFalse } from '../store/emojiSlice';
import EmojiPicker, { Emoji } from 'emoji-picker-react';
import '../styles/BlockItem.scss'
import { IconSize } from "@blueprintjs/icons";

export default function BlockItem({blockId }){
    const isOpened = useSelector((state) => state.emoji.opened);
    const [showPicker, setShowPicker] = useState(false);
    const dispatch = useDispatch();
    const block = useSelector((state) =>{
        return state.blocks.blocks.find((b) => b.id === blockId)
    })

    if(!block){
        return null;
    }

    const onTitleChange = React.useCallback(evt => {
		const sanitizeConf = {
			allowedTags: ["b", "i", "a", "p"],
			allowedAttributes: { a: ["href"] }
		};

		const newTitle = (sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
        dispatch(updateBlock({
            id:block.id,
            changes:{title:newTitle}
        }))

	}, [dispatch,block.id])
    
    const onSubtitleChange = React.useCallback(evt => {
		const sanitizeConf = {
			allowedTags: ["b", "i", "a", "p"],
			allowedAttributes: { a: ["href"] }
		};
		const newSubtitle = (sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
		dispatch(updateBlock({
            id:block.id,
            changes:{subtitle:newSubtitle}
        }))

	},  [dispatch, block.id])
    const onEmojiChange = React.useCallback(evt => {
        console.log(evt)
		const newEmoji = evt
		dispatch(updateBlock({
            id:block.id,
            changes:{emoji:newEmoji}
        }))

	},  [dispatch, block.id])

    const onEmojiClick = (emojiObject) => {
        onEmojiChange(emojiObject.emoji)
        dispatch(updateStateFalse()) 
    }
    return (
        <>
            
            <div className={`block__icon text-5xl text-center prevent `}  onClick={() =>  dispatch(updateStateTrue()) }  >
                {block.emoji}
           
            </div>
           {isOpened &&  <div className="picker__wrapper flex justify-center pt-3"> <EmojiPicker  emojiStyle="native" onEmojiClick={onEmojiClick} className={`${isOpened ? 'visible' : 'hidden'}`} /></div> }
           
            <ContentEditable
                className="title text-3xl text-center mx-auto  pb-3 mission__title wrap"
                onChange={onTitleChange}
                onBlur={onTitleChange}
                html={block.title || ""} 
                placeholder="title"/>
                <div className="content">
                    <ContentEditable 
                    className="text-xl text-center mission__description wrap mx-auto"
                    onChange={onSubtitleChange}
                    onBlur={onSubtitleChange}
                    html={block.subtitle || ""} 
                    placeholder="subtitle"/>
                    <WeekAccomplishments/>
                </div>
            
        </>
                       

    )
}