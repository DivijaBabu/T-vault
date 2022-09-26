import shield from "../assets/shield-safe.png";
import React from "react";
import { useState } from "react";
import { updateSafe } from "../ReduxFolder/Actions";
import { useDispatch } from "react-redux";
import Popup from "reactjs-popup";
import editImage from "../assets/editimage.png";
export default function EditPop(props) {
  const [id] = useState(props.id);
  const [safeName, setSafeName] = useState(props.safeName);
  const [owner, setOwner] = useState(props.owner);
  const [type, setType] = useState(props.type);
  const [description, setDescription] = useState(props.description);
  const updateDispatch = useDispatch();
  const [secret] = useState(props.secret);
  return (
    <div>
      <Popup
        trigger={
          <div className="deleteImagebg">
            <img id="editanddeletebutton_img" src={editImage} alt="edit" />
          </div>
        }
        modal
        nested
      >
        {(close) => (
          <div className="popup">
            <div className="popup-inner">
              <h2>Create Safe</h2>
              <div className="popup-content">
                <img src={shield} alt="shield" />
                <p>
                  A Safe is a logical unit to store the secrets. All the safes
                  are created within Vault. You can control access only at the
                  safe level. As a vault administrator you can manage safes but
                  cannot view the content of the safe.
                </p>
              </div>
              <div className="input_content">
                <p>Safe Name</p>
                <input
                  id="inputvalue"
                  type="text"
                  placeholder="name"
                  value={safeName}
                  onChange={(event) => {
                    setSafeName(event.target.value);
                  }}
                />
                <p>Owner</p>
                <input
                  id="inputvalue"
                  type="text"
                  placeholder="owner"
                  value={owner}
                  onChange={(event) => {
                    setOwner(event.target.value);
                  }}
                />
                <p>Type</p>
                <select
                  name="cars"
                  id="dropdown"
                  value={type}
                  onChange={(event) => {
                    setType(event.target.value);
                  }}
                >
                  <option value="select">Select</option>
                  <option value="personal">Personal</option>
                  <option value="others">others</option>
                </select>
                <p>Description</p>
                <textarea
                  id="description"
                  type="text"
                  placeholder="add a description"
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
                <p>Please add a minimum of 10 characters</p>
              </div>
              <div id="popup_button">
                <button
                  type="button"
                  id="popup_button_cancel"
                  onClick={() => close()}
                >
                  cancel
                </button>
                <button
                  type="submit"
                  id="popup_button_rose"
                  onClick={() => {
                    updateDispatch(
                      updateSafe({
                        id: id,
                        safeName: safeName,
                        owner: owner,
                        type: type,
                        description: description,
                        secret: secret,
                      })
                    );
                    close();
                  }}
                >
                  update
                </button>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
