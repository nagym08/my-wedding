import React, { useState } from 'react';
import AdditionalGuestForm from './AdditionalGuestForm';

const defaultGuestForm = { name: '', email: '', diet: '' };

function AdditonalGuests() {
  const [guests, setGuests] = useState([]);

  const addGuest = () => {
    setGuests((prev) => [...prev, { ...defaultGuestForm }]);
  };

  const removeGuest = (selectedIndex) => {
    setGuests((prev) => [...prev.filter((_, index) => selectedIndex !== index)]);
  };

  return (
    <>
      <div className="flex-row">
        {guests.map((g, index) => (
          <>
            <AdditionalGuestForm />
            <button type="button" onClick={() => removeGuest(index)}>
              Töröl
            </button>
          </>
        ))}
        <button type="button" onClick={addGuest}>
          Vendég hozzáadása
        </button>
      </div>
    </>
  );
}

export default AdditonalGuests;
