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
          {...register(`additonalGuests[${guestIndex}].name`, { required: true })}
        />
        <label htmlFor={`email${guestIndex}`}>E-mail</label>
        <input
          id={`email${guestIndex}`}
          type="email"
          {...register(`additonalGuests[${guestIndex}].email`, {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Érvénytelen e-mail cím formátum',
            },
          })}
        />
        <p>Spec étrend</p>
        <label htmlFor={`dietVega${guestIndex}`}>
          <input
            id={`dietVega${guestIndex}`}
            type="checkbox"
            value="Vega"
            {...register(`additonalGuests[${guestIndex}].specDiet`)}
          />
          Vega
        </label>
        <label htmlFor={`dietVegan${guestIndex}`}>
          <input
            id={`dietVegan${guestIndex}`}
            type="checkbox"
            value="Vegán"
            {...register(`additonalGuests[${guestIndex}].specDiet`)}
          />
          Vegán
        </label>
        <label htmlFor={`dietDiab${guestIndex}`}>
          <input
            id={`dietDiab${guestIndex}`}
            type="checkbox"
            value="Diabétesz"
            {...register(`additonalGuests[${guestIndex}].specDiet`)}
          />
          Diabétesz
        </label>
        <label htmlFor={`dietGluten${guestIndex}`}>
          <input
            id={`dietGluten${guestIndex}`}
            type="checkbox"
            value="Gluténmentes"
            {...register(`additonalGuests[${guestIndex}].specDiet`)}
          />
          Gluténmentes
        </label>
        <label htmlFor={`dietLactose${guestIndex}`}>
          <input
            id={`dietLactose${guestIndex}`}
            type="checkbox"
            value="Laktózmentes"
            {...register(`additonalGuests[${guestIndex}].specDiet`)}
          />
          Laktózmentes
        </label>
      </form>
    </div>
  );
}

export default AdditionalGuestForm;
