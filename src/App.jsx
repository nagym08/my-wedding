import "./App.css"
import Photo from "./components/Photo"
import Rvsp from "./components/Rvsp"
import Schedule from "./components/Schedule"
import LocationInfo from "./components/LocationInfo"

function App() {
  return (
    <>
      <nav className="header">
        <a href="#schedule">Menetred</a>
        <a href="#location">Helyszín</a>
        <a href="#rvsp">RVSP</a>
        <a href="#photo">Fotó</a>
      </nav>
      <main>
        <section id="schedule">
          <Schedule />
        </section>
        <section id="location">
          <LocationInfo />
        </section>
        <section id="rvsp">
          <Rvsp />
        </section>
        <section id="photo">
          <Photo />
        </section>
      </main>
    </>
  )
}

export default App
