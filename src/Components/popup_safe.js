import React from "react";
import shield from "../assets/shield-safe.png";
import { addSafe, setCurId } from "../ReduxFolder/Actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuid } from "uuid";
export default function Popup_safe(props) {
  const dispatch = useDispatch();
  const uniqueid = uuid();
  const id = uniqueid.slice(0, 6);
  const [safeName, setSafeName] = useState("");
  const [owner, setOwner] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [secret] = useState([]);
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Create Safe</h2>
        <div className="popup-content">
          <img src={shield} alt="shield" />
          <p id="input_content_p">
            A Safe is a logical unit to store the secrets. All the safes are
            created within Vault. You can control access only at the safe level.
            As a vault administrator you can manage safes but cannot view the
            content of the safe.
          </p>
        </div>
        <div className="input_content">
          <p id="input_content_p">Safe Name</p>
          <input
            id="inputvalue"
            type="text"
            placeholder="Safe Name"
            value={safeName}
            onChange={(event) => {
              setSafeName(event.target.value);
            }}
          />
          <p id="input_content_p">Owner</p>
          <input
            id="inputvalue"
            type="text"
            placeholder="Owner"
            value={owner}
            onChange={(event) => {
              setOwner(event.target.value);
            }}
          />
          <p id="input_content_p">Type</p>
          <select
            name="cars"
            id="dropdown"
            value={type}
            onChange={(event) => {
              setType(event.target.value);
            }}
          >
            <option value="personal">Personal</option>
            <option value="others">others</option>
          </select>
          <p id="input_content_p">Description</p>
          <textarea
            id="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <p id="input_content_caution">
            Please add a minimum of 10 characters
          </p>
        </div>
        <div id="popup_button">
          <button id="popup_button_cancel" onClick={() => props.close()}>
            cancel
          </button>
          {(safeName.length < 1 ||
            owner.length < 1 ||
            description.length <= 10) && (
            <button
              type="submit"
              id="popup_button_button"
              onClick={() => {
                props.close();
              }}
            >
              + Create
            </button>
          )}
          {safeName.length >= 1 &&
            owner.length >= 1 &&
            description.length > 10 && (
              <button
                type="submit"
                id="popup_button_rose"
                onClick={() => {
                  dispatch(
                    addSafe({ id: id, safeName, owner, description, secret })
                  );
                  dispatch(
                    setCurId({
                      id: id,
                    })
                  );
                  props.close();
                }}
              >
                + Create
              </button>
            )}
        </div>
      </div>
    </div>
  );
}
