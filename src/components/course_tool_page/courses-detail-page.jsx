import {Link} from "react-router-dom"
// import Footer from "./components/footer"
import Sidebar from "./sidebar"
import styles from "./course-detail.module.css"
import courses from "../../assets/aiCoures.jpg"
import profile from "../../assets/profile2.jpg"
const courseData = {
  id: 1,
  title: "Ultimate Guide to Generative AI",
  description: "Learn the fundamentals and advanced techniques of generative AI models",
  longDescription:
    "This comprehensive course covers everything you need to know about generative AI, from basic concepts to advanced applications. You'll learn about different types of generative models, how they work, and how to use them effectively in your projects.",
  image: courses|| "/placeholder.svg?height=400&width=800",
  instructor: "Hoàng Minh",
  instructorTitle: "AI Research Scientist",
  instructorImage: {profile},
  duration: "8 weeks",
  level: "Beginner to Intermediate",
  price: "$99",
  rating: 4.8,
  reviewCount: 245,
  tags: ["AI", "Beginner", "Popular"],
  modules: [
    {
      title: "Introduction to Generative AI",
      lessons: ["What is Generative AI?", "History and Evolution of Generative Models", "Types of Generative Models"],
    },
    {
      title: "Understanding Neural Networks",
      lessons: ["Basic Neural Network Architecture", "Training Neural Networks", "Optimization Techniques"],
    },
    {
      title: "Generative Adversarial Networks (GANs)",
      lessons: ["GAN Architecture", "Training GANs", "Common Challenges and Solutions"],
    },
    {
      title: "Diffusion Models",
      lessons: ["Understanding Diffusion Models", "Stable Diffusion", "Practical Applications"],
    },
    {
      title: "Large Language Models",
      lessons: ["Introduction to LLMs", "How LLMs Generate Text", "Fine-tuning LLMs"],
    },
  ],
}

export default function CourseDetailPage({image }) {


  return (
    <div className={styles.container}>
      <div className={styles.pageLayout}>
        <Sidebar />
        <main className={styles.main}>
          <div className={styles.courseHeader}>
            <div className={styles.breadcrumbs}>
              <Link to="/courses">Courses</Link> / {courseData.title}
            </div>
            <h1 className={styles.courseTitle}>{courseData.title}</h1>
            <p className={styles.courseDescription}>{courseData.description}</p>

            <div className={styles.courseMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Instructor:</span>
                <span className={styles.metaValue}>{courseData.instructor}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Duration:</span>
                <span className={styles.metaValue}>{courseData.duration}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Level:</span>
                <span className={styles.metaValue}>{courseData.level}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Rating:</span>
                <span className={styles.metaValue}>
                  {courseData.rating} ({courseData.reviewCount} reviews)
                </span>
              </div>
            </div>

            <div className={styles.tags}>
              {courseData.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.courseContent}>
            <div className={styles.courseImageContainer}>
              <img src={image||courseData.image || "/placeholder.svg"} alt={courseData.title} className={styles.courseImage} />
            </div>

            <div className={styles.courseDetails}>
              <div className={styles.detailsLeft}>
                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>About This Course</h2>
                  <p className={styles.sectionContent}>{courseData.longDescription}</p>
                </section>

                <section className={styles.section}>
                  <h2 className={styles.sectionTitle}>Course Content</h2>
                  <div className={styles.modules}>
                    {courseData.modules.map((module, index) => (
                      <div key={index} className={styles.module}>
                        <h3 className={styles.moduleTitle}>
                          Module {index + 1}: {module.title}
                        </h3>
                        <ul className={styles.lessons}>
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className={styles.lesson}>
                              {lesson}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className={styles.detailsRight}>
                <div className={styles.enrollCard}>
                  <div className={styles.price}>{courseData.price}</div>
                  <button className={styles.enrollButton}>Enroll Now</button>
                  <button className={styles.wishlistButton}>Add to Wishlist</button>

                  <div className={styles.instructorCard}>
                    <div className={styles.instructorImageContainer}>
                      <img
                        src={profile || courseData.instructorImage || "/placeholder.svg"}
                        alt={courseData.instructor}
                        className={styles.instructorImage}
                      />
                    </div>
                    <div className={styles.instructorInfo}>
                      <div className={styles.instructorName}>{courseData.instructor}</div>
                      <div className={styles.instructorTitle}>{courseData.instructorTitle}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

