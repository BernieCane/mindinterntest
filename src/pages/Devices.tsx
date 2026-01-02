import React, { useState } from 'react';
import './Devices.css';

interface Device {
  id: number;
  time: string;
  name: string;
  profile: string;
  state: string;
  public: boolean;
  gateway: boolean;
  selected: boolean;
}

const Devices = () => {
  const [devices, setDevices] = useState<Device[]>([
    { id: 1, time: '2024-09-25 15:21:29', name: 'okm2n', profile: 'defaultok', state: 'Inactive', public: true, gateway: false, selected: false },
    { id: 2, time: '2024-09-25 13:46:36', name: 'weather', profile: 'defaultok', state: 'Inactive', public: true, gateway: false, selected: false },
    { id: 3, time: '2024-09-25 13:33:13', name: 'deviceok', profile: 'defaultok', state: 'Inactive', public: true, gateway: false, selected: false },
    { id: 4, time: '2024-02-27 08:54:06', name: 'rpc', profile: 'default', state: 'Inactive', public: true, gateway: false, selected: false },
    { id: 5, time: '2024-02-26 15:37:05', name: 'test3', profile: 'default', state: 'Inactive', public: true, gateway: false, selected: false },
    { id: 6, time: '2024-02-26 08:13:34', name: 'mnet2', profile: 'default', state: 'Inactive', public: true, gateway: true, selected: false },
    { id: 7, time: '2024-02-26 07:51:11', name: 'mnet', profile: 'default', state: 'Inactive', public: true, gateway: false, selected: false },
  ]);

  const [searchTerm, setSearchTerm] = useState('');


  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this device?')) {
      setDevices(devices.filter(device => device.id !== id));
    }
  };

  const handleAdd = () => {
    const name = window.prompt("Enter device name:");
    if (name) {
      const newDevice: Device = {
        id: Date.now(),
        time: new Date().toISOString().slice(0, 19).replace('T', ' '),
        name: name,
        profile: 'default',
        state: 'Active',
        public: false,
        gateway: false,
        selected: false
      };
      setDevices([newDevice, ...devices]);
    }
  };

  const handleEdit = (id: number, currentName: string) => {
    const newName = window.prompt("Update device name:", currentName);
    if (newName && newName !== currentName) {
      setDevices(devices.map(d => d.id === id ? { ...d, name: newName } : d));
    }
  };

  const filteredDevices = devices.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSelect = (id: number) => {
    setDevices(devices.map(d => d.id === id ? { ...d, selected: !d.selected } : d));
  };

  const toggleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setDevices(devices.map(d => ({ ...d, selected: checked })));
  };

  return (
    <div className="table-page">
 
      <div className="toolbar">
        <div className="toolbar-left">
          <span className="title-text">Devices</span>
          <button className="btn-filter">Device Filter</button>
        </div>
        <div className="toolbar-right">
      
          <span className="action-icon-head" onClick={handleAdd} title="Add new device">+</span>
          <span className="action-icon-head" onClick={() => window.location.reload()} title="Refresh">↻</span>
          
        
          <div className="search-box" style={{display:'inline-block', marginLeft:'10px'}}>
             <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{padding:'4px', borderRadius:'4px', border:'1px solid #ccc'}}
             />
          </div>
        </div>
      </div>

  
      <div className="table-wrapper">
        <table className="tb-table">
          <thead>
            <tr>
              <th><input type="checkbox" onChange={toggleSelectAll} /></th>
              <th>Created time ↓</th>
              <th>Name</th>
              <th>Device profile</th>
              <th>State</th>
              <th>Public</th>
              <th>Is gateway</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDevices.length > 0 ? filteredDevices.map((d) => (
              <tr key={d.id} className={d.selected ? 'selected-row' : ''}>
                <td>
                  <input 
                    type="checkbox" 
                    checked={d.selected} 
                    onChange={() => toggleSelect(d.id)} 
                  />
                </td>
                <td>{d.time}</td>
                <td style={{fontWeight:'500', color:'#002d62', cursor:'pointer'}} onClick={() => handleEdit(d.id, d.name)}>
                    {d.name}
                </td>
                <td>{d.profile}</td>
                <td>
                    <span className={`badge ${d.state === 'Inactive' ? 'badge-inactive' : 'badge-active'}`}>
                        {d.state}
                    </span>
                </td>
                <td><input type="checkbox" checked={d.public} readOnly /></td>
                <td><input type="checkbox" checked={d.gateway} readOnly /></td>
                <td>
                  <div className="actions-cell">
                    <button className="icon-btn" onClick={() => handleEdit(d.id, d.name)} title="Edit">📝</button>
                    <button className="icon-btn" onClick={() => handleDelete(d.id)} title="Delete" style={{color:'#d32f2f'}}>🗑️</button>
                  </div>
                </td>
              </tr>
            )) : (
                <tr>
                    <td colSpan={8} style={{textAlign:'center', padding:'20px'}}>No devices found</td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
      
      
      <div className="table-footer">
          Items per page: 10 ▾ | 1 - {filteredDevices.length} of {devices.length}
      </div>
    </div>
  );
};

export default Devices;