import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import theamswitchicon from '../assets/header/theme-switch.png'
import searchicon from '../assets/header/search.png'
function Header() {
  return (
      <div className='header'>
          
          <div className='logoContainer'>
              <img src={punkLogo} className='punkLogo'></img>
          </div>

            <div className='searchBar'>
                <div className='searchIcon' >
                    <img src={searchicon} ></img>
                </div>
                <div >
                    <input className='searchInput' placeholder='collection, item or user...'></input>
                </div>
            </div>
            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>

            </div>
            <div className='headerAction' >
                <div className='theamSwitch' >
                    <img src={theamswitchicon}></img>
                </div>

            </div>
                <div className='loginButton'>GET IN

                </div>
      </div>
    
  )
}

export default Header