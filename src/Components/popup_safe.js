import React,{useState} from 'react';
import shield from "../assets/shield-safe.png";
import addicon from "../assets/icon_add.png";
export default function Popup_safe(props) {
  const [safeName,setSafeName]=useState("");
  const [owner,setOwner]=useState("");
  const [type,setType]=useState("");
  const [description,setDescription]=useState("");
// const addProduct =()=>{

// }
  return (props.trigger) ? (
      <form>  
      <div className='popup'>
      <div className='popup-inner'>
        <h2>Create Safe</h2>
        <div className='popup-content'>
          <img src={shield} alt="shield" />
          <p>A Safe is a logical unit to store the secrets. All the safes are created within Vault. You can control access only at the safe level. As a vault administrator you can manage safes but cannot view the content of the safe.</p>
        </div>
        <div className='input_content'>
          <p>Safe Name</p>
          <input id="inputvalue" type="text" value={safeName} onChange={event=>{setSafeName(event.target.value)}
          } placeholder="name" />
          <p>Owner</p>
          <input id="inputvalue" type="text" value={owner} onChange={event=>{setOwner(event.target.value)}} placeholder="owner" />
          <p>Type</p>
          <input id="inputvalue" type="text" value={type} onChange={event=>{setType(event.target.value)}} placeholder="type" />
          <p>Description</p>
          <input id="description" type="text" value={description} onchange={event=>{setDescription(event.target.value)}} placeholder="add a description" />
          <p>Please add a minimum of 10 characters</p>
        </div>
        <div id="popup_button">
          <button onClick={()=>props.setTrigger(false)}><b>cancel</b></button>
          {/* <div> */}
          <button type='submit' onClick={()=>props.setTrigger(false)}>
            <img src={addicon} alt="iconadd"/>
            <b>create</b>
            </button>
          {/* </div> */}
        </div>
      </div>
    </div>
    </form>
  ) : "";
}

