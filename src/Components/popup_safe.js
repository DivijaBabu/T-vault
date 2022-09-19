import React from 'react';
import shield from "../assets/shield-safe.png";
export default function Popup_safe(props) {
const handlesubmit=(event)=>{
  event.preventDefault();
}
  return (props.trigger) ? (
      <form onsubmit={handlesubmit}>  
      <div className='popup'>
      <div className='popup-inner'>
        <h2>Create Safe</h2>
        <div className='popup-content'>
          <img src={shield} alt="shield" />
          <p>A Safe is a logical unit to store the secrets. All the safes are created within Vault. You can control access only at the safe level. As a vault administrator you can manage safes but cannot view the content of the safe.</p>
        </div>
        <div className='input_content'>
          <p>Safe Name</p>
          <input id="inputvalue" type="text"  placeholder="name" />
          <p>Owner</p>
          <input id="inputvalue" type="text"  placeholder="owner" />
          <p>Type</p>
          <input id="inputvalue" type="dropdown"  placeholder="type" />
          <p>Description</p>
          <input id="description" type="text"  placeholder="add a description" />
          <p>Please add a minimum of 10 characters</p>

        </div>
        <div id="popup_button">
          <button onClick={()=>props.setTrigger(false)}>cancel</button>
          <button type='submit' onClick={()=>props.setTrigger(false)}>create</button>
        </div>
      </div>
    </div>
    </form>
  ) : "";
}
