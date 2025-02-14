import React from "react"

function AdditionalGuestForm() {
  return (
    <div>
      <form className="flex-column">
        <label>név</label>
        <input type="text" />
        <label>email</label>
        <input type="email" />
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
      </form>
    </div>
  )
}

export default AdditionalGuestForm
