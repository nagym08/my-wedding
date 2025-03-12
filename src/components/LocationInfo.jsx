import React from 'react';
import lantai from '../assets/lantai.png';

function LocationInfo() {
  return (
    <div className="section">
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '70%' }}>
          <p className="secondary">Helyszín</p>
          <h1>Lantai birtok, Nagykőrős</h1>
          <p>
            Térkép és útvonaltervező: [<a href="https://maps.app.goo.gl/V1Xa7Lo5P7tGpy7Q8">Google Maps link</a>]
          </p>
          <p>Ha bármilyen kérdésetek van a megközelítéssel kapcsolatban, keressetek minket bátran!</p>
        </div>
        <div style={{ width: '30%' }}>
          <img className="header-image" src={lantai} />
        </div>
      </div>

      {/* <h1>Az esküvő helyszíne: Nagykőrős</h1>
      <h2>Cím: 2750 Nagykőrös, Alsójárás dűlő 43. </h2>
      <h2>Térkép és útvonaltervező: [Google Maps link]</h2>
      <p>Parkolási lehetőség: [Információ a parkolásról]</p>
      <p>Szálláslehetőség: [Ha van, itt adj meg részleteket]</p>
      Ha bármilyen kérdésetek van a megközelítéssel kapcsolatban, keressetek minket bátran! */}
    </div>
  );
}

export default LocationInfo;
