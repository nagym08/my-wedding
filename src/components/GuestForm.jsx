import React from 'react';
import AdditonalGuests from './AdditonalGuests';
import { FormProvider, useForm } from 'react-hook-form';

function GuestForm() {
  const formMethods = useForm({
    defaultValues: { specDiet: [], additonalGuests: [] },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = formMethods;

  const submit = (data) => console.log(data);

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
              value="Igen"
              {...register('isAttending', { required: true })}
            />
            Igen
          </label>
          <label htmlFor="attendanceNo">
            <input
              id="attendanceNo"
              type="radio"
              name="attendance"
              value="Nem"
              {...register('isAttending', { required: true })}
            />
            Nem
          </label>

          <p>Szállást kérek</p>
          <label htmlFor="accomodationYes">
            <input
              id="accomodationYes"
              type="radio"
              name="accomodation"
              value="Igen"
              {...register('isAccomodationRequired', { required: true })}
            />
            Igen
          </label>

          <label htmlFor="accomodationNo">
            <input
              id="accomodationNo"
              type="radio"
              name="accomodation"
              value="Nem"
              {...register('isAccomodationRequired', { required: true })}
            />
            Nem
          </label>
          <p>Transzfert kérek</p>
          <label htmlFor="transferYes">
            <input
              id="transferYes"
              type="radio"
              name="transfer"
              value="Igen"
              {...register('isTransferRequired', { required: true })}
            />
            Igen
          </label>

          <label htmlFor="transferNo">
            <input
              id="transferNo"
              type="radio"
              name="transfer"
              value="Nem"
              {...register('isTransferRequired', { required: true })}
            />
            Nem
          </label>

          <p>Spec étrend</p>
          <label htmlFor="dietVega">
            <input id="dietVega" type="checkbox" value="Vega" {...register('specDiet')} />
            Vega
          </label>
          <label htmlFor="dietVegan">
            <input id="dietVegan" type="checkbox" value="Vegán" {...register('specDiet')} />
            Vegán
          </label>
          <label htmlFor="dietDiab">
            <input id="dietDiab" type="checkbox" value="Diabétesz" {...register('specDiet')} />
            Diabétesz
          </label>
          <label htmlFor="dietGluten">
            <input id="dietGluten" type="checkbox" value="Gluténmentes" {...register('specDiet')} />
            Gluténmentes
          </label>
          <label htmlFor="dietLactose">
            <input id="dietLactose" type="checkbox" value="Laktózmentes" {...register('specDiet')} />
            Laktózmentes
          </label>
          <button type="submit" disabled={!isValid}>
            Beküldés
          </button>
        </form>
        <AdditonalGuests />
      </div>
    </FormProvider>
  );
}

export default GuestForm;
