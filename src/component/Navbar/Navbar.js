import React from 'react'
import './Navbar.css';
import { useSelector } from 'react-redux';
function Navbar() {
  const items = useSelector(state => state.itemSlice.items);
  let quantitycount = 0;
  items.forEach((item) => { (quantitycount += item.quantity)
  });
  let amountcount = 0;
  items.forEach(()=> {(amountcount = quantitycount * 10)})
  return (
    <div className='Navbar-div'>
        <h4>Total quantity: {quantitycount}</h4>
        <h4>Total amount: {amountcount} </h4>
    </div>
  )
} 

export default Navbar;
