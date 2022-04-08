import React from 'react'
import weth from './weth.png'
import './CollectionCard.css'
function CollectionCard({id,name,traits,image}) {
  return (
    <div className='CollectionCard'>
    <img src={image} alt=''></img>
    <div className='details'>
        
    </div>
    <div className='name'>{name} <div className='id'>.#{id}</div> </div>
    <div className='priceContainer'>
    <img src={weth} className='wethImage' alt='' ></img>
    <div className='price'>{traits[0].value}</div>
    </div>
       
     </div>
  )
}

export default CollectionCard
