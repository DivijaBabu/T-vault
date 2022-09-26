import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import safeImage from "../assets/shieldimage.png";

export default function SafeDetail() {
  const currentId = useSelector((state) => state.users.curId);
  const userList = useSelector((state) => state.users.value);
  const [safeId, setSafeId] = useState([]);
  useEffect(() => {
    setSafeId(currentId);
  }, [userList]);
  return (
    <div id="head_secrets">
      {userList.length === 0 ? (
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
      {userList.map((value) => {
        return value.id === currentId ? (
          <div id="secretshead">
            <img src={safeImage} alt="shield" />
            <div id="container-secrets">
              <p id="no-safes">{value.safeName}</p>
              <p id="create-a-safe">{value.description}</p>
            </div>
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
}
