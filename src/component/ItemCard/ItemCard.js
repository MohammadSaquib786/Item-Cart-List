import React, { useState } from 'react';
import './ItemCard.css';
import { addItemToCart } from '../../redux/slices/AddItemSlice';
import { useDispatch } from 'react-redux';

function ItemCard() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
   
  function Submithandler(e){
      e.preventDefault();
      if(inputValue.trim()){
        dispatch(addItemToCart(inputValue))
        setInputValue('');
      }
    }

  return (
    <div className='ItemCard'>
     <form  onSubmit={Submithandler}>
      <input className='input-list' type="text"  placeholder='Add item'
        onChange={(e)=>setInputValue(e.target.value)}
      />
      <button className='Button-list'>Add item</button>
     </form>
    </div>
  )
}

export default ItemCard
