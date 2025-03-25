import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Modal } from 'antd';

function AdditionalGuests({ additionalGuests, setAdditionalGuests }) {
  const { register, getValues, reset } = useForm({
    defaultValues: { diet: [] },
  });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const addGuest = () => {
    if (!selectedIndex) {
      setAdditionalGuests((prev) => [...prev, { name: getValues('guestName') }]);
      return;
    }

    setAdditionalGuests((prev) => prev.map((p, i) => (i === selectedIndex ? { name: getValues('guestName') } : p)));
    // onAddAdditionalGuests({ guestName: getValues('guestName') });
    // append({
    //   // is_attending: getValues('is_attending'),
    //   // requires_accomodation: getValues('requires_accomodation'),
    //   // requires_transfer: getValues('requires_transfer'),
    //   // diet: [],
    //   guestName: getValues('guestName'),
    // });
  };

  const editGuest = (idx) => {
    setSelectedIndex(idx);
    reset({ guestName: additionalGuests[idx].name });
    setIsOpen(true);
  };

  const removeGuest = (idx) => {
    setAdditionalGuests((prev) => [...prev.filter((_, i) => i !== idx)]);
  };

  const handleModalOpen = () => {
    setSelectedIndex(null);
    reset();
    setIsOpen(true);
  };

  return (
    <>
      <div className="flex-row">
        {additionalGuests.map((guest, index) => (
          <>
            <p>{guest.name}</p>
            <button type="button" onClick={() => editGuest(index)}>
              Szerkesztés
            </button>
            <button type="button" onClick={() => removeGuest(index)}>
              Töröl
            </button>
          </>
        ))}
        {/* {fields.map((field, index) => (
          <Fragment key={field.id}>
            <AdditionalGuestForm guestIndex={index} />
            <button type="button" onClick={() => removeGuest(index)}>
              Töröl
            </button>
          </Fragment>
        ))} */}
        <button type="button" onClick={handleModalOpen}>
          Vendég hozzáadása
        </button>
      </div>

      <Modal open={isOpen} onOk={() => addGuest()} onCancel={() => setIsOpen(false)}>
        <div>
          <form className="flex-column">
            <label htmlFor="guestName">Név</label>
            <input id="guestName" type="text" {...register('guestName', { required: true })} />
            <label htmlFor="guestEmail">E-mail</label>
            <input
              id="guestEmail"
              type="email"
              {...register('guestEmail', {
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Érvénytelen e-mail cím formátum',
                },
              })}
            />
            <p>Spec étrend</p>
            <div className="flex-row">
              <label htmlFor="guestDietVega">
                <input id="guestDietVega" type="checkbox" value="Vega" {...register('guestDiet')} />
                Vega
              </label>
              <label htmlFor="guestDietVegan">
                <input id="guestDietVegan" type="checkbox" value="Vegán" {...register('guestDiet')} />
                Vegán
              </label>
              <label htmlFor="guestDietDiab">
                <input id="guestDietDiab" type="checkbox" value="Diabétesz" {...register('guestDiet')} />
                Diabétesz
              </label>
            </div>
            <div className="flex-row">
              <label htmlFor="guestDietGluten">
                <input id="guestDietGluten" type="checkbox" value="Gluténmentes" {...register('guestDiet')} />
                Gluténmentes
              </label>
              <label htmlFor="guestDietLactose">
                <input id="guestDietLactose" type="checkbox" value="Laktózmentes" {...register('guestDiet')} />
                Laktózmentes
              </label>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default AdditionalGuests;
