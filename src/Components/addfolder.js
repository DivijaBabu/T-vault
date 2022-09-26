import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSecret } from "../ReduxFolder/Actions";
import { useSelector } from "react-redux";
export default function Addfolder(props) {
  const [secret, setSecret] = useState("");
  const dispatch = useDispatch();
  const curId = useSelector((state) => state.users.curId);
  return (
    <div id="addfolder_popup">
      <h2>Add Folder</h2>
      <p id="inputfolder">Folder Name</p>
      <input
        type="text"
        value={secret}
        placeholder="enter folder name"
        onChange={(e) => setSecret(e.target.value)}
      />
      <p id="caution">
        Please enter a minimum of 3 characters lowercase alphabets numbebr and
        underscores only.{" "}
      </p>
      <div id="popup_folder_button">
        <button id="popup_button_cancel" onClick={() => props.close()}>
          cancel
        </button>
        {secret.length <= 10 && (
          <button
            type="submit"
            id="popup_button_button"
            onClick={() => {
              props.close();
            }}
          >
            Create
          </button>
        )}
        {secret.length > 10 && (
          <button
            type="submit"
            id="popup_button_rose"
            onClick={() => {
              dispatch(
                addSecret({
                  curId: curId,
                  secret,
                })
              );
              props.close();
            }}
          >
            Create
          </button>
        )}
      </div>
    </div>
  );
}
