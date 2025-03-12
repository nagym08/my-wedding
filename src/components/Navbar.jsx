import { useState } from 'react';

export function Navbar() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('');

  const handleSelection = (menuItem) => setSelectedMenuItem(menuItem);
  return (
    <nav className="navbar">
      <a
        href="#schedule"
        className={selectedMenuItem === 'schedule' ? 'active' : ''}
        onClick={() => handleSelection('schedule')}
      >
        Menetred
      </a>
      <a
        href="#location"
        className={selectedMenuItem === 'location' ? 'active' : ''}
        onClick={() => handleSelection('location')}
      >
        Helyszín
      </a>
      <a href="#rsvp" className={selectedMenuItem === 'rsvp' ? 'active' : ''} onClick={() => handleSelection('rsvp')}>
        RSVP
      </a>
      <a
        href="#photo"
        className={selectedMenuItem === 'photo' ? 'active' : ''}
        onClick={() => handleSelection('photo')}
      >
        Fotó
      </a>
    </nav>
  );
}
