
import { useState } from "react"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
import CollectionCard from "./collection-card"
import SearchBar from "./search-bar"
import FilterDropdown from "./filter-dropdown"
import styles from "./collections-page.module.css"

// Sample data for courses
const coursesData = [
  {
    id: 1,
    title: "Ultimate Guide to Generative AI",
    description: "Learn the fundamentals and advanced techniques of generative AI models",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["AI", "Beginner", "Popular"],
  },
  {
    id: 2,
    title: "Mastering Prompt Engineering",
    description: "Become an expert in crafting effective prompts for AI models",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Prompts", "Intermediate", "AI"],
  },
  {
    id: 3,
    title: "AI for Content Creation",
    description: "Use AI tools to enhance your content creation workflow",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Content", "Beginner", "AI"],
  },
  {
    id: 4,
    title: "Advanced Video Generation",
    description: "Create professional videos using the latest AI video generation tools",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Video", "Advanced", "AI"],
  },
  {
    id: 5,
    title: "Data Analysis with AI",
    description: "Learn how to leverage AI for powerful data analysis and insights",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Data", "Intermediate", "AI"],
  },
  {
    id: 6,
    title: "AI for Educators",
    description: "Discover how AI can transform teaching and learning experiences",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Education", "Beginner", "AI"],
  },
]

export default function CollectionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("All")

  const filters = ["All", "Popular", "Beginner", "Intermediate", "Advanced"]

  const filteredCourses = coursesData.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.pageLayout}>
        <Sidebar />
        <main className={styles.main}>
          <div className={styles.hero}>
            <h1 className={styles.title}>AI Courses</h1>
            <p className={styles.subtitle}>Discover expert-led courses to master AI tools and enhance your skills</p>
          </div>

          <div className={styles.searchContainer}>
            <SearchBar
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClear={() => setSearchTerm("")}
            />
            <FilterDropdown options={filters} selected={selectedFilter} onSelect={setSelectedFilter} />
          </div>

          <div className={styles.collectionsGrid}>
            {filteredCourses.map((course) => (
              <CollectionCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                tags={course.tags}
              />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

