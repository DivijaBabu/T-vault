import {useSelector,useDispatch} from "react-redux";
import search from "../assets/icon_search.png";
import { useState } from "react";
import { addSafe } from "../ReduxFolder/Actions";
export default function SearchBar({ setItem }) {
 const safes = useSelector((state) => state.add.safesList);
     const [search, setSearch] = useState("");
    const filterData = useSelector((state) => state.add.filteredList);
    const dispatch = useDispatch();
    const searchData = (value) => {
     setSearch(value);
     dispatch(addSafe(value));
     };
     if (search !== "") {
     setItem(filterData);
     } else {
     setItem("");
     }
    
     return (
        <div id="searchbar">
        <img src={search} alt="search" />
        <input type="text" placeholder="Search" 
onChange={(e) => searchData(e.target.value)}
value={search}
        />
      </div>
     );
    }
    