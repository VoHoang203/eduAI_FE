
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import ProfilePage from './components/ProfilePage';
import CollectionsPage from './components/course_tool_page/CollectionPage';
import CourseDetailPage from "./components/course_tool_page/courses-detail-page"
import AiToolsCategories from "./components/ai-tools/ai-tools-categories"
import CategoryPage from './components/ai-tools/tools-page'; 
/* eslint-disable */
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/courses" element={<CollectionsPage />} />
      <Route path="/courses/:id" element={<CourseDetailPage/>} />
      <Route path="/ai-tools" element={<AiToolsCategories />} />
      <Route path="/ai-tools/:slug" element={<CategoryPage />} />
    </Routes>
  </BrowserRouter>,
)
