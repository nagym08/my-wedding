import React, { useState } from 'react';
import AdditionalGuestForm from './AdditionalGuestForm';

const defaultGuestForm = { name: '', email: '', diet: '' };

function AdditonalGuests() {
  const [guests, setGuests] = useState([{ ...defaultGuestForm }]);

  const addGuest = () => {
    setGuests((prev) => [...prev, { ...defaultGuestForm }]);
  };

  return (
    <>
      {guests.map((g) => (
        <AdditionalGuestForm />
      ))}
      <button type="button" onClick={addGuest}>
        Vendég hozzáadása
      </button>
    </>
  );
}

export default AdditonalGuests;
