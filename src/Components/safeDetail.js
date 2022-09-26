import React from "react";
import { useSelector } from "react-redux";
import safeImage from "../assets/shieldimage.png";

export default function SafeDetail(props) {
  const currentId = useSelector((state) => state.users.curId);
  return (
    <div id="head_secrets">
      {props.selectedSafe.length === 0 ? (
        <div id="secretshead">
          <img src={safeImage} alt="shield" />
          <div id="empty-container-secrets">
            <p id="no-safes">No Safes Created Yet</p>
            <p id="create-a-safe">
              Create a Safe to see your secrets, folders and permissions here
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
      {props.selectedSafe.map((value, index) => {
        return (
          value.id === currentId && (
            <div id="secretshead">
              <img src={safeImage} alt="shield" />

              <div id="container-secrets">
                <p id="no-safes">{value.safeName}</p>
                <p id="create-a-safe">{value.description}</p>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
}
