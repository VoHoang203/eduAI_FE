import React from "react";
import { 
  FaStore,
  FaBookmark ,
} from "react-icons/fa";

import profile from "../assets/profile2.jpg"
import postpic from "../assets/postpic.png"
import adSighBar from "../assets/adSightBar.png"
import "../styles/homepage.css";
import meta from "../assets/meta.png"
import { PiHeadCircuitLight } from "react-icons/pi"
import MuiPost from "./MUIPost";
import { Link } from "react-router-dom";
import { IoBarChartSharp } from "react-icons/io5";
//app-container
export default function HomePage() {
  return (
    <div className="">
      {/* Header */}
      
      {/* Main Content */}
      {/* <div className="hero-section">
             <div className="hero-text">
              <h2 className="hero-title">Phần mềm quản lý đơn hàng Tuha</h2>
              <h1 className="hero-subtitle">AI và sự tự động hóa trong quảng cáo Facebook</h1>
            </div> 
            
          </div> */}
      <div className="main-content">
        {/* Left Sidebar */}
        <div className="sidebar left-sidebar">
          <div className="sidebar-item">
            <Link to="/ai-tools" className="sidebar-icon purple">
              <PiHeadCircuitLight alt="AI" />
            </Link>
            <span className="sidebar-text">AI Tools</span>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-icon purple">
              <FaStore alt="AI" />
            </div>
            <span className="sidebar-text">AI Market</span>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-icon purple">
            <IoBarChartSharp />
            </div>
            <span className="sidebar-text">My AI Store</span>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-icon purple">
              <FaBookmark alt="AI" />
            </div>
            <span className="sidebar-text">Saved</span>
          </div>
          
        </div>
       
        {/* Center Content */}
        <div className="center-content">
        <div className="hero-img">
              <img src={meta} alt="Robot" className="meta-img" />
            </div>
          <MuiPost author="Hoàng Ming"
              avatar={profile}
              image={postpic}
              content="INCLUDE 3.7  Web Crawler

Tôi đã viết lại code từ Claude 3.7 Web Crawler, thay vì dùng API của Anthropic, tôi đã refactor để sử dụng dịch vụ OpenRouter..."/>

            {/* <main className="feed">
                <div class="create-post">
                    <img src="https://via.placeholder.com/40" alt="Profile" class="profile-pic"/>
                    <input type="text" placeholder="What's on your mind, John?"/>
                    <button id="postButton">Post</button>
                </div>
                <div id="posts"></div>
            </main>
                <div className="create-post">
                    <img src="https://via.placeholder.com/40" alt="Profile" className="profile-pic"/>
                    <input type="text" placeholder="What's on your mind, John?"/>
                    <button id="postButton">Post</button>
                </div> */}

          {/* <div className="post-input">
            <div className="post-input-avatar">
              <img src="/placeholder.svg?height=40&width=40" alt="User" width={40} height={40} />
            </div>
            <input type="text" placeholder="Hãy chia sẻ câu chuyện của bạn" className="post-input-field" />
            <div className="post-input-actions">
              <button className="post-action-button">
                <span className="post-action-icon">📷</span>
                Ảnh/video
              </button>
            </div>
          </div> */}

          {/* <div className="post-card">
            <div className="post-header">
              <div className="post-user">
                <img src="/placeholder.svg?height=50&width=50" alt="User" width={50} height={50} className="post-avatar" />
                <div className="post-user-info">
                  <h3 className="post-username">Lê Văn Đạt</h3>
                  <p className="post-meta">1 giờ trước</p>
                </div>
              </div>
            </div>
            <div className="post-content">
              <p>INCLUDE 3.7 Web Crawler</p>
              <p>Tôi đã viết lại code từ Claude 3.7 Web Crawler, thay vì dùng API của Anthropic, tôi đã refactor để sử dụng dịch vụ OpenRouter...</p>
            </div>
            <img src={postpic} alt="" />
            

            <div className="post-actions">
              <button className="post-action-button">
                <FaHeart className="action-icon heart" />
              </button>
              <button className="post-action-button">
                <FaComments className="action-icon" />
              </button>
              <button className="post-action-button">
                <FaBookmark className="action-icon" />
              </button>
            </div>
          </div> */}

          {/* <div className="post-card">
            <div className="post-header">
              <div className="post-user">
                <img src="/placeholder.svg?height=50&width=50" alt="User" width={50} height={50} className="post-avatar" />
                <div className="post-user-info">
                  <h3 className="post-username">Trần Tiểu My</h3>
                  <p className="post-meta">1 giờ trước</p>
                </div>
              </div>
            </div>
            <div className="post-content">
              <p>Claude 3.5 Sonnet đã ra mắt với 1 số cải tiến mới nhất. Đáng chú ý nhất là giá chỉ 3 cent là phần DeepSearch. Đừng tích hợp với mạng số hồi X nên người những thông tin search từ Internet thì còn cả những thông tin lên tục...</p>
              <p className="read-more">Xem thêm...</p>
            </div>
            <div className="post-img">
              <img src="/placeholder.svg?height=300&width=500" alt="Mind Map" width={500} height={300} />
            </div>
          </div> */}
        </div>

        {/* Right Sidebar */}
        <div className="sidebar right-sidebar">
          <div className="ad-section">
            <h3 className="section-title">Ads</h3>
            <div className="ad-card">
              <img src={adSighBar} alt="Ad" width={180} height={100} />
              <p className="ad-text">MXH trí tuệ nhân tạo</p>
            </div>
            <div className="ad-card">
              <img src={adSighBar} alt="Ad" width={180} height={100} />
              <p className="ad-text">MXH trí tuệ nhân tạo</p>
            </div>
            {/* <div className="ad-card">
              <div className="ad-image-container">
                <img src={adSighBar} alt="Ad" width={180} height={100} />
              </div>
              <p className="ad-text">MXH trí tuệ nhân tạo</p>
            </div> */}
          </div>

          <div className="recommendations">
            <h3 className="section-title">Recommend for you</h3>
            <div className="recommendation-item">
              <h4 className="recommendation-title">Khoá học....</h4>
              <p className="recommendation-text">Miêu tả khóa học rất dài chắc chắn bạn không đọc</p>
            </div>
            <div className="recommendation-item">
              <h4 className="recommendation-title">Poppins</h4>
              <p className="recommendation-text">Miêu tả khóa học rất dài chắc chắn bạn không đọc</p>
            </div>
            <div className="recommendation-item">
              <h4 className="recommendation-title">Poppins</h4>
              <p className="recommendation-text">Miêu tả khóa học rất dài chắc chắn bạn không đọc</p>
            </div>
            <div className="recommendation-item">
              <h4 className="recommendation-title">Dịch vụ.....</h4>
              <p className="recommendation-text">Miêu tả khóa học rất dài chắc chắn bạn không đọc</p>
            </div>
            <div className="recommendation-item">
              <h4 className="recommendation-title">Poppins</h4>
              <p className="recommendation-text">Miêu tả khóa học rất dài chắc chắn bạn không đọc</p>
            </div>
            <div className="recommendation-item">
              <h4 className="recommendation-title">Poppins</h4>
              <p className="recommendation-text">Miêu tả khóa học rất dài chắc chắn bạn không đọc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
