import React from "react";
import './ItemList.css'
import { totalItem } from "../../constant";

const ItemList = () => {
  return(
    <div className='itemList'>
      {totalItem.map((ele,index) => {
        return (
          <div key={index} className='itemList'>
            <img src={ele.image} alt="error" />
             
            
            <p >{ele.name}</p>
          
          </div>
        );
      })}
    </div>
  )
}
export default ItemList;
