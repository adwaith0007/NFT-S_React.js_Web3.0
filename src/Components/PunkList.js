import React from 'react'
import './PunkList.css'
import CollectionCard from './CollectionCard/CollectionCard'

// function punklist(props) {

    const punklist=({punkListData,setSelectedPunk})=>{
    
    
    return (
        <div className='PunkList' >
        {punkListData.map((punk)=>
            <div onClick={()=>setSelectedPunk(punk.token_id)} >
                {console.log(punk.token_id)}
            <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_preview_url}
            />
            </div>
            
          )}
         </div>
    )
}
            
  
        
            
            
export default punklist