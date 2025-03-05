import './App.css';
import Photo from './components/Photo';
import Schedule from './components/Schedule';
import LocationInfo from './components/LocationInfo';
import GuestForm from './components/GuestForm';
import { createClient } from '@supabase/supabase-js';

export const supabaseClient = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_API_KEY);

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
          <GuestForm />
        </section>
        <section id="photo">
          <Photo />
        </section>
      </main>
    </>
  );
}

export default App;
