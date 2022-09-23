import React, { useEffect, useState } from "react";
import searchimage from "../assets/icon_search.png";
// import SearchBar from "./searchbar";
import computer from "../assets/computer.png";
import create from "../assets/all-safes-create.png";
import folder from "../assets/add-folder.png";
import locker from "../assets/locker.png";
import add from "../assets/icon_add.png";
import Popup from "reactjs-popup";
import PopupSafe from "../Components/popup_safe";
import Addfolder from "./addfolder";
import ListSafe from "../assets/shield-safe.png";
import folderPink from "../assets/folderpink.png";
import deleteImage from "../assets/deleteimage.png";
import { useSelector, useDispatch } from "react-redux";
import { deleteSafe,setCurId } from "../ReduxFolder/Actions";
import EditPop from "../Components/EditPopupSafe";
import SafeDetail  from "./safeDetail";
export default function Safes() {
  const [blankpage, setBlankpage] = useState("addbutton");
  const update_blank = () => {
    setBlankpage("button_update");
  };
const [selectedSafe,setSelectedSafe]=useState([]);
  const deletedispatch = useDispatch();
// const [search ,setsearch]=useState("");
  const userList = useSelector((state) => state.users.value);
  const currentId = useSelector((state) => state.users.curId);
useEffect(()=>{
  if(currentId!==""&&userList&&userList.length){
    const filteredSafe=userList.filter((item)=>item.id===currentId)
    setSelectedSafe(filteredSafe);
  }
},[currentId])
  const folderName = useSelector((state) => state.users.value);
  // const [search,setSearch]=useState("");
  const count = userList.length;
  const secretscount = folderName.length;
  return (
    <div id="bodycontainer_safe">
      <div id="safes">
        <div id="allsafes">
          <div id="safehead">
            <div id="safecard">
              <div id="text">All Safes</div>
              <div id="zero">&#40;{count}&#41;</div>
            </div>
            {/* <SearchBar/> */}
            <div id="searchbar">
              <img src={searchimage} alt="search" />
              <input type="text" placeholder="Search" 
              />
            </div>
          </div>
          <div className = {userList<=0?"computer":"Listcomputer"}>
            {userList.length <= 0 && (
              <div>
                <img id ="image_computer" src={computer} alt="search" />
                <p id="create-text">Create a Safe and get started!</p>
                <Popup
                  trigger={
                    <img
                      id="create-image"
                      src={create}
                      alt="create"
                      onClick={update_blank}
                    />
                  }
                  modal
                  nested
                >
                  {(close) => <PopupSafe close={close} />}
                </Popup>
              </div>
            )}
            {userList.map((user) => {
              return (
                <div className = {currentId===user.id?"activesafe":"safes-list"} onClick={() => {
                  deletedispatch(setCurId({ id: user.id }));
                }} key={user.id}>
                  <div className="listcontainer">
                    <div id="shieldimage">
                      <img src={ListSafe} alt="safe" />
                    </div>
                    <div id="nameandowner">
                      <div>{user.safeName}</div>
                      <div id="greytext"><p>Last Updated: a few seconds ago</p></div>
                    </div>
                    <div id="editanddeletebutton">
                      <EditPop
                        id={user.id}
                        safeName={user.safeName}
                        owner={user.owner}
                        type={user.type}
                        description={user.description}
                      />
                      <img
                        src={deleteImage}
                        alt="delete"
                        onClick={() => {
                          deletedispatch(deleteSafe({ id: user.id }));
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            {userList.length > 0 && (
              <div>
                <Popup
                  trigger={
                    <img
                      id="list-create-image"
                      src={create}
                      alt="create"
                      onClick={update_blank}
                    />
                  }
                  modal
                  nested
                >
                  {(close) => <PopupSafe close={close} />}
                </Popup>
              </div>
            )}
          </div>
        </div>
        <div id="secrets">
        <SafeDetail selectedSafe= {selectedSafe}/>
          <div id="secrets-bottom">
            <div id="bottom-indicator">
              <div id="navigation-secrets">
                <p>Secrets</p>
              </div>
              <div id="add-folders">
                {userList.length <= 0 && <img src={folder} alt="folder" />}
                {userList.length > 0 && (
                  <Popup
                    trigger={<img src={folderPink} alt="folder" />}
                    modal
                    nested
                  >
                    {(close) => <Addfolder close={close} />}
                  </Popup>
                )}
              </div>
            </div>
            <div>
              <div id="secretcount">
                <p>{secretscount} secrets</p>
                <div id="locker">
                  <img id="locker-image" src={locker} alt="locker" />
                  <p id="locker-para">
                    Add a <span id="locker-para-span">Folder</span> and then you’ll be able to add <span id="locker-para-span"> Secrets</span> to view
                    them all here
                  </p>
                  <div id="create-secrets">
                    <div id="add-secrets">
                      {userList.length <= 0 && (
                        <button id="add-secrets-button">
                          <img id="add-secrets-image" src={add} alt="add" />
                          <p>ADD</p>
                        </button>
                      )}
                      {userList.length > 0 && (
                        <Popup
                          trigger={
                            <button id="add-secrets-pink">
                              <img
                                id="add-secrets-image-pink"
                                src={add}
                                alt="add"
                              />
                              <p>ADD</p>
                            </button>
                          }
                          modal
                          nested
                        >
                          {(close) => <Addfolder close={close} />}
                        </Popup>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
