import React from 'react';

function AdditionalGuestForm({ onSave, initialValues }) {
  const { register } = useForm({
    defaultValues: initialValues ?? { diet: [] },
  });

  return (
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
  );
}

export default AdditionalGuestForm;
