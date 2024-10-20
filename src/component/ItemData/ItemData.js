import React from 'react';
import './ItemData.css';
import { useDispatch, useSelector } from 'react-redux'
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";
import { addQuantityToCart, removeQuantityToCart } from '../../redux/slices/AddItemSlice';

function ItemData() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.itemSlice.items);

  return (
    <div className='ItemData'>
      <div className='hearder-name'>
        <p>Your Item</p>
      </div>
      <div className='items-list'>
        {
          items?.map(item =>
            <div className='single-item' key={item.index}> <p style={{width:'100px'}}>{item.name}</p>
              <GrSubtractCircle style={{marginTop:'5px', marginLeft:'50px',color: '#CA6568', cursor: 'pointer' }}
                onClick={() => dispatch(removeQuantityToCart(item.index))} />
              <p> {item.quantity}</p>
              <GrAddCircle style={{marginTop:'5px', color: '#88CF77', cursor: 'pointer' }}
                onClick={() => dispatch(addQuantityToCart(item.index))} />
              <p className='amount'> {item.amount * item.quantity}</p>
            </div>)
        }
      </div>
    </div>
  )
}
export default ItemData
