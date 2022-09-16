import React from 'react';
import safeImage from "../assets/shieldimage.png";
import search from "../assets/icon_search.png";
import computer from "../assets/computer.png";
import vector from "../assets/Vector.png";
import create from "../assets/all-safes-create.png"
export default function safes() {
  return (
    <div id='safes'>
      <div id="allsafes">
        <div id="safehead">
          <div id='safecard'>
           <div id="text">All Safes</div> 
           <div id='zero'>(0)</div>
           <img src={vector} alt="vector" />
            </div>
          <div id='searchbar'>
          <img src={search} alt="search" />
            <input type="text" placeholder='Search'/>
          </div>
        </div>
        <div id='computer'>
        <img src={computer} alt="search" />
        <p>Create a Safe and get started!</p>
        <img id ="create-image"src={create} alt="create"/>
        </div>
      </div>
      <div id="secrets">
        <div><img src={safeImage} alt="shield" /></div>
        <div>secrets</div>
      </div>
    </div>
  )
}
