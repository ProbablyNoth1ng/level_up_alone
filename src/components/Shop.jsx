import React,{useState,useEffect} from "react";
import '../styles/Shop.scss';
import { addItem, editItem} from "../store/shopSlice"; 
import { balanceChange} from "../store/userSlice"; 
import { useSelector,useDispatch } from "react-redux";
import ContentEditable from 'react-contenteditable';

export default function Shop(){
    const dispatch = useDispatch()
    const [position,setPosition] = useState({})
    
    const items = useSelector((state) => state.shop.items);
    console.log(items)
    const [itemNameNew,setItemNameNew] = useState("Potion");
    const [itemDescriptionNew,setItemDescriptionNew] = useState(" ipsum dolor sit amet consectetur adipisicing elit. Alias earum, quia voluptatibus unde beatae cumque nemo voluptatem quasi quam dolorem ea, debitis libero ratione natus eaque minus illum. Iusto, harum.");
    const [itemPriceNew,setItemPriceNew] = useState(222);


    function handleAddItem(){
        dispatch(addItem({itemName:itemNameNew,itemDescription:itemDescriptionNew,itemPrice:itemPriceNew}))
    }
    
    function handleBalanceChange(e){
        let id = e.target.closest('tr').classList[1]
        let row = e.target.closest('tr')
        let cells = row.querySelectorAll("td");
        const cellData = Array.from(cells).map((cell) => cell.textContent);
        console.log(cellData)
        dispatch(balanceChange({id:id,itemName:cellData[0],itemDescription:cellData[1],itemPrice:cellData[2]}))
    }
    
    const onItemNameChange = React.useCallback((itemId) => (evt) => {
        console.log(evt.currentTarget.innerHTML)
        let newName = evt.currentTarget.innerHTML
        dispatch(editItem({
            id: itemId, 
            changes: { itemName: newName }
        }))
    }, [dispatch])
    return (
        <>
        <div className="shop ">
            <div className="shop_wrapper flex">
                <table className="w-full">
                            <tr className="w-full ">
                            <th>Item</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>Potion</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias earum, quia voluptatibus unde beatae cumque nemo voluptatem quasi quam dolorem ea, debitis libero ratione natus eaque minus illum. Iusto, harum.</td>
                            <td>300</td>
                            <button className="buy text-3xl font-bold uppercase">Buy</button>
                        </tr>
                        {items.map((item) => (
                      
                     
                         
                            <tr className={`item_wrap ${item.id}`}>
                                <td> 
                                    <ContentEditable
                                className="title text-3xl text-center mx-auto  pb-3 mission__title wrap"
                                onChange={onItemNameChange(item.id)}
                                // onBlur={onTitleChange}
                                html={item.itemName || ""} 
                                placeholder="title"/>
                </td>
                                <td className="description">{itemDescriptionNew}</td>
                                <td className="price">{itemPriceNew}</td>
                                <button className="buy text-3xl font-bold uppercase" onClick={handleBalanceChange}>Buy</button>
                            </tr>
                   
                            
                        ))}
                </table>
        
                

            </div>
            <div className="wrap flex justify-end pt-10">
                <button className="add_item " onClick={handleAddItem}>add item</button>
            </div>
            
        </div>
        </>
    )
}