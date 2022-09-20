import React, { useState } from 'react';
import safeImage from "../assets/shieldimage.png";
import search from "../assets/icon_search.png";
import computer from "../assets/computer.png";
import create from "../assets/all-safes-create.png";
import folder from "../assets/add-folder.png";
import locker from "../assets/locker.png";
import add from "../assets/icon_add.png";
import Popup from 'reactjs-popup';
import Popup_Safe from "../Components/popup_safe";
import Addfolder from './addfolder';
export default function Safes() {
  return (
    <div id="bodycontainer_safe">
      <div id='safes'>
        <div id="allsafes">
          <div id="safehead">
            <div id='safecard'>
              <div id="text">All Safes</div>
              <div id='zero'>(0)</div>
            </div>
            <div id='searchbar'>
              <img src={search} alt="search" />
              <input type="text" placeholder='Search' />
            </div>
          </div>
          <div id='computer'>
            <img src={computer} alt="search" />
            <p>Create a Safe and get started!</p>
            <Popup
              trigger={<img id="create-image" src={create} alt="create" />} modal nested
            >
              {(close) => (
                <Popup_Safe close={close} />
              )}
            </Popup>
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
                <p>Secrets</p>
              </div>
              <div id="add-folders">
                <Popup trigger={<img src={folder} alt="folder" />} modal nested>
                  {(close) => (
                    <Addfolder close={close} />
                  )}
                </Popup>
              </div>
            </div>
            <div>
              <div id="secretcount">
                <p>0 secrets</p>
                <div id="locker">
                  <img id="locker-image" src={locker} alt="locker" />
                  <p id="locker-para">Add a Folder and then you’ll be able to add Secrets to view them all here</p>
                  <div id="create-secrets">
                    <div id="add-secrets">
                      <Popup trigger={<button>
                <img id='add-secrets-image' src={add} alt="add" /> 
                <p>Add</p>
                </button> } modal nested>
                  {(close) => (
                    <Addfolder close={close} />
                  )}
                </Popup>
                
                    </div>
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
