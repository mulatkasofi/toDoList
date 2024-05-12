import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQueryValue } from "../../store/tasks/tasks.reducer";

import styles from "./SearchInput.module.css";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  // Handles input changes and updates the search query in the redux store
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setSearch(value);
    dispatch(setQueryValue(value)); // Dispatch the action to update the query in the store
  };

  return (
    <div className={styles.searchInputWrap}>
      <input
        type="text"
        name="search"
        placeholder="Поиск по задачам"
        className={styles.searchInput}
        value={search}
        onChange={handleChangeInput}
      />
    </div>
  );
};

export default SearchInput;
