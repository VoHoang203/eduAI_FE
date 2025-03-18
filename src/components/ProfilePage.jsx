"use client"

import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import { Loader2, Settings, LogOut, Pencil } from "lucide-react"

import profile1 from "../assets/profile2.jpg"
import bia from "../assets/bia1.jpg"
export default function ProfilePage() {
  const [user, setUser] = useState(null)
  const [isClient, setIsClient] = useState(false)
  const router = useNavigate()

  useEffect(() => {
    setIsClient(true)
    const storedUser = localStorage.getItem("user")

    if (!storedUser) {
      router.push("/login")
      return
    }

    try {
      const userData = JSON.parse(storedUser)
      setUser({
        username: userData.username || "",
        email: userData.email || "",
        fullName: userData.fullName || "John Doe",
        bio:
          userData.bio ||
          "Frontend developer with 5+ years of experience building responsive and user-friendly web applications. Passionate about clean code and modern web technologies.",
        jobTitle: userData.jobTitle || "Frontend Developer",
        phone: userData.phone || "+1 (555) 123-4567",
        location: userData.location || "San Francisco, CA",
        birthday: userData.birthday || "January 15, 1990",
        posts: userData.posts || 125,
        followers: userData.followers || 1200,
        following: userData.following || 384,
        skills: userData.skills || [
          "React",
          "JavaScript",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Next.js",
          "Tailwind CSS",
          "UI/UX",
        ],
      })
    } catch (error) {
      console.error("Failed to parse user data:", error)
      router("/login")
    }
  }, [router])

  function handleLogout() {
    localStorage.removeItem("user")
    router("/login")
  }

  if (!isClient || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Cover Image */}
      <div style={{ height: '300px', width: '100%', backgroundColor: '#e5e5e5', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
        <img src={bia} alt="" style={{ height: "300px", width: "80%" , objectFit:"cover"}}/>
         
        </div>
        <button style={{ position: 'absolute', right: '16px', top: '16px', backgroundColor: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: '500', display: 'flex', alignItems: 'center' }}>
          <Pencil style={{ width: '16px', height: '16px', marginRight: '4px' }} />
          Edit Cover
        </button>
      </div>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 16px', marginTop: '-96px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Profile Picture */}
          <div style={{ position: 'relative', height: '128px', width: '128px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 'bold', border: '4px solid white', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <img
                  src={profile1}
                  alt="User Avatar"
                  className="w-full h-full rounded-full object-cover border border-gray-300"
                />
            <div style={{ position: 'absolute', bottom: '0', right: '0', height: '32px', width: '32px', backgroundColor: '#1f2937', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Pencil style={{ height: '16px', width: '16px', color: 'white' }} />
            </div>
          </div>
          
          {/* User Info */}
          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0' }}>{user.fullName}</h1>
            <p style={{ color: '#6b7280', margin: '4px 0' }}>{user.jobTitle}</p>
            
            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '32px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 'bold' }}>{user.posts}</div>
                <div style={{ fontSize: '14px', color: '#6b7280' }}>Posts</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 'bold' }}>{(user.followers / 1000).toFixed(1)}k</div>
                <div style={{ fontSize: '14px', color: '#6b7280' }}>Followers</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 'bold' }}>{user.following}</div>
                <div style={{ fontSize: '14px', color: '#6b7280' }}>Following</div>
              </div>
            </div>
            
            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
              <button style={{ display: 'flex', alignItems: 'center', padding: '6px 12px', borderRadius: '4px', border: '1px solid #d1d5db', backgroundColor: 'white' }}>
                <Settings style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                Settings
              </button>
              <button 
                style={{ display: 'flex', alignItems: 'center', padding: '6px 12px', borderRadius: '4px', border: 'none', backgroundColor: '#ef4444', color: 'white' }}
                onClick={handleLogout}
              >
                <LogOut style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                Logout
              </button>
            </div>
          </div>
          
          {/* Tabs */}
          <div style={{ width: '100%', marginTop: '32px' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid #e5e7eb' }}>
              <button style={{ padding: '8px 16px', borderBottom: '2px solid #3b82f6', fontWeight: '500' }}>About</button>
              <button style={{ padding: '8px 16px', color: '#6b7280' }}>Timeline</button>
              <button style={{ padding: '8px 16px', color: '#6b7280' }}>Friends</button>
              <button style={{ padding: '8px 16px', color: '#6b7280' }}>Photos</button>
            </div>
            
            <div style={{ marginTop: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                {/* Personal Information */}
                <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Personal Information</h2>
                  <div style={{ display: 'grid', rowGap: '12px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
                      <span style={{ color: '#6b7280' }}>Full Name:</span>
                      <span>{user.fullName}</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
                      <span style={{ color: '#6b7280' }}>Email:</span>
                      <span>{user.email}</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
                      <span style={{ color: '#6b7280' }}>Phone:</span>
                      <span>{user.phone}</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
                      <span style={{ color: '#6b7280' }}>Location:</span>
                      <span>{user.location}</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
                      <span style={{ color: '#6b7280' }}>Birthday:</span>
                      <span>{user.birthday}</span>
                    </div>
                  </div>
                </div>
                
                {/* Biography */}
                <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Biography</h2>
                  <p>{user.bio}</p>
                </div>
                
                {/* Skills */}
                <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', gridColumn: 'span 2' }}>
                  <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Skills</h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {user.skills?.map((skill, index) => (
                      <span key={index} style={{ padding: '4px 12px', backgroundColor: '#f3f4f6', borderRadius: '16px', fontSize: '14px' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

