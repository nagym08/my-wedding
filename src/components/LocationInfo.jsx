import React from 'react';
import lantai from '../assets/lantai.png';

function LocationInfo() {
  return (
    <div className="section">
      <div className="flex-column rest-section">
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ width: '70%' }}>
            <p className="secondary">Helyszín</p>
            <h1>Lantai birtok, Nagykőrős</h1>
            <p>
              Térkép és útvonaltervező: [
              <a href="https://maps.app.goo.gl/V1Xa7Lo5P7tGpy7Q8" target="_blank" rel="noopener">
                Google Maps link
              </a>
              ]
            </p>
            <p>Ha bármilyen kérdésetek van a megközelítéssel kapcsolatban, keressetek minket bátran!</p>
          </div>
          <div style={{ width: '30%' }}>
            <img className="header-image" src={lantai} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationInfo;
