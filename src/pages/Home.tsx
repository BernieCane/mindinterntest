import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">

      <div className="main-dashboard">

        <div className="section-header">Demo use cases ↗</div>
        <div className="cards-grid">
          <div className="use-case-card">Environmental monitoring</div>
          <div className="use-case-card">Air quality</div>
          <div className="use-case-card">EV charging stations</div>
          <div className="use-case-card">Swimming pool SCADA</div>
          <div className="use-case-card">Device claiming</div>
        </div>


        <div className="stats-row">

          <div className="stat-widget">
            <div className="widget-top">
              <h3>Devices ↗</h3>
              <div>
                <button className="btn-add" style={{marginRight: '10px', background: 'white', color:'#333', border:'1px solid #ccc'}}>View docs</button>
                <button className="btn-add">Add device</button>
              </div>
            </div>
            <div className="stat-numbers">
              <div className="stat-box">
                <div className="stat-label">Inactive ↗</div>
                <div className="stat-value inactive">28</div>
              </div>
              <div className="stat-box">
                <div className="stat-label">Active ↗</div>
                <div className="stat-value">0</div>
              </div>
              <div className="stat-box">
                <div className="stat-label">Total ↗</div>
                <div className="stat-value">28</div>
              </div>
            </div>
          </div>

          <div className="stat-widget">
            <div className="widget-top">
              <h3>Alarms ↗</h3>
            </div>
            <div className="stat-numbers">
              <div className="stat-box">
                <div className="stat-label">Critical ↗</div>
                <div className="stat-value critical">0 ⚠️</div>
              </div>
              <div className="stat-box">
                <div className="stat-label">Assigned to me ↗</div>
                <div className="stat-value">0</div>
              </div>
              <div className="stat-box">
                <div className="stat-label">Total ↗</div>
                <div className="stat-value">0</div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="stat-widget" style={{height: '200px'}}>
            <div className="widget-top">
                <h3>Activity</h3>
                <select style={{padding: '5px'}}><option>Devices</option></select>
            </div>
            <div style={{color: '#999', marginTop: '50px', textAlign: 'center'}}>
                Chart placeholder (History - last 30 days)
            </div>
        </div>
      </div>

    
      <div className="right-sidebar">
        <div className="get-started-panel">
          <h3 className="gs-title">Get started</h3>
          <ul className="step-list">
            <li className="step-item"><span className="step-circle">1</span> Create device</li>
            <li className="step-item"><span className="step-circle">2</span> Connect device</li>
            <li className="step-item"><span className="step-circle">3</span> Create dashboard</li>
            <li className="step-item"><span className="step-circle">4</span> Configure alarm rules</li>
            <li className="step-item"><span className="step-circle">5</span> Create alarm</li>
          </ul>
          <div style={{marginTop: '20px', fontSize: '12px', color: '#666', background: '#f5f5f5', padding: '10px'}}>
             To trigger the alarm, send a new telemetry value...
          </div>
        </div>

        <div className="mobile-app-panel">
            <h4>Connect mobile app</h4>
            <div style={{display:'flex', gap:'10px', justifyContent:'center', marginTop:'10px'}}>
              
                <div style={{width:'100px', height:'35px', background:'black', borderRadius:'5px'}}></div>
                <div style={{width:'100px', height:'35px', background:'black', borderRadius:'5px'}}></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;