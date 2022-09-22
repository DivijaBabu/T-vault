import React from "react";
import safeImage from "../assets/shieldimage.png";


export default function safeDetail (props) {
    
  return (
    
    <div id="head_secrets">
        {props.selectedSafe.length===0?
      <div id="secretshead">
        <img src={safeImage} alt="shield" />
        <div id="empty-container-secrets">
          <p id="no-safes">No Safes Created Yet</p>
          <p id="create-a-safe">
            Create a Safe to see your secrets, folders and permissions here
          </p>
        </div>
      </div>:
      <div id="secretshead">
      <img src={safeImage} alt="shield" />
      <div id="container-secrets">
        <p id="no-safes">{props.selectedSafe[0].safeName}</p>
        <p id="create-a-safe">
          {props.selectedSafe[0].description}
        </p>
      </div>
      </div>

}
    </div>
  );
};
