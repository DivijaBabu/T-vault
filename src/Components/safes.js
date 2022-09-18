import React,{ useState }  from 'react';
import safeImage from "../assets/shieldimage.png";
import search from "../assets/icon_search.png";
import computer from "../assets/computer.png";
import vector from "../assets/Vector.png";
import create from "../assets/all-safes-create.png";
import folder from "../assets/add-folder.png";
import locker from "../assets/locker.png";
import add from "../assets/icon_add.png";
import PopupSafe from "../Components/popup_safe";
import Addfolder from './addfolder';
export default function Safes() {
  const [SafePopup,setSafePopup]=useState(false);
  const [AddfolderPopup,setAddfolderPopup]=useState(false);
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
            <input type="text" placeholder='Search' />
          </div>
        </div>
        <div id='computer'>
          <img src={computer} alt="search" />
          <p>Create a Safe and get started!</p>
          <img onClick={()=>setSafePopup(true)} id="create-image" src={create} alt="create" />
        <PopupSafe trigger={SafePopup}/>
        </div>
      </div>
      <div id="secrets">
        <div id="secretshead">
          <img src={safeImage} alt="shield" />
          <div id="container-secrets">
            <p id="no-safes">
              No Safes Created Yet
            </p>
            <p id="create-a-safe">
              Create a Safe to see your secrets, folders and permissions here
            </p>
          </div>
        </div>
        <div id="secrets-bottom">
          <div id="bottom-indicator">
            <div id="navigation-secrets">
              <li id='secrets-active'>Secrets</li>
              <li>Permissions</li>
            </div>
            <div id="add-folders">
              <p>Add folders</p>
              <img onClick={()=>setAddfolderPopup(true)} src={folder} alt="folder" />
              <Addfolder trigger={AddfolderPopup} setTrigger={setAddfolderPopup}/>
            </div>
          </div>
          <div>
            <div>
              <p>0 secrets</p>
              <div id="locker">
              <img id="locker-image"src={locker} alt="locker"/>
              <p id="locker-para">Add a Folder and then you’ll be able to add Secrets to view them all here</p>
              <div id="create-secrets">
              <div id="add-secrets">
                <img onClick={()=>setAddfolderPopup(true)} id='add-secrets-image' src={add} alt="add"/>
              <Addfolder trigger={AddfolderPopup} setTrigger={setAddfolderPopup}/>
                <p>Add</p>
              </div>
              </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
