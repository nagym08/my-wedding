import React from 'react';
import AdditionalGuests from './AdditionalGuests';
import { FormProvider, useForm } from 'react-hook-form';
import useSupabase from '../hooks/useSupabase';

function GuestForm() {
  const { send } = useSupabase();
  const formMethods = useForm({
    defaultValues: { diet: [], additionalGuests: [] },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = formMethods;

  const submit = async (data) => {
    const { additionalGuests, ...mainGuest } = data;
    console.log([mainGuest, ...additionalGuests]);
    await send([mainGuest, ...additionalGuests]);
  };

  return (
    <FormProvider {...formMethods}>
      <div className="section">
        <form className="flex-column" onSubmit={handleSubmit(submit)}>
          <label htmlFor="name">Név</label>
          <input id="name" type="text" {...register('name', { required: true })} />
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Érvénytelen e-mail cím formátum',
              },
            })}
          />
          <p>Részt veszek az esküvőn</p>
          <label htmlFor="attendanceYes">
            <input
              id="attendanceYes"
              type="radio"
              name="attendance"
              value={true}
              {...register('is_attending', { required: true })}
            />
            Igen
          </label>
          <label htmlFor="attendanceNo">
            <input
              id="attendanceNo"
              type="radio"
              name="attendance"
              value={false}
              {...register('is_attending', { required: true })}
            />
            Nem
          </label>

          <p>Szállást kérek</p>
          <label htmlFor="accomodationYes">
            <input
              id="accomodationYes"
              type="radio"
              name="accomodation"
              value={true}
              {...register('requires_accomodation', { required: true })}
            />
            Igen
          </label>

          <label htmlFor="accomodationNo">
            <input
              id="accomodationNo"
              type="radio"
              name="accomodation"
              value={false}
              {...register('requires_accomodation', { required: true })}
            />
            Nem
          </label>
          <p>Transzfert kérek</p>
          <label htmlFor="transferYes">
            <input
              id="transferYes"
              type="radio"
              name="transfer"
              value={true}
              {...register('requires_transfer', { required: true })}
            />
            Igen
          </label>

          <label htmlFor="transferNo">
            <input
              id="transferNo"
              type="radio"
              name="transfer"
              value={false}
              {...register('requires_transfer', { required: true })}
            />
            Nem
          </label>

          <p>Spec étrend</p>
          <label htmlFor="dietVega">
            <input id="dietVega" type="checkbox" value="Vega" {...register('diet')} />
            Vega
          </label>
          <label htmlFor="dietVegan">
            <input id="dietVegan" type="checkbox" value="Vegán" {...register('diet')} />
            Vegán
          </label>
          <label htmlFor="dietDiab">
            <input id="dietDiab" type="checkbox" value="Diabétesz" {...register('diet')} />
            Diabétesz
          </label>
          <label htmlFor="dietGluten">
            <input id="dietGluten" type="checkbox" value="Gluténmentes" {...register('diet')} />
            Gluténmentes
          </label>
          <label htmlFor="dietLactose">
            <input id="dietLactose" type="checkbox" value="Laktózmentes" {...register('diet')} />
            Laktózmentes
          </label>
          <button type="submit" disabled={!isValid}>
            Beküldés
          </button>
        </form>
        <AdditionalGuests />
      </div>
    </FormProvider>
  );
}

export default GuestForm;
