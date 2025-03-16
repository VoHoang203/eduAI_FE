
import React from "react"

import styles from "./search-bar.module.css"


export default function SearchBar({ value, onChange, onClear }) {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search collections..."
        value={value}
        onChange={onChange}
        className={styles.searchInput}
      />
      {value && (
        <button onClick={onClear} className={styles.clearButton}>
          ✕
        </button>
      )}
      <button className={styles.searchButton}>🔍</button>
    </div>
  )
}
