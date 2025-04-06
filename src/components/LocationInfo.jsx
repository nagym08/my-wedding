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
            <h3>Lantai birtok, Nagykőrös</h3>
            <p>
              Térkép és útvonaltervező: [
              <a href="https://maps.app.goo.gl/V1Xa7Lo5P7tGpy7Q8" target="_blank" rel="noopener">
                Google Maps link
              </a>
              ]
            </p>
            <h4>Megközelítés</h4>
            <span>
              <b>Autóval:</b> az esküvő helyszínén biztosítva lesz parkolási lehetőség azok számára, akik a buli végén
              autóba pattannának.
            </span>
            <br />
            <span>
              <b>Transzferrel:</b> szeretnénk egyszerűbbé tenni a csoportos kiutazást a helyszínre előre egyeztetett
              transzferrel. Fontos tudni, hogy a transzfer csak az általunk szervezett szálláshelyeken áll meg!
            </span>
            <h4>Szállás</h4>
            <span>
              Csoportos foglalással igyekszünk megkönnyíteni Nektek a szállásfoglalást a környékbeli településeken. Aki
              szeretné igénybe venni ezt a lehetőséget az mindenképpen jelezze!
            </span>
            <p>
              További információkkal e-mailben értesítünk majd Titeket, de addig is ha bármi kérdésetek lenne keressétek
              bátran minket!
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default LocationInfo;
