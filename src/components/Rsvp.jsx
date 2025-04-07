import React, { useEffect, useState } from 'react';
import AdditionalGuests from './AdditionalGuests';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import Section from './Section';
import { Divider, Input, message, Spin } from 'antd';
import { supabaseClient } from '../App';

function Rsvp() {
  const formMethods = useForm({
    defaultValues: { diet: [] },
  });

  const [additionalGuests, setAdditionalGuests] = useState([]);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [isSubmitError, setIsSubmitError] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState(false);

  const sendData = async (payload) => {
    const { data, error } = await supabaseClient.from('guests').insert(payload).select();

    if (error) {
      setIsSubmitError(true);
      return;
    }

    setIsSubmitSuccessful(true);
  };

  const submitSuccess = () => {
    messageApi.open({
      type: 'success',
      content: 'Sikeres beküldés.',
    });
  };

  const submitError = () => {
    messageApi.open({
      type: 'error',
      content: 'Hiba történt a beküldés során. Kérjük, próbálkozz később!',
    });
  };

  const {
    register,
    handleSubmit,
    formState: { isValid },
    watch,
    control,
    reset,
  } = formMethods;

  const submit = async (data) => {
    setIsLoading(true);
    await sendData([
      {
        name: data.name,
        email: data.email,
        is_attending: data.is_attending,
        requires_accomodation: data.requires_accomodation ?? false,
        requires_transfer: data.requires_transfer ?? false,
        diet: data.other ? [...data.diet, data.other] : [...data.diet],
      },
      ...additionalGuests.map((ag) => ({
        name: ag.name,
        email: ag.email,
        is_attending: data.is_attending,
        requires_accomodation: data.requires_accomodation ?? false,
        requires_transfer: data.requires_transfer ?? false,
        diet: ag.other ? [...ag.diet, ag.other] : [...ag.diet],
      })),
    ]);
  };

  useEffect(() => {
    if (!isSubmitSuccessful) return;

    submitSuccess();
    reset();
    setAdditionalGuests([]);
    setIsSubmitSuccessful(false);
    setIsLoading(false);
  }, [isSubmitSuccessful]);

  useEffect(() => {
    if (!isSubmitError) return;

    submitError();
    setIsSubmitError(false);
    setIsLoading(false);
  }, [isSubmitError]);

  const isAttending = watch('is_attending');

  return (
    <>
      {contextHolder}
      <FormProvider {...formMethods}>
        <div className="section">
          <Section className="flex-column rest-section section-content">
            <h1>Visszajelzés</h1>
            <form className="flex-column width-100" onSubmit={handleSubmit(submit)}>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input size="large" placeholder="Név*" type="text" variant="underlined" {...field} />
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
                  <Input size="large" placeholder="E-mail*" type="email" variant="underlined" {...field} />
                )}
              />
              <div className="flex-column form-input" style={{ marginTop: '15px' }}>
                <span>Részt veszek az esküvőn*</span>
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
                    <span>Szállást kérek*</span>
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
                    <span>Transzfert kérek*</span>
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
                    <div className="diet-container">
                      <label htmlFor="dietVega">
                        <input id="dietVega" type="checkbox" value="Vega" {...register('diet')} />
                        Vega
                      </label>
                      <label htmlFor="dietVegan">
                        <input id="dietVegan" type="checkbox" value="Vegán" {...register('diet')} />
                        Vegán
                      </label>
                      <label htmlFor="dietDiab">
                        <input id="dietDiab" type="checkbox" value="Cukormentes" {...register('diet')} />
                        Cukormentes
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
                    <div>
                      <Controller
                        name="other"
                        control={control}
                        render={({ field }) => (
                          <Input size="large" placeholder="Egyéb" type="text" variant="underlined" {...field} />
                        )}
                      />
                    </div>
                  </div>
                  <Divider style={{ borderColor: '#7a3b23', color: '#7a3b23' }}>További vendégek</Divider>
                  <AdditionalGuests additionalGuests={additionalGuests} setAdditionalGuests={setAdditionalGuests} />
                </>
              )}
              <button
                className="button-59 button-59-primary"
                style={{ marginTop: '5px', marginBottom: '100px' }}
                type="submit"
                disabled={!isValid}
              >
                Beküldés
              </button>
            </form>
          </Section>
        </div>
      </FormProvider>
      {isLoading && <Spin fullscreen={true} />}
    </>
  );
}

export default Rsvp;
