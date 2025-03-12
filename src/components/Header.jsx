import React from 'react';
import headerLeft from '../assets/header-left.JPG';
import headerRight from '../assets/header-right.JPG';

const Header = () => {
  const now = new Date();
  const eventDate = new Date('2025-09-06');
  const timeDifference = eventDate - now;
  const daysToGo = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <div>
      <div style={{ display: 'flex', width: '100%' }}>
        {/* <div style={{ flex: '0 0 20%', height: '100%' }}>
          <img className="header-image" src={headerLeft} />
        </div> */}
        <div style={{ flex: '0 0 100%', textAlign: 'center' }}>
          <span className="title">Nóri & Miki</span>
          <p className="secondary">2025.09.06. - Lantai birtok, Nagykőrös</p>
          <p className="secondary">Már csak {daysToGo} nap!</p>
        </div>
        {/* <div style={{ flex: '0 0 20%', height: '100%' }}>
          <img className="header-image" src={headerRight} />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
