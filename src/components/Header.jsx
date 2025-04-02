import React from 'react';

const Header = () => {
  const now = new Date();
  const eventDate = new Date('2025-09-06');
  const timeDifference = eventDate - now;
  const daysToGo = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <div>
      <div style={{ display: 'flex', width: '100%', marginTop: '20px' }}>
        <div style={{ flex: '0 0 100%', textAlign: 'center' }}>
          <span className="title">Nóri & Miki</span>
          <div style={subTitleStyle}>
            <span>2025.09.06. - Lantai birtok, Nagykőrös</span>
          </div>
          <div style={subTitleStyle}>
            <span>Már csak {daysToGo} nap!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const subTitleStyle = { color: 'white', marginBottom: '15px' };

export default Header;
