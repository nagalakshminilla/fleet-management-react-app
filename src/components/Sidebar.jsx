import { useState } from 'react'

const Sidebar = ({ onAddFleet }) => {
  const [formData, setFormData] = useState({
    vehicleRegNo: '',
    category: 'Car',
    driverName: '',
    availabilityStatus: 'Available'
  })

  const categories = ['Car', 'Truck', 'Bus', 'Van']
  const availabilityOptions = ['Available', 'Unavailable']

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.vehicleRegNo.trim() || !formData.driverName.trim()) {
      alert('Please fill in all required fields')
      return
    }
    
    // Call parent function to add fleet
    onAddFleet(formData)
    
    // Clear form
    setFormData({
      vehicleRegNo: '',
      category: 'Car',
      driverName: '',
      availabilityStatus: 'Available'
    })
  }

  return (
    <aside style={{
      width: '300px',
      backgroundColor: '#374151',
      color: 'white',
      padding: '20px',
      minHeight: '100%'
    }}>
      <h3 style={{ 
        marginBottom: '20px',
        fontSize: '18px',
        borderBottom: '2px solid #4b5563',
        paddingBottom: '10px'
      }}>
        Add New Fleet
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Vehicle Registration Number *</label>
          <input
            type="text"
            name="vehicleRegNo"
            className="form-control"
            value={formData.vehicleRegNo}
            onChange={handleChange}
            placeholder="ABC-123"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            className="form-control"
            value={formData.category}
            onChange={handleChange}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label>Driver Name *</label>
          <input
            type="text"
            name="driverName"
            className="form-control"
            value={formData.driverName}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Availability Status</label>
          <select
            name="availabilityStatus"
            className="form-control"
            value={formData.availabilityStatus}
            onChange={handleChange}
          >
            {availabilityOptions.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-success"
          style={{ width: '100%', marginTop: '10px' }}
        >
          Add Fleet
        </button>
      </form>
      
      <div style={{ marginTop: '30px', fontSize: '14px', color: '#d1d5db' }}>
        <p>Instructions:</p>
        <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
          <li>Fill all required fields (*)</li>
          <li>Click on fleet cards to manage</li>
          <li>Use action buttons for updates</li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar