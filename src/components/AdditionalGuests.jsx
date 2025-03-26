import React, { Fragment, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Input, Modal } from 'antd';
import GuestEntry from './GuestEntry';

function AdditionalGuests({ additionalGuests, setAdditionalGuests }) {
  const { register, getValues, reset, control } = useForm({
    defaultValues: { diet: [] },
  });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const addGuest = () => {
    if (!selectedIndex) {
      setAdditionalGuests((prev) => [...prev, { name: getValues('name'), email: getValues('email') }]);
      return;
    }

    setAdditionalGuests((prev) =>
      prev.map((p, i) => (i === selectedIndex ? { name: getValues('name'), email: getValues('email') } : p))
    );
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
    console.log({ name: additionalGuests[idx].name, email: additionalGuests[idx].email });
    reset({ name: additionalGuests[idx].name, email: additionalGuests[idx].email });
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
      <div className="flex-column guest-entry-container width-100">
        {additionalGuests.map((guest, index) => (
          <GuestEntry name={guest.name} onEdit={() => editGuest(index)} onDelete={() => removeGuest(index)} />
        ))}
        <Button type="primary" htmlType="button" onClick={handleModalOpen}>
          Vendég hozzáadása
        </Button>
      </div>

      <Modal open={isOpen} onOk={() => addGuest()} onCancel={() => setIsOpen(false)}>
        <div>
          <form className="flex-column">
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input size="large" placeholder="Név" type="text" variant="underlined" {...field} />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Érvénytelen e-mail cím formátum',
                },
              }}
              render={({ field }) => (
                <Input size="large" placeholder="E-mail" type="email" variant="underlined" {...field} />
              )}
            />
            <p>Speciális étrend</p>
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
