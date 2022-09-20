import React from 'react';
import shield from "../assets/shield-safe.png";
import addImage from "../assets/icon_add.png";
import { useDispatch } from 'react-redux';
import { addSafe } from '../Redux/actionTypes';
import { useState } from 'react';
import { v4 as uuid } from "uuid";
export default function Popup_safe(props) {
  const uid = uuid();
  const id = uid.slice(0, 6);
  const [safeName, setSafeName] = useState("");
  const [owner, setOwner] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const [blankpage, setBlankpage] = useState('add_button_1');
  const update_blank = () => {
    setBlankpage('add_button_update')
  }
  return (
    <div className='popup'>
      <div className='popup-inner'>
        <h2>Create Safe</h2>
        <div className='popup-content'>
          <img src={shield} alt="shield" />
          <p>A Safe is a logical unit to store the secrets. All the safes are created within Vault. You can control access only at the safe level. As a vault administrator you can manage safes but cannot view the content of the safe.</p>
        </div>
        <div className='input_content'>
          <p>Safe Name</p>
          <input id="inputvalue" type="text" placeholder="name" />
          <p>Owner</p>
          <input id="inputvalue" type="text" placeholder="owner" />
          <p>Type</p>
          <select name="cars" id="dropdown">
            <option value="select">Select</option>
            <option value="personal">Personal</option>
            <option value="others">others</option>
          </select>
          <p>Description</p>
          <input id="description" type="text" placeholder="add a description" />
          <p>Please add a minimum of 10 characters</p>
        </div>
        <div id="popup_button">
          <button onClick={() => props.close()} >cancel</button>
          {
            (safeName.length <= 10 || owner.length <= 10 || description.length <= 10) &&
            <button type="submit" className="create_button_grey" onClick={() => { props.close(); }}><img src={addImage} alt="addimage" />
              Create</button>
          }
          {
            (safeName.length > 10 && owner.length > 10 && description.length > 10) &&
            <button type="submit" className="create_button_rose" onClick={() => {
              dispatch(addSafe({
                id: id, safeName, owner, type, description,
              }))
              props.close(); 
              setSafeName(' '); setOwner(' '); setType(' '); setDescription(' ');
            }} ><img src={addImage} alt="addimage" />create</button>
          }
        </div>
      </div>
    </div>
  );
};