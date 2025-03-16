import {Link} from "react-router-dom"
import { categories } from "./tool-data/categories"
import "./tools-categories.css"
export default function AiToolsCategories() {
  return (
    <div className="container">
      

      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; AI Tools
      </div>

      <main className="main-content2">
        <section className="hero-section">
          <h1 className="page-title">All AI Tool Categories</h1>
          <p className="subtitle">Find Most Popular and Featured Tools by Category</p>
        </section>

        <section className="categories-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.id}>
              <div className="category-img">
                <img src={category.image || "/placeholder.svg"} alt={category.title} width={200}  />
              </div>
              <div className="category-content">
                <h2 className="category-title">{category.title}</h2>
                <ul className="subcategory-list">
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory.id} className="subcategory-item">
                      <Link to={`/ai-tools/${subcategory.slug}`} className="subcategory-link">
                        {subcategory.name} <span className="count">({subcategory.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to={`/ai-tools/${category.slug}`} className="show-all-link">
                  Show all {category.title}
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="footer">
        <div className="cookie-notice">
          We use cookies to improve your experience on our site. If you continue to use this site we will assume that
          you are happy with it.
          <button className="ok-button">ok</button>
        </div>
      </footer>
    </div>
  )
}

