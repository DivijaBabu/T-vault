import React from "react";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { addSecret } from "../ReduxFolder/Actions";
import { v4 as uuid } from "uuid";
export default function Addfolder(props) {
  const [folderName, setFolderName] = useState("");
  const uniqueid = uuid();
  const id = uniqueid.slice(0, 6);
  const dispatch = useDispatch();
  const[blankpagefolder,setBlankpagefolder]=useState('top_folder');
  const updateBlankfolder=()=>{
    setBlankpagefolder('top_folder_update');
  }
  return (
    <div id="addfolder_popup">
      <h2>Add Folder</h2>
      <p id="inputfolder">Folder Name</p>
      <input
        type="text"
        value={folderName}
        placeholder="enter folder name"
        onChange={(e) => setFolderName(e.target.value)}
      />
      <p id="caution">
        Please enter a minimum of 3 characters lowercase alphabets numbebr and
        underscores only.{" "}
      </p>
      <div id="popup_folder_button">
        <button id="popup_button_cancel" onClick={() => props.close()}>
          cancel
        </button>
       {(folderName.length<=10&&(
         <button
         type="submit"
         id="popup_button_button"
         onClick={() => {
           props.close();
         }}
       >
         Create
       </button>
        ))}
        {(folderName.length>10&&
        (
          <button
          type="submit"
          id="popup_button_rose"
          onClick={() => {
            console.log("addsecrets");
            dispatch(addSecret({ id: id, folderName }));
            props.close();
          }}
        >
          Create
        </button>
        )
        )}
      </div>
    </div>
  );
}
