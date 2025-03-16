
import { useState } from "react"
import styles from "./filter-dropdown.module.css"



export default function FilterDropdown({ options, selected, onSelect }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownToggle} onClick={() => setIsOpen(!isOpen)}>
        {selected} ▼
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {options.map((option) => (
            <button
              key={option}
              className={`${styles.dropdownItem} ${selected === option ? styles.active : ""}`}
              onClick={() => {
                onSelect(option)
                setIsOpen(false)
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

