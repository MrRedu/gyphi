import ProTypes from "prop-types";

import { useState } from "react";
import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";

export const SearchBar = ({ addCategory }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const strg = e.target.value;
    setQuery(strg);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim().length < 2) return;
    addCategory(query.trim());
    setQuery("");
  };

  return (
    <form action="" onSubmit={handleSubmit} className={styles["form"]}>
      <div className={styles["container"]}>
        <input
          className={styles["input"]}
          type="text"
          placeholder="Search all the GIFs"
          value={query}
          name="query"
          onChange={handleChange}
          autoComplete="off" /* ?? */
        />
        <button
          className={styles["button"]}
          type="button"
          onClick={handleSubmit}
        >
          <Search icon="search" />
        </button>
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  addCategory: ProTypes.func,
};
