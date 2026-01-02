import React, { useState } from 'react';
import './Devices.css';

interface Asset {
  id: number;
  time: string;
  name: string;
  profile: string;
  label: string;
  customer: string;
  selected: boolean;
}

const Assets = () => {
  const [assets, setAssets] = useState<Asset[]>([
    { id: 1, time: '2024-09-30 20:01:26', name: 'df', profile: 'default', label: 'fds', customer: '', selected: false },
    { id: 2, time: '2024-09-25 13:32:47', name: 'assetok', profile: 'default', label: '', customer: '', selected: false },
    { id: 3, time: '2024-02-20 17:05:09', name: 'Charging Station C1', profile: 'charging station', label: 'Charging Station', customer: 'Demo Customer', selected: false },
    { id: 4, time: '2024-02-20 17:05:09', name: 'Office center', profile: 'office', label: 'Office', customer: 'Demo Customer', selected: false },
  ]);

  const [searchTerm, setSearchTerm] = useState('');


  const handleDelete = (id: number) => {
    if (window.confirm('Delete this asset?')) {
        setAssets(assets.filter(a => a.id !== id));
    }
  };

  const handleAdd = () => {
    const name = window.prompt("Enter Asset Name:");
    const type = window.prompt("Enter Asset Type (e.g. Building, Device...):", "default");
    
    if (name) {
        const newAsset: Asset = {
            id: Date.now(),
            time: new Date().toISOString().slice(0, 19).replace('T', ' '),
            name: name,
            profile: type || 'default',
            label: name,
            customer: '',
            selected: false
        };
        setAssets([newAsset, ...assets]);
    }
  };

  const handleEdit = (id: number, currentName: string) => {
      const newName = window.prompt("Rename asset:", currentName);
      if(newName) {
          setAssets(assets.map(a => a.id === id ? {...a, name: newName} : a));
      }
  }

  const filteredAssets = assets.filter(a => 
      a.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-page">
      <div className="toolbar">
        <div className="toolbar-left">
          <span className="title-text">Assets</span>
          <div style={{background:'#f0f0f0', padding:'5px 10px', borderRadius:'4px', fontSize:'13px', marginLeft: '15px'}}>
             Asset profile: <b>All</b>
          </div>
        </div>
        <div className="toolbar-right">
          <span className="action-icon-head" onClick={handleAdd} title="Add Asset">+</span>
          <span className="action-icon-head" onClick={() => window.location.reload()}>↻</span>
          
           
           <div className="search-box" style={{display:'inline-block', marginLeft:'10px'}}>
             <input 
                type="text" 
                placeholder="Search assets..." 
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
              <th><input type="checkbox" /></th>
              <th>Created time ↓</th>
              <th>Name</th>
              <th>Asset profile</th>
              <th>Label</th>
              <th>Customer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((a) => (
              <tr key={a.id}>
                <td><input type="checkbox" /></td>
                <td>{a.time}</td>
                <td style={{fontWeight:'500', color:'#002d62', cursor:'pointer'}} onClick={() => handleEdit(a.id, a.name)}>
                    {a.name}
                </td>
                <td>{a.profile}</td>
                <td>{a.label}</td>
                <td>{a.customer}</td>
                <td>
                  <div className="actions-cell">
                     <button className="icon-btn" onClick={() => handleEdit(a.id, a.name)}>📝</button>
                     <button className="icon-btn" onClick={() => handleDelete(a.id)} style={{color:'#d32f2f'}}>🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
          Items per page: 10 ▾ | 1 - {filteredAssets.length} of {assets.length}
      </div>
    </div>
  );
};

export default Assets;