import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Input, Modal } from 'antd';
import GuestEntry from './GuestEntry';

function AdditionalGuests({ additionalGuests, setAdditionalGuests }) {
  const {
    register,
    getValues,
    reset,
    control,
    formState: { isValid },
  } = useForm({
    defaultValues: { name: '', email: '', diet: [] },
  });
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(undefined);

  const addGuest = () => {
    if (selectedIndex == null)
      setAdditionalGuests((prev) => [...prev, { name: getValues('name'), email: getValues('email') }]);
    else
      setAdditionalGuests((prev) =>
        prev.map((p, i) => (i === selectedIndex ? { name: getValues('name'), email: getValues('email') } : p))
      );

    setIsOpen(false);
    setSelectedIndex(undefined);
  };

  const editGuest = (idx) => {
    setSelectedIndex(idx);
  };

  const handleModalOpen = () => {
    setSelectedIndex(null);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    setSelectedIndex(undefined);
  };

  const removeGuest = (idx) => {
    setAdditionalGuests((prev) => [...prev.filter((_, i) => i !== idx)]);
  };

  useEffect(() => {
    if (selectedIndex === undefined) return;

    if (selectedIndex === null) reset({ name: '', email: '' });
    else reset({ name: additionalGuests[selectedIndex].name, email: additionalGuests[selectedIndex].email });

    setIsOpen(true);
  }, [selectedIndex]);

  return (
    <>
      <div className="flex-column guest-entry-container width-100">
        {additionalGuests.map((guest, index) => (
          <GuestEntry name={guest.name} onEdit={() => editGuest(index)} onDelete={() => removeGuest(index)} />
        ))}
        <button className="button-59" type="button" onClick={handleModalOpen}>
          Vendég hozzáadása
        </button>
      </div>

      <Modal
        open={isOpen}
        onOk={() => addGuest()}
        onCancel={handleModalClose}
        style={{ fontFamily: 'Cormorant Garamond', color: '#7a3b23' }}
        centered={true}
        closeIcon={false}
        width={600}
        footer={[
          <button
            className="button-59"
            style={{ marginRight: '5px', marginTop: '20px' }}
            key="back"
            onClick={handleModalClose}
          >
            Mégse
          </button>,
          <button className="button-59 button-59-primary" key="submit" onClick={() => addGuest()} disabled={!isValid}>
            Mentés
          </button>,
        ]}
      >
        <div>
          <h1>{selectedIndex == null ? 'Vendég hozzáadása' : 'Vendég szerkesztése'}</h1>
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
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Érvénytelen e-mail cím formátum',
                },
              }}
              render={({ field }) => (
                <Input size="large" placeholder="E-mail" type="email" variant="underlined" {...field} />
              )}
            />
            <span style={{ ...fontSize20, marginTop: '15px' }}>Speciális étrend</span>
            <div className="flex-row">
              <label style={fontSize20} htmlFor="guestDietVega">
                <input id="guestDietVega" type="checkbox" value="Vega" {...register('guestDiet')} />
                Vega
              </label>
              <label style={fontSize20} htmlFor="guestDietVegan">
                <input id="guestDietVegan" type="checkbox" value="Vegán" {...register('guestDiet')} />
                Vegán
              </label>
              <label style={fontSize20} htmlFor="guestDietDiab">
                <input id="guestDietDiab" type="checkbox" value="Cukormentes" {...register('guestDiet')} />
                Cukormentes
              </label>
              <label style={fontSize20} htmlFor="guestDietGluten">
                <input id="guestDietGluten" type="checkbox" value="Gluténmentes" {...register('guestDiet')} />
                Gluténmentes
              </label>
              <label style={fontSize20} htmlFor="guestDietLactose">
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

const fontSize20 = { fontSize: '20px' };

export default AdditionalGuests;
