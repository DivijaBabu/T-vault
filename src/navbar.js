import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Safes from "./Components/safes";
import Vault from "./Components/vault";
import Service from "./Components/service";
import IamService from "./Components/iam";
import Azure from "./Components/azure";
import tvaultlogo from "./assets/Logo.png";
import Documentation from "./assets/document.png";
import Account from "./assets/account.png";
export default function Navbar() {
  return (
    <Router>
      <header>
        <div id="tvaultimage">
          <img src={tvaultlogo} alt="tvaultlogo" />
          <p>T-VAULT</p>
        </div>
        <div className="nav">
 <ul className="nav_list">
       <NavLink to="/safes" activeClassName="active">
              <li>Safes</li>
            </NavLink>
          <NavLink to="/vault/divija" activeClassName="active">
              <li>Vault App Roles</li>
            </NavLink>

            <NavLink to="/Service" activeClassName="active">
              <li>Service Accounts</li>
            </NavLink>
            <NavLink to="/IamService" activeClassName="active">
              <li>IAM Service Accounts</li>
            </NavLink>

            <NavLink to="/Azure" activeClassName="active">
              <li> Azure Active Directory</li>
            </NavLink>
          </ul>
        </div>
        <div id="accounts">
          <div id="documents">
            <img src={Documentation} alt="document" height="16px" />
            <p>Documentation</p>
          </div>
          <div id="documents">
            <img src={Account} alt="accounts" height="20px" />
            <p>(Admin) Davis R.</p>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/safes" element={<Safes />} />
        <Route path="/Vault/:id" element={<Vault />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/IamService" element={<IamService />} />
        <Route path="/Azure" element={<Azure />} />
      </Routes>
    </Router>
  );
}
