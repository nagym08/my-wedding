import React from 'react';
import AdditionalGuests from './AdditionalGuests';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import useSupabase from '../hooks/useSupabase';
import Section from './Section';
import { Button, Input } from 'antd';

function Rsvp() {
  const { send } = useSupabase();
  const formMethods = useForm({
    defaultValues: { diet: [], additionalGuests: [] },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    control,
  } = formMethods;

  const submit = async (data) => {
    const { additionalGuests, ...mainGuest } = data;
    console.log([mainGuest, ...additionalGuests]);
    // await send([mainGuest, ...additionalGuests]);
  };

  const isAttending = watch('is_attending');

  return (
    <FormProvider {...formMethods}>
      <div className="section">
        <Section className="flex-column rest-section ">
          <h1>RSVP</h1>
          <form className="flex-column" onSubmit={handleSubmit(submit)}>
            {/* <label htmlFor="name">Név</label> */}
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input size="large" placeholder="Név" type="text" variant="underlined" {...field} />
              )}
            />
            {/* <Input variant="underlined" type="text" {...register('name', { required: true })} /> */}
            {/* <label htmlFor="name">Név</label>
            <input id="name" type="text" {...register('name', { required: true })} /> */}
            {/* <label htmlFor="email">E-mail</label> */}
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
            {/* <input
              id="email"
              type="email"
              {...register('email', {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Érvénytelen e-mail cím formátum',
                },
              })}
            /> */}
            <p>Részt veszek az esküvőn</p>
            <div className="flex-row">
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
            </div>
            {isAttending == 'true' && (
              <>
                <p>Szállást kérek</p>
                <div className="flex-row">
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
                </div>
                <p>Transzfert kérek</p>
                <div className="flex-row">
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
                </div>

                <p>Spec étrend</p>
                <div className="flex-row">
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
                </div>
                <div className="flex-row">
                  <label htmlFor="dietGluten">
                    <input id="dietGluten" type="checkbox" value="Gluténmentes" {...register('diet')} />
                    Gluténmentes
                  </label>
                  <label htmlFor="dietLactose">
                    <input id="dietLactose" type="checkbox" value="Laktózmentes" {...register('diet')} />
                    Laktózmentes
                  </label>
                </div>
                <AdditionalGuests />
              </>
            )}
            <Button type="primary" htmlType="submit" disabled={!isValid}>
              Beküldés
            </Button>
          </form>
        </Section>
      </div>
    </FormProvider>
  );
}

export default Rsvp;
