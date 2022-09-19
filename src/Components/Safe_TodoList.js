import React ,{useState}from 'react'
import Popup_safe from './popup_safe';

export default function SafeTodoList  ()  {
    const [products,setProduct]=useState([]);
    const addProduct=product =>setProduct ([...products,product]);
  return (
    <div>
<Popup_safe addProductprop = {addProduct}/>
        </div>
  )
}
