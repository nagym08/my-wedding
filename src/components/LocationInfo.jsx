import React from 'react';
import lantai from '../assets/lantai.png';
import Section from './Section';

function LocationInfo() {
  return (
    <div className="section">
      <Section className="flex-column rest-section">
        <h1>Helyszín</h1>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ width: '70%' }}>
            <h3>Lantai birtok, Nagykőrős</h3>
            <p>
              Térkép és útvonaltervező: [
              <a href="https://maps.app.goo.gl/V1Xa7Lo5P7tGpy7Q8" target="_blank" rel="noopener">
                Google Maps link
              </a>
              ]
            </p>
            <p>
              A szállások lefoglalásában segítünk, amint letisztul a végléges létszám. Szállásáfogalási igényeteket a
              lentebbi formban tudjátok megtenni!
            </p>
            <p>Ha bármilyen kérdésetek van a megközelítéssel kapcsolatban, keressetek minket bátran!</p>
          </div>
          <div style={{ width: '30%' }}>
            <img className="header-image" src={lantai} />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default LocationInfo;
