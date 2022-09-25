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
import secretFolder from "../assets/foldersecrets.png";
import ListSafe from "../assets/shield-safe.png";
import folderPink from "../assets/folderpink.png";
import deleteImage from "../assets/deleteimage.png";
import { useSelector, useDispatch } from "react-redux";
import { deleteSafe, setCurId, deleteSecret } from "../ReduxFolder/Actions";
import NofolderSafe from "../assets/noresultfoundimage.png";
import EditPop from "../Components/EditPopupSafe";
import SafeDetail from "./safeDetail";
import { debounce } from "lodash";
export default function Safes() {
  const [blankpage, setBlankpage] = useState("addbutton");
  const update_blank = () => {
    setBlankpage("button_update");
  };
  const [selectedSafe, setSelectedSafe] = useState([]);
  const deletedispatch = useDispatch();
  const secretDispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const currentId = useSelector((state) => state.users.curId);
  useEffect(() => {
    if (currentId !== "" && userList && userList.length) {
      const filteredSafe = userList.filter((item) => item.id === currentId);
      setSelectedSafe(filteredSafe);
    }
  }, [currentId]);
  const secretList = useSelector((state) => state.users.value);
  const count = userList.length;
  const [searchItem, setNewItem] = useState("");
  const handleText = debounce((text) => {
    setNewItem(text);
  }, 1000);
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
              <input
                type="text"
                placeholder="Search"
                onChange={(event) => {
                  handleText(event.target.value);
                }}
              />
            </div>
          </div>
          <div className={userList <= 0 ? "computer" : "Listcomputer"}>
            {userList.length <= 0 && (
              <div>
                <img id="image_computer" src={computer} alt="search" />
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

            {userList.filter((user) => {
              if (
                user.safeName
                  .toLocaleLowerCase()
                  .includes(searchItem.toLocaleLowerCase())
              ) {
                return user;
              }
            }).length === 0 &&
              userList.length > 0 && (
                <div className="noresultfound">
                  <div> No Safe Found!</div>
                  <img src={NofolderSafe} alt="nosafeimage" />
                </div>
              )}
            {userList
              .filter((user) => {
                if (
                  user.safeName
                    .toLocaleLowerCase()
                    .includes(searchItem.toLocaleLowerCase())
                ) {
                  return user;
                }
              })
              .map((user) => {
                return (
                  <div
                    className={
                      currentId === user.id ? "activesafe" : "safes-list"
                    }
                    onClick={() => {
                      deletedispatch(setCurId({ id: user.id }));
                    }}
                    key={user.id}
                  >
                    <div className="listcontainer">
                      <div id="shieldimage">
                        <img src={ListSafe} alt="safe" />
                      </div>
                      <div id="nameandowner">
                        <div>{user.safeName}</div>
                        <div id="greytext">
                          <p>Last Updated: a few seconds ago</p>
                        </div>
                      </div>
                      <div id="editanddeletebutton">
                        <EditPop
                          id={user.id}
                          safeName={user.safeName}
                          owner={user.owner}
                          type={user.type}
                          description={user.description}
                          secret={user.secret}
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
          <SafeDetail selectedSafe={selectedSafe} />
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
              <div id="secretList">
                {secretList.map((value, index) => {
                  return (
                    value.id === currentId && (
                      <div id="secretscounting">
                        {" "}
                        {value.secret.length}
                        secrets
                      </div>
                    )
                  );
                })}
                {secretList.length === 0 && (
                  <div id="locker">
                    <img id="locker-image" src={locker} alt="locker" />
                    <p id="locker-para">
                      Add a <span id="locker-para-span">Folder</span> and then
                      you’ll be able to add{" "}
                      <span id="locker-para-span"> Secrets</span> to view them
                      all here
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
                            {(close) => (
                              <Addfolder
                                currentId={currentId.id}
                                close={close}
                              />
                            )}
                          </Popup>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {secretList.map((value) => {
                  return (
                    value.secret.length === 0 &&
                    value.id === currentId && (
                      <div id="locker">
                        <img id="locker-image" src={locker} alt="locker" />
                        <p id="locker-para">
                          Add a <span id="locker-para-span">Folder</span> and
                          then you’ll be able to add{" "}
                          <span id="locker-para-span"> Secrets</span> to view
                          them all here
                        </p>
                        <div id="create-secrets">
                          <div id="add-secrets">
                            {userList.length <= 0 && (
                              <button id="add-secrets-button">
                                <img
                                  id="add-secrets-image"
                                  src={add}
                                  alt="add"
                                />
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
                                {(close) => (
                                  <Addfolder
                                    currentId={currentId.id}
                                    close={close}
                                  />
                                )}
                              </Popup>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
                <div>
                  {secretList.map((value, index) => {
                    {
                      secretList.map((value) => {
                        return <div> {value.secret.length}</div>;
                      });
                    }
                    return value.id === currentId ? (
                      <div key={index} className="parent_secret">
                        {value.secret.map((secretsitem, index) => {
                          return (
                            <div className="secrets_container">
                              <div key={index} className="list_of_secrets">
                                <div className="image_text">
                                  <div className="folderIcon">
                                    <img
                                      className=" list_of_secrets_folder"
                                      src={secretFolder}
                                      alt="pinkfolder"
                                    />
                                  </div>
                                  <div>
                                    <p>{secretsitem}</p>
                                    <span id="lastUpdated">
                                      a few seconds ago
                                    </span>
                                  </div>
                                </div>
                                <div>
                                  <img
                                    className=" list_of_secrets_delete"
                                    src={deleteImage}
                                    alt="delete"
                                    onClick={() =>
                                      secretDispatch(
                                        deleteSecret({
                                          id: secretsitem,
                                        })
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      ""
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
