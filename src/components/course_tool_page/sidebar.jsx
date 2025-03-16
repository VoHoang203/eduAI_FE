"use client"

import { useState } from "react"
import {Link} from "react-router-dom"
import styles from "./sidebar.module.css"

// Sample data for categories and popular courses
const categories = [
  { id: 1, name: "AI Fundamentals", count: 12 },
  { id: 2, name: "Prompt Engineering", count: 8 },
  { id: 3, name: "Content Creation", count: 10 },
  { id: 4, name: "Video & Audio", count: 7 },
  { id: 5, name: "Productivity", count: 9 },
  { id: 6, name: "Development", count: 6 },
  { id: 7, name: "Business", count: 5 },
  { id: 8, name: "Marketing", count: 8 },
  { id: 9, name: "Design", count: 7 },
  { id: 10, name: "Education", count: 4 },
]

const popularCourses = [
  { id: 1, name: "Ultimate Guide to Generative AI" },
  { id: 2, name: "Mastering Prompt Engineering" },
  { id: 3, name: "AI for Content Creation" },
  { id: 4, name: "Advanced Video Generation" },
  { id: 5, name: "Data Analysis with AI" },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button className={styles.toggleButton} onClick={toggleSidebar} aria-label="Toggle sidebar">
        {isOpen ? "✕" : "☰"}
      </button>

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.sidebarContent}>
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Browse</h3>
            <ul className={styles.sidebarMenu}>
              <li className={styles.sidebarMenuItem}>
                <Link to="/courses" className={`${styles.sidebarMenuLink} ${styles.active}`}>
                  All Courses
                </Link>
              </li>
              <li className={styles.sidebarMenuItem}>
                <Link to="/free-courses" className={styles.sidebarMenuLink}>
                  Free Courses
                </Link>
              </li>
              <li className={styles.sidebarMenuItem}>
                <Link to="/new-courses" className={styles.sidebarMenuLink}>
                  New Courses
                </Link>
              </li>
              <li className={styles.sidebarMenuItem}>
                <Link to="/popular-courses" className={styles.sidebarMenuLink}>
                  Popular Courses
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Categories</h3>
            <ul className={styles.sidebarMenu}>
              {categories.map((category) => (
                <li key={category.id} className={styles.sidebarMenuItem}>
                  <Link to={`/category/${category.id}`} className={styles.sidebarMenuLink}>
                    {category.name}
                    <span className={styles.categoryCount}>{category.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Popular Courses</h3>
            <ul className={styles.sidebarMenu}>
              {popularCourses.map((course) => (
                <li key={course.id} className={styles.sidebarMenuItem}>
                  <Link
                    to={`/courses/${course.id}-${course.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={styles.sidebarMenuLink}
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sidebarSection}>
            <div className={styles.newsletterBox}>
              <h3 className={styles.newsletterTitle}>Stay Updated</h3>
              <p className={styles.newsletterText}>
                Subscribe to our newsletter to get the latest updates on new AI courses.
              </p>
              <div className={styles.newsletterForm}>
                <input type="email" placeholder="Your email" className={styles.newsletterInput} />
                <button className={styles.newsletterButton}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}
    </>
  )
}

