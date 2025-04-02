import React from 'react';
import lantai from '../assets/lantai.png';
import Section from './Section';

function LocationInfo() {
  return (
    <div className="section">
      <Section className="flex-column rest-section section-content">
        <h1>Helyszín</h1>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <h3>Lantai birtok, Nagykőrős</h3>
            <p>
              Térkép és útvonaltervező: [
              <a href="https://maps.app.goo.gl/V1Xa7Lo5P7tGpy7Q8" target="_blank" rel="noopener">
                Google Maps link
              </a>
              ]
            </p>
            <h4>Megközelítés</h4>
            <p>
              <b>Autóval:</b> az esküvő helyszínén biztosítva lesz parkolási lehetőség azok számára, akik a buli végén
              autóba pattannának.
            </p>
            <p>
              <b>Transzferrel:</b> szeretnénk egyszerűbbé tenni a csoportos kiutazást a helyszínre előre egyeztetett
              transzferrel. Ezt a lehetőséget azoknak tudjuk felajánlani, akik a csoportosan foglalt szálláshelyeket
              veszik igénybe.
            </p>
            <h4>Szállás</h4>
            <p>
              Csoportos foglalással igyekszünk megkönnyíteni Nektek a szállásfoglalást a környékbeli településeken. Aki
              szeretné igénybe venni ezt a lehetőséget az mindenképp jelezze!
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default LocationInfo;
