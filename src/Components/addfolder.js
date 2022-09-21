import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { ActionTypesFolder } from '../Redux/actionTypes';
import { v4 as uuid } from "uuid";
export default function Addfolder(props) {
  const [folderName, setFolderName] = useState("");
  const uniqueid = uuid();
  const id = uniqueid.slice(0, 6);
  const dispatch = useDispatch();
  return (
    <div id="addfolder_popup">
      <h2>Add Folder</h2>
      <p id="inputfolder">Folder Name</p>
      <input type="text" placeholder="enter folder name" />
      <p id="caution">Please enter a minimum of 3 characters lowercase alphabets numbebr and underscores only. </p>
      <div id="popup_folder_button">
        <button onClick={() => props.close()}>Cancel</button>
        {
          folderName.length <= 10 &&
          <button type="submit" className="save_before" onClick={() => { props.close(); }}>Save</button>
        }
        {
          folderName.length > 10 &&
          <button type="submit" className="save_after"
          //  onClick={() => {
          //   dispatch(ActionTypesFolder({
          //     id: id,
          //     folderName,
          //   }));
          //   props.close();
          //   setFolderName(' ');
          // }}
          >Save</button>
        }
      </div>
    </div>
  );
}
