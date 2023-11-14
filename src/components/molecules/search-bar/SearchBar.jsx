import ProTypes from "prop-types";

import { useState } from "react";
import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const SearchBar = ({ addCategory, pathname }) => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const strg = e.target.value;
    setQuery(strg);
  };

  // Cambiar esto a App.jsx (?)
  // Pedir ayuda y preguntar si es correcto
  // Ya que técnicamente, la función de abajo no tiene
  // que ver directamente con el componente
  const handleSubmit = (e) => {
    e.preventDefault();
    let strg = query.trim();
    if (strg.length < 2) return;
    if (pathname === "/") {
      addCategory(strg);
    } else {
      navigate(`/category/${strg}`);
    }
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
  pathname: ProTypes.string,
};
