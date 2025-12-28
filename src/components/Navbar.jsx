const Navbar = ({ logout }) => {
  return (
    <nav style={{
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '0 20px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <h2 style={{ fontSize: '20px', fontWeight: '600' }}>
        🚚 Fleet Management System
      </h2>
      
      <button 
        onClick={logout}
        className="btn btn-secondary"
      >
        Logout
      </button>
    </nav>
  )
}

export default Navbar