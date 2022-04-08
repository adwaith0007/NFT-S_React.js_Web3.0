import React from 'react'
import './App.css';

import CollectionCard from './Components/CollectionCard/CollectionCard';
import Header from './Components/Header';

function App() {
  return (
    <div className='app'>
      <Header/>
     

      <CollectionCard id={0} name={'Bandana Punk'} traits={[{'value':7}]}
      image='https://ipfs.thirdweb.com/ipfs/QmXt9PsvwBQvs4kHbbM1Gt3aPcZTrFfQNcY6eRWVW6d3aH/0.jpg'/>
      
      
     
    </div>
    
  )
}

export default App;
