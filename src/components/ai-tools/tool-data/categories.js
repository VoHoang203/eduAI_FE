import productivity from "../../../assets/productivity.png"
import videoai from "../../../assets/videoai.png"
import textai from "../../../assets/textai.png"
import business from "../../../assets/businessai.jpg"
import imgai from "../../../assets/imgai.jpg"
export const categories = [
  {
    id: 1,
    title: "AI Productivity Tools",
    slug: "productivity",
    image: productivity,
    subcategories: [
      { id: 101, name: "Personal Assistant", slug: "personal-assistant", count: 156 },
      { id: 102, name: "Research", slug: "research", count: 241 },
      { id: 103, name: "Spreadsheets", slug: "spreadsheets", count: 33 },
      { id: 104, name: "Translator", slug: "translator", count: 40 },
      { id: 105, name: "Presentations", slug: "presentations", count: 28 },
    ],
  },
  {
    id: 2,
    title: "AI Video Tools",
    slug: "video",
    image: videoai,
    subcategories: [
      { id: 201, name: "Video Enhancer", slug: "video-enhancer", count: 24 },
      { id: 202, name: "Video Editing", slug: "video-editing", count: 89 },
      { id: 203, name: "Video Generators", slug: "video-generators", count: 82 },
      { id: 204, name: "Text To Video", slug: "text-to-video", count: 36 },
    ],
  },
  {
    id: 3,
    title: "AI Text Generators",
    slug: "text-generators",
    image: textai,
    subcategories: [
      { id: 301, name: "Prompt Generators", slug: "prompt-generators", count: 21 },
      { id: 302, name: "Writing Generators", slug: "writing-generators", count: 128 },
      { id: 303, name: "Paraphrasing", slug: "paraphrasing", count: 15 },
      { id: 304, name: "Storyteller", slug: "storyteller", count: 19 },
      { id: 305, name: "Copywriting", slug: "copywriting", count: 85 },
    ],
  },
  {
    id: 4,
    title: "AI Business Tools",
    slug: "business",
    image: business,
    subcategories: [
      { id: 401, name: "Website Builders", slug: "website-builders", count: 36 },
      { id: 402, name: "Marketing", slug: "marketing", count: 357 },
      { id: 403, name: "Finance", slug: "finance", count: 133 },
      { id: 404, name: "Project Management", slug: "project-management", count: 134 },
      { id: 405, name: "Social Media", slug: "social-media", count: 159 },
    ],
  },
  {
    id: 5,
    title: "AI Image Tools",
    slug: "image",
    image: imgai,
    subcategories: [
      { id: 501, name: "Design Generators", slug: "design-generators", count: 155 },
      { id: 502, name: "Image Generators", slug: "image-generators", count: 118 },
      { id: 503, name: "Image Editing", slug: "image-editing", count: 103 },
      { id: 504, name: "Text To Image", slug: "text-to-image", count: 34 },
    ],
  },
  {
    id: 6,
    title: "Automation Tools",
    slug: "automation",
    image: imgai,
    subcategories: [
      { id: 601, name: "Workflows", slug: "workflows", count: 239 },
      { id: 602, name: "AI Agents", slug: "ai-agents", count: 259 },
    ],
  },
]

