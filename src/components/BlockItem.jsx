import React,{useState} from "react";
import sanitizeHtml from "sanitize-html"
import ContentEditable from 'react-contenteditable';
import WeekAccomplishments from './WeekAccomplishments';
import { useDispatch, useSelector } from "react-redux";
import { updateBlock } from "../store/blockSlice";

export default function BlockItem({blockId }){
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
    return (
        <>
            
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