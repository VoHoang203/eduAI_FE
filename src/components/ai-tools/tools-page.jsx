import {Link} from "react-router-dom"
import { categories } from "./tool-data/categories.js"
import { tools } from "./tool-data/tools.js"
import "./tools-categories.css"
import { useParams } from "react-router-dom";
// eslint-disable-next-line
export default function CategoryPage({ id,slug }) {
  const params = useParams();
  const category = categories.find((cat) => cat.slug === params.slug)
  const categoryTools = tools.filter((tool) => tool.category === params.slug)
  if (!category) {
    return <div className="container">Category not found</div>
  }

  return (
    <div className="container">

      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; <Link to="/ai-tools">AI Tools</Link> &gt; {category.title}
      </div>

      <main className="main-content2">
        <section className="hero-section">
          <h1 className="page-title">{category.title}</h1>
          <p className="subtitle">Discover the best {category.title.toLowerCase()} to enhance your workflow</p>
        </section>

        <section className="subcategories">
          <div className="subcategory-filters">
            {category.subcategories.map((subcategory) => (
              <Link
                to={`/ai-tools/${category.slug}?subcategory=${subcategory.slug}`}
                key={subcategory.id}
                className="subcategory-filter"
              >
                {subcategory.name} ({subcategory.count})
              </Link>
            ))}
          </div>
        </section>

        <section className="tools-grid">
          {categoryTools.map((tool) => (
            <div className="tool-card" key={tool.id}>
              <div className="tool-logo">
                <img
                  src={tool.logo || "/placeholder.svg?height=60&width=60"}
                  alt={tool.name}
                  width={60}
                  height={60}
                />
              </div>
              <div className="tool-content">
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-description">{tool.description}</p>
                <div className="tool-tags">
                  {tool.tags.map((tag, index) => (
                    <span key={index} className="tool-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="tool-actions">
                <a to={tool.url} target="_blank" rel="noopener noreferrer" className="visit-button">
                  Visit
                </a>
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

