import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [showCard, setShowCard] = useState(false)
  const [studentInfo, setStudentInfo] = useState({
    name: 'Rodriguez, Yuan Jasper',
    section: 'BSIT-32E3',
    subject: 'IT ELECTIVE 3',
    studentNumber: '1949-23'
  })

  // useEffect as requested to perform some side effect
  useEffect(() => {
    if (showCard) {
      console.log('Card expanded for:', studentInfo.name);
    } else {
      console.log('Card hidden');
    }
  }, [showCard, studentInfo]);

  return (
    <>
      <section id="center">
        <div className="hero">
          {heroImg && <img src={heroImg} className="base" width="170" height="170" alt="" />}
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Student Profile</h1>
        </div>
        
        <button
          className="counter"
          onClick={() => setShowCard(!showCard)}
          style={{ marginBottom: '20px' }}
        >
          {showCard ? 'Hide Card' : 'Show Card'}
        </button>

        {showCard && (
          <div className="student-card" style={{
            border: '1px solid #444',
            borderRadius: '12px',
            padding: '24px',
            backgroundColor: '#1e1e1e',
            color: '#fff',
            textAlign: 'left',
            maxWidth: '350px',
            margin: '0 auto',
            boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
            transition: 'all 0.3s ease'
          }}>
            <h2 style={{ borderBottom: '1px solid #555', paddingBottom: '12px', marginTop: 0, color: '#646cff' }}>Student Info</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '1.1rem' }}>
              <p style={{ margin: 0 }}><strong>Name:</strong> {studentInfo.name}</p>
              <p style={{ margin: 0 }}><strong>Section:</strong> {studentInfo.section}</p>
              <p style={{ margin: 0 }}><strong>Subject:</strong> {studentInfo.subject}</p>
              <p style={{ margin: 0 }}><strong>Student Number:</strong> {studentInfo.studentNumber}</p>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default App
