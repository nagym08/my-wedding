import React, { Fragment } from 'react';
import AdditionalGuestForm from './AdditionalGuestForm';
import { useFieldArray } from 'react-hook-form';

function AdditonalGuests() {
  const { fields, append, remove } = useFieldArray({ name: 'additonalGuests' });

  const addGuest = () => {
    append({ specDiet: [] });
  };

  const removeGuest = (selectedIndex) => {
    remove(selectedIndex);
  };

  return (
    <>
      <div className="flex-row">
        {fields.map((field, index) => (
          <Fragment key={field.id}>
            <AdditionalGuestForm guestIndex={index} />
            <button type="button" onClick={() => removeGuest(index)}>
              Töröl
            </button>
          </Fragment>
        ))}
        <button type="button" onClick={addGuest}>
          Vendég hozzáadása
        </button>
      </div>
    </>
  );
}

export default AdditonalGuests;
