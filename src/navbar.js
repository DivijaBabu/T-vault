import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Safes from "./Components/safes";
import Vault from "./Components/vault";
import Service from "./Components/service";
import IamService from "./Components/iam";
import Azure from "./Components/azure";
import tvaultlogo from './assets/Logo.png';
import Documentation from './assets/document.png';
import Account from './assets/account.png';
import Vector from './assets/Vector.png';
export default function Navbar() {
  return (
    <Router>
      <header>
        <div id ="tvaultimage">
          <img src={tvaultlogo} alt="tvaultlogo" />
          <p>T-VAULT</p>
          </div>
        <nav> 
          <li id="actived"> 
           <Link to="/Safes">Safes </Link>
          </li> 
          <li>
          <Link to="/Vault">VaultAppRoles </Link>
          </li> 
          <li>
          <Link to="/Service">ServiceAccounts </Link>
          </li> 
          <li>
          <Link to="/IamService">IAMServiceAccounts </Link>
          </li> 
          <li>
          <Link to="/Azure">AzureActiveDirectory </Link>
          </li> 

        </nav>
        <div id="accounts">
            <div id="documents">
              <img src={Documentation} alt="document" height="16px" />
              <p>Documentation</p>
            </div>
            <div id="documents">
              <img src={Account} alt="accounts" height="20px" />
              <p>(Admin) Davis R.</p>
              <img id='vector' src={Vector} alt="vector" />
            </div>
          </div>
      </header>
      <Routes>
        <Route path="/Safes" element={<Safes />} />
        <Route path="/Vault" element={<Vault />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/IamService" element={<IamService />} />
        <Route path="/Azure" element={<Azure />} />
      </Routes>
    </Router>

  );
}
