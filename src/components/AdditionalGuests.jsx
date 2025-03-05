import React, { Fragment } from 'react';
import AdditionalGuestForm from './AdditionalGuestForm';
import { useFieldArray, useFormContext } from 'react-hook-form';

function AdditionalGuests() {
  const formMethods = useFormContext();
  const { getValues } = formMethods;
  const { fields, append, remove } = useFieldArray({ name: 'additionalGuests' });

  const addGuest = () => {
    append({
      is_attending: getValues('is_attending'),
      requires_accomodation: getValues('requires_accomodation'),
      requires_transfer: getValues('requires_transfer'),
      diet: [],
    });
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

export default AdditionalGuests;
