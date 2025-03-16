
import {Link} from "react-router-dom"
import styles from "./collection-card.module.css"



export default function CollectionCard({ id, title, description, image, tags }) {
  return (
    <Link to={`/courses/${id}-${title.toLowerCase().replace(/\s+/g, "-")}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={image || "/placeholder.svg"} alt={title} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.meta}>
            <div className={styles.tags}>
              {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

