import React from 'react';
import { useFormContext } from 'react-hook-form';

function AdditionalGuestForm({ guestIndex }) {
  const formMethods = useFormContext();
  const { register } = formMethods;

  return (
    <div>
      <form className="flex-column">
        <label htmlFor={`name${guestIndex}`}>Név</label>
        <input
          id={`name${guestIndex}`}
          type="text"
          {...register(`additionalGuests[${guestIndex}].name`, { required: true })}
        />
        <label htmlFor={`email${guestIndex}`}>E-mail</label>
        <input
          id={`email${guestIndex}`}
          type="email"
          {...register(`additionalGuests[${guestIndex}].email`, {
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Érvénytelen e-mail cím formátum',
            },
          })}
        />
        <p>Spec étrend</p>
        <div className="flex-row">
          <label htmlFor={`dietVega${guestIndex}`}>
            <input
              id={`dietVega${guestIndex}`}
              type="checkbox"
              value="Vega"
              {...register(`additionalGuests[${guestIndex}].diet`)}
            />
            Vega
          </label>
          <label htmlFor={`dietVegan${guestIndex}`}>
            <input
              id={`dietVegan${guestIndex}`}
              type="checkbox"
              value="Vegán"
              {...register(`additionalGuests[${guestIndex}].diet`)}
            />
            Vegán
          </label>
          <label htmlFor={`dietDiab${guestIndex}`}>
            <input
              id={`dietDiab${guestIndex}`}
              type="checkbox"
              value="Diabétesz"
              {...register(`additionalGuests[${guestIndex}].diet`)}
            />
            Diabétesz
          </label>
        </div>
        <div className="flex-row">
          <label htmlFor={`dietGluten${guestIndex}`}>
            <input
              id={`dietGluten${guestIndex}`}
              type="checkbox"
              value="Gluténmentes"
              {...register(`additionalGuests[${guestIndex}].diet`)}
            />
            Gluténmentes
          </label>
          <label htmlFor={`dietLactose${guestIndex}`}>
            <input
              id={`dietLactose${guestIndex}`}
              type="checkbox"
              value="Laktózmentes"
              {...register(`additionalGuests[${guestIndex}].diet`)}
            />
            Laktózmentes
          </label>
        </div>
      </form>
    </div>
  );
}

export default AdditionalGuestForm;
