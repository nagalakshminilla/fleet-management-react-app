import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setIsAuthenticated, login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const emailRef = useRef(null)

  useEffect(() => {
    // Focus email input on mount
    emailRef.current?.focus()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    // Check credentials
    if (formData.email === 'admin@gmail.com' && formData.password === 'admin1234') {
      alert('Login success')
      login()
      setIsAuthenticated(true)
      navigate('/admin')
    } else {
      alert('Wrong email or password')
      setError('Invalid credentials')
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f3f4f6'
    }}>
      <div className="card" style={{ width: '400px', padding: '40px' }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '30px',
          color: '#1f2937'
        }}>
          Fleet Management Login
        </h2>
        
        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '10px' }}
          >
            Login
          </button>
          
          <div style={{ 
            marginTop: '20px', 
            textAlign: 'center',
            fontSize: '14px',
            color: '#6b7280'
          }}>
            <p>Use: admin@gmail.com / admin1234</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login