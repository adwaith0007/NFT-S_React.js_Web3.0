import React from 'react'
import './App.css';
import { useState,useEffect } from 'react';

import PunkList from './Components/PunkList';
import CollectionCard from './Components/CollectionCard/CollectionCard';
import Header from './Components/Header';
import axios from 'axios';
import Main from './Components/Main';

function App() {
  const[punkListData,setPunkListData]=useState([])
  const [selectedPunk,setSelectedPunk]=useState(0)
  useEffect(()=>{
    const getMyNfts= async()=>{
      const openseaData= await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xC51B6466F200f829D3aaF59f0c2feCE05909d130&order_direction=asc')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  },[])



  return (
    <div className='app'>
      <Header/>
      {punkListData.length > 0 && (
        <div>
      <Main punkListData={punkListData} selectedPunk={selectedPunk} />
    
        <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} /> )
     </div>
      )}
      
   
      
     
    </div>
    
  )
}

export default App;
