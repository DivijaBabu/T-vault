import shield from "../assets/shield-safe.png";
import addImage from "../assets/icon_add.png";
import React from 'react';
import { useState,useEffect } from 'react';
import { updateSafe } from '../ReduxFolder/Actions';
import { useDispatch } from 'react-redux';

export default function EditPop(props) {

    const [id, setId] = useState("");
    const [safeName, setSafeName] = useState("");
    const [owner, setOwner] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
  
    // useEffect(() => {
    //   setId(props.id);
    //   setName(props.name);
    //   setUsername(props.owner);
    //   setType(props.type);
    //   setDescription(props.description);
    // },[props.id,props.name,props.owner,props.type,props.description]);

    const updateDispatch=useDispatch();

  return (
    <div className="popup">
    <div className="popup-inner">
      <h2>Create Safe</h2>
      <div className="popup-content">
        <img src={shield} alt="shield" />
        <p>
          A Safe is a logical unit to store the secrets. All the safes are
          created within Vault. You can control access only at the safe level.
          As a vault administrator you can manage safes but cannot view the
          content of the safe.
        </p>
      </div>
      <div className="input_content">
        <p>Safe Name</p>
        <input
          id="inputvalue"
          type="text"
          placeholder="name"
          value={safeName}
          onChange={(event) => {
            setSafeName(event.target.value);
          }}
        />
        <p>Owner</p>
        <input
          id="inputvalue"
          type="text"
          placeholder="owner"
          value={owner}
          onChange={(event) => {
            setOwner(event.target.value);
          }}
        />
        <p>Type</p>
        <select
          name="cars"
          id="dropdown"
          value={type}
          onChange={(event) => {
            setType(event.target.value);
          }}
        >
          <option value="select">Select</option>
          <option value="personal">Personal</option>
          <option value="others">others</option>
        </select>
        <p>Description</p>
        <input
          id="description"
          type="text"
          placeholder="add a description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <p>Please add a minimum of 10 characters</p>
      </div>
      <div id="popup_button">
        <button id="popup_button_cancel" onClick={() => props.close()}>
          cancel
        </button>
        {(safeName.length <= 10 ||
          owner.length <= 10 ||
          description.length <= 10) && (
          <button
            type="submit"
            id="popup_button_button"
            onClick={() => {
              props.close();
            }}
          >
            Update
          </button>
        )}
        {safeName.length > 10 &&
          owner.length > 10 &&
          description.length > 10 && (
            
            <button
              type="submit"
              id="popup_button_rose"
              onClick={() => {
                updateDispatch(updateSafe({ id: id, safeName, owner, description }));
                props.close();
              }}
            >      
              update
            </button>
          )}
      </div>
    </div>
  </div>
);
}


