import React, { useState } from 'react';
import AdditionalGuests from './AdditionalGuests';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import useSupabase from '../hooks/useSupabase';
import Section from './Section';
import { Divider, Input } from 'antd';

function Rsvp() {
  const { send } = useSupabase();
  const formMethods = useForm({
    defaultValues: { diet: [] },
  });

  const [additionalGuests, setAdditionalGuests] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    control,
  } = formMethods;

  const submit = async (data) => {
    // const { additionalGuests, ...mainGuest } = data;
    console.log([data, ...additionalGuests]);
    // await send([mainGuest, ...additionalGuests]);
  };

  const isAttending = watch('is_attending');

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <FormProvider {...formMethods}>
      <div className="section">
        <Section className="flex-column rest-section section-content">
          <h1>RSVP</h1>
          <form className="flex-column width-100" onSubmit={handleSubmit(submit)}>
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
            <div className="flex-column form-input" style={{ marginTop: '15px' }}>
              <span>Részt veszek az esküvőn</span>
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
            </div>
            {isAttending == 'true' && (
              <>
                <div className="flex-column form-input">
                  <span>Szállást kérek</span>
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
                </div>
                <div className="flex-column form-input">
                  <span>Transzfert kérek</span>
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
                </div>
                <div className="flex-column form-input">
                  <span>Speciális étrend</span>
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
                    <label htmlFor="dietGluten">
                      <input id="dietGluten" type="checkbox" value="Gluténmentes" {...register('diet')} />
                      Gluténmentes
                    </label>
                    <label htmlFor="dietLactose">
                      <input id="dietLactose" type="checkbox" value="Laktózmentes" {...register('diet')} />
                      Laktózmentes
                    </label>
                  </div>
                </div>
                <Divider style={{ borderColor: '#4f1507', color: '#4f1507' }}>További vendégek</Divider>
                <AdditionalGuests additionalGuests={additionalGuests} setAdditionalGuests={setAdditionalGuests} />
              </>
            )}
            <button
              className="button-59 button-59-primary"
              style={{ marginTop: '5px' }}
              type="submit"
              disabled={!isValid}
            >
              Beküldés
            </button>
          </form>
        </Section>
      </div>
    </FormProvider>
  );
}

export default Rsvp;
