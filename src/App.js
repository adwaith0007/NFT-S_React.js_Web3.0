import React from 'react'
import './App.css';

import CollectionCard from './Components/CollectionCard/CollectionCard';
import Header from './Components/Header';

function App() {
  return (
    <div className='app'>
      <Header/>
      <div className='con'>

     

     
    <div>

      <CollectionCard id={0} name={'Bandana Punk'} traits={{'value':50}}
      image='https://ipfs.thirdweb.com/ipfs/QmXt9PsvwBQvs4kHbbM1Gt3aPcZTrFfQNcY6eRWVW6d3aH/0.jpg'/>
      </div>
      <div>

      <CollectionCard id={0} name={'Captain America punk'} traits={{'value':30}}
      image='https://ipfs.thirdweb.com/ipfs/QmVDHP7P7PG8PHzbXsTSnquuPTqPMmwY5DpNmNe6ay2BSx/0.jpg'/>
      </div>

      <div>

      <CollectionCard id={0} name={'Pirate punk'} traits={{'value':25}}
      image='https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg'/>
      </div>

      <div>

      <CollectionCard id={0} name={'Green Punk'} traits={{'value':40}}
      image='https://ipfs.thirdweb.com/ipfs/QmbxpMKvCQV9rGNujnWBr1cb41QnFk18UBb1uYEfJihy5y/0.jpg'/>
      </div>

      <div>

      <CollectionCard id={0} name={'Cyber Punk'} traits={{'value':35}}
      image='https://ipfs.thirdweb.com/ipfs/QmQQVwdSn864xHx9Hx2B5SB9Hmv886LuuUYUauYB97JMTS/0.jpg'/>
      </div>
      
      
      
      </div>
      
     
    </div>
    
  )
}

export default App;
