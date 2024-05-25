import React from 'react'
import '../Item/Item.css'

export default function Item(props) {
  return (
    <div className='item'>
        <img src={'props.image'} alt=''/>
        <p>{props.name}</p>
        <div className='offer'>
          {props.off}
        </div>
      <div className='item-price-new'>
      {props.offer_price}
      </div>
      <div className='item-price-old'>
        {props.price}
      </div>
    </div>
  )
}
