import { useParams } from "react-router-dom";
export default function Vault(){
    const idvalues =useParams();
    return (
    <div id="bodycontainer"> 
    <p>Vault AppRoles</p>
    <p>data={idvalues.id}</p>
    </div>
    )
}