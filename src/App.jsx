import { Navbar } from './components/Navbar';
import './App.css';
import Photo from './components/Photo';
import Schedule from './components/Schedule';
import LocationInfo from './components/LocationInfo';
import Rsvp from './components/Rsvp';
import { createClient } from '@supabase/supabase-js';
import Header from './components/Header';

import mainImg from './assets/us2.JPG';

export const supabaseClient = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_API_KEY);

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="main-content-container">
        <div className="main-content">
          <img className="main-image" src={mainImg} />
          <main>
            <section id="schedule">
              <Schedule />
            </section>
            <section id="location">
              <LocationInfo />
            </section>
            <section id="rsvp">
              <Rsvp />
            </section>
            <section id="photo">
              <Photo />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
