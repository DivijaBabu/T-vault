import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import shield from "../assets/shield-safe.png";

export default function Popup_safe(props) {
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
          <button type='submit'>create</button>
        </div>
      </div>
    </div>
  );
};




























