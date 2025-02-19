import React, { useState } from 'react';
import ReactModal from 'react-modal';
import AdditonalGuests from './AdditonalGuests';

function GuestForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <div className="section">
        <form className="flex-column">
          <label>név</label>
          <input type="text" />
          <label>email</label>
          <input type="email" />
          <p>Részt veszek az esküvőn</p>
          <div>
            <input id="attendanceYes" type="radio" name="attendance" value="Igen" />
            <label htmlFor="attendanceYes">Igen</label>
          </div>
          <div>
            <input id="attendanceNo" type="radio" name="attendance" value="Nem" />
            <label htmlFor="attendanceNo">Nem</label>
          </div>
          <p>Spec étrend</p>
          <div>
            <input id="dietVega" type="checkbox" value="Vega" />
            <label htmlFor="dietVega">Vega</label>
          </div>
          <div>
            <input id="dietVegan" type="checkbox" value="Vegán" />
            <label htmlFor="dietVegan">Vegán</label>
          </div>
          <div>
            <input id="dietDiab" type="checkbox" value="Diabétesz" />
            <label htmlFor="dietDiab">Diabétesz</label>
          </div>
          <div>
            <input id="dietGluten" type="checkbox" value="Gluténmentes" />
            <label htmlFor="dietGluten">Gluténmentes</label>
          </div>
          <div>
            <input id="dietLactose" type="checkbox" value="Laktózmentes" />
            <label htmlFor="dietLactose">Laktózmentes</label>
          </div>
          <p>Szállást kérek</p>
          <div>
            <input id="accomodationYes" type="radio" name="accomodation" value="Igen" />
            <label htmlFor="accomodationYes">Igen</label>
          </div>
          <div>
            <input id="accomodationNo" type="radio" name="accomodation" value="Nem" />
            <label htmlFor="accomodationNo">Nem</label>
          </div>
          <p>Transzfert kérek</p>
          <div>
            <input id="transferYes" type="radio" name="transfer" value="Igen" />
            <label htmlFor="transferYes">Igen</label>
          </div>
          <div>
            <input id="transferNo" type="radio" name="transfer" value="Nem" />
            <label htmlFor="transferNo">Nem</label>
          </div>
          <button type="button" onClick={handleModalOpen}>
            További vendég
          </button>
          <button type="submit">Beküldés</button>
        </form>
      </div>
      <ReactModal isOpen={isModalOpen}>
        <AdditonalGuests />
        <button type="button" onClick={handleModalClose}>
          Mentés
        </button>
        <button type="button" onClick={handleModalClose}>
          Bezárás
        </button>
      </ReactModal>
    </>
  );
}

export default GuestForm;
