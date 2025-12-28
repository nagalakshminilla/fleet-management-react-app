import { useState, useCallback, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import FleetCard from '../components/FleetCard'

const Admin = ({ logout }) => {
  const [fleets, setFleets] = useState(() => {
    // Load from localStorage on initial render
    const saved = localStorage.getItem('fleets')
    return saved ? JSON.parse(saved) : []
  })

  // Save to localStorage whenever fleets change
  useEffect(() => {
    localStorage.setItem('fleets', JSON.stringify(fleets))
  }, [fleets])

  const handleAddFleet = useCallback((newFleet) => {
    const fleetWithId = {
      ...newFleet,
      id: Date.now().toString()
    }
    setFleets(prev => [fleetWithId, ...prev])
  }, [])

  const handleUpdateDriver = useCallback((id, newDriverName) => {
    setFleets(prev => prev.map(fleet => 
      fleet.id === id ? { ...fleet, driverName: newDriverName } : fleet
    ))
  }, [])

  const handleToggleAvailability = useCallback((id) => {
    setFleets(prev => prev.map(fleet => 
      fleet.id === id ? { 
        ...fleet, 
        availabilityStatus: fleet.availabilityStatus === 'Available' ? 'Unavailable' : 'Available' 
      } : fleet
    ))
  }, [])

  const handleDelete = useCallback((id) => {
    setFleets(prev => prev.filter(fleet => fleet.id !== id))
  }, [])

  return (
    <div>
      <Navbar logout={logout} />
      
      <div className="dashboard-container">
        <Sidebar onAddFleet={handleAddFleet} />
        
        <main style={{ 
          flex: 1, 
          padding: '20px',
          backgroundColor: '#f9fafb'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <h2 style={{ color: '#1f2937' }}>
              Fleet Overview
            </h2>
            <div style={{
              padding: '8px 16px',
              backgroundColor: '#e5e7eb',
              borderRadius: '20px',
              fontSize: '14px'
            }}>
              Total Fleets: {fleets.length}
            </div>
          </div>
          
          {fleets.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '40px',
              color: '#6b7280'
            }}>
              <p>No fleets added yet. Start by adding a new fleet from the sidebar.</p>
            </div>
          ) : (
            <div className="fleet-grid">
              {fleets.map(fleet => (
                <FleetCard
                  key={fleet.id}
                  fleet={fleet}
                  onUpdateDriver={handleUpdateDriver}
                  onToggleAvailability={handleToggleAvailability}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Admin