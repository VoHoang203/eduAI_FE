import {Link} from "react-router-dom"
import { categories } from "./tool-data/categories"
import "./tools-categories.css"
import logo from "../../assets/logo.png"
export default function AiToolsCategories() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <img
              src={logo}
              alt="Futurepedia Logo"
              width={40}
              height={40}
              className="logo"
            />
            <h1 className="site-name">EduAI</h1>
          </div>

          <nav className="main-nav">
            <Link to="/" className="nav-link">
              AI Tools
            </Link>
            <Link to="/business" className="nav-link">
              AI for Business
            </Link>
            {/* <div className="nav-link new-badge">
              AI Courses
              <span className="badge">NEW</span>
            </div> */}
            <Link to="/courses" className="nav-link">
              Ai course
            </Link>
            <Link to="/advertise" className="nav-link">
              Advertise
            </Link>
            <Link to="/resources" className="nav-link">
              Resources
            </Link>
          </nav>

          <div className="auth-buttons">
            <Link to="/login" className="login-button">
              Login
            </Link>
            <Link to="/signup" className="signup-button">
              Sign up for free
            </Link>
          </div>
        </div>
      </header>

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

