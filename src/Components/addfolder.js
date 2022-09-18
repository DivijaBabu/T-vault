import React from 'react'
export default function Addfolder(props) {
  return (props.trigger)?(
    <form>
    <div id="addfolder_popup">
        <h2>Add Folder</h2>
        <p id="inputfolder">Folder Name</p>
        <input type="text" placeholder="enter folder name"/>
        <p id="caution">Please enter a minimum of 3 characters lowercase alphabets numbebr and underscores only. </p>
        <div id="popup_folder_button">
            <button onClick={()=>props.setTrigger(false)}>Cancel</button>
            <button onClick={()=>props.setTrigger(false)}>Save</button>
        </div>
    </div>
    </form>
  ):"";
}
