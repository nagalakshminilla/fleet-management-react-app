import React from 'react'
import vehicleImage from '../assets/vehicle-placeholder.jpg'

const FleetCard = React.memo(({ 
  fleet, 
  onUpdateDriver, 
  onToggleAvailability, 
  onDelete 
}) => {
  console.log(`Rendering FleetCard: ${fleet.id}`)
  
  const handleUpdateDriver = () => {
    const newDriverName = prompt('Enter new driver name:', fleet.driverName)
    if (newDriverName && newDriverName.trim()) {
      onUpdateDriver(fleet.id, newDriverName.trim())
    } else if (newDriverName !== null) {
      alert('Driver name cannot be empty')
    }
  }

  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete vehicle ${fleet.vehicleRegNo}?`
    )
    if (confirmed) {
      onDelete(fleet.id)
    }
  }

  return (
    <div className="card" style={{
      borderLeft: `4px solid ${fleet.availabilityStatus === 'Available' ? '#16a34a' : '#dc2626'}`
    }}>
      <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
        <img 
          src={vehicleImage} 
          alt="Vehicle" 
          style={{
            width: '80px',
            height: '80px',
            objectFit: 'cover',
            borderRadius: '4px'
          }}
        />
        <div>
          <h4 style={{ 
            fontSize: '18px', 
            marginBottom: '5px',
            color: '#1f2937'
          }}>
            {fleet.vehicleRegNo}
          </h4>
          <p style={{ 
            color: '#6b7280', 
            fontSize: '14px',
            marginBottom: '3px'
          }}>
            🚗 {fleet.category}
          </p>
          <p style={{ 
            color: '#6b7280', 
            fontSize: '14px',
            marginBottom: '3px'
          }}>
            👤 {fleet.driverName}
          </p>
          <span style={{
            display: 'inline-block',
            padding: '3px 8px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: '600',
            backgroundColor: fleet.availabilityStatus === 'Available' ? '#dcfce7' : '#fee2e2',
            color: fleet.availabilityStatus === 'Available' ? '#166534' : '#991b1b'
          }}>
            {fleet.availabilityStatus}
          </span>
        </div>
      </div>
      
      <div style={{ 
        display: 'flex', 
        gap: '10px',
        borderTop: '1px solid #e5e7eb',
        paddingTop: '15px'
      }}>
        <button 
          onClick={handleUpdateDriver}
          className="btn btn-secondary"
          style={{ flex: 1 }}
        >
          Update Driver
        </button>
        
        <button 
          onClick={() => onToggleAvailability(fleet.id)}
          className="btn"
          style={{ 
            flex: 1,
            backgroundColor: fleet.availabilityStatus === 'Available' ? '#fbbf24' : '#22c55e',
            color: 'white'
          }}
        >
          {fleet.availabilityStatus === 'Available' ? 'Mark Unavailable' : 'Mark Available'}
        </button>
        
        <button 
          onClick={handleDelete}
          className="btn btn-danger"
          style={{ flex: 1 }}
        >
          Delete
        </button>
      </div>
    </div>
  )
})

FleetCard.displayName = 'FleetCard'

export default FleetCard