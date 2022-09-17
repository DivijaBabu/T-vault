import React from 'react'
import shield from "../assets/shield-safe.png";
export default function popup_safe(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <h2>Create Safe</h2>
        <div className='popup-content'>
          <img src={shield} alt="shield" />
          <p>A Safe is a logical unit to store the secrets. All the safes are created within Vault. You can control access only at the safe level. As a vault administrator you can manage safes but cannot view the content of the safe.</p>
        </div>
        <div className='input_content'>
          <p>Safe Name</p>
          <input type="text" placeholder="name" />
          <p>Owner</p>
          <input type="text" placeholder="owner" />
          <p>Type</p>
          <input type="text" placeholder="type" />
          <p>Description</p>
          <input type="text" placeholder="add a description" />
          <p>Please add a minimum of 10 characters</p>

        </div>
        <div id="popup_button">
          <button>cancel</button>
          <button>create</button>
        </div>
      </div>
    </div>
  ) : "";
}

