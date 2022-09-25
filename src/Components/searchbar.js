import { useSelector, useDispatch } from "react-redux";
import searchicon from "../assets/icon_search.png";
import { useState } from "react";
import { addSafe } from "../ReduxFolder/Actions";
export default function SearchBar({ setItem }) {
  const safes = useSelector((state) => state.add.addSafe);
  const [search, setSearch] = useState("");
  const filteredData = useSelector((state) => state.safes.value);
  const dispatch = useDispatch();
  const searchData = (value) => {
    setSearch(value);
    dispatch(addSafe(value));
  };
  if (search !== "") {
    setItem(filteredData);
  } else {
    setItem("");
  }

  return (
    <div id="searchbar">
      <img src={searchicon} alt="search" />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => searchData(e.target.value)}
        value={search}
      />
    </div>
  );
}
