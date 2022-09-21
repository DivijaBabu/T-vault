import Iconsafe from './icon_image.png';
import './createform.css';
import Popup from 'reactjs-popup'
import React from 'react';
import Edit from './edit-xxl.png';
import { useState,useEffect } from 'react';
import { updateSafe } from '../features/Users';
import { useDispatch } from 'react-redux';

export default function EditPop(props) {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    // const [owner, setOwner] = useState("");
    const[username,setUsername]=useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
  
    useEffect(() => {
      setId(props.id);
      setName(props.name);
      setUsername(props.owner);
      setType(props.type);
      setDescription(props.description);
    },[props.id,props.name,props.owner,props.type,props.description]);

    const dispatch=useDispatch();

  return (
    <div>
          <Popup trigger={ <img src={Edit} className="edit_button" alt="edit"></img>}>
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
              <img src={addImage} alt="addimage" />
              Create
            </button>
          )}
     
          {safeName.length > 10 &&
            owner.length > 10 &&
            description.length > 10 && (
              
              <button
                type="submit"
                id="popup_button_rose"
                onClick={() => {
                  dispatch(addSafe({ id: id, safeName, owner, description }));
                  props.close();
                }}
              >
                    
                <img src={addImage} alt="addimage"/>
                Create
              </button>
            )}
        </div>
      </div>
    </div>
   </Popup> 

    </div>
  )
}


