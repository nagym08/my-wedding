import 'react';
import Section from './Section';

function ScheduleItem({ time, title, description }) {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ width: '20%' }}>
        <p className="secondary">{time}</p>
      </div>
      <div style={{ width: '80%' }}>
        <p>{title}</p>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
}

function Schedule() {
  return (
    <Section className="section schedule-section">
      <h1>Menetrend</h1>
      {scheduleItems.map((si) => (
        <div key={si.time} style={{ display: 'flex', width: '60%', marginBottom: '2em' }}>
          <div>{si.time}</div>
          <div style={{ flex: 1, borderBottom: '1px dotted' }} />
          <div>{si.title}</div>
        </div>
      ))}
    </Section>
  );
}

export default Schedule;

const scheduleItems = [
  {
    time: '16:00',
    title: 'Vendégvárás',
    description:
      'Szeretettel várunk benneteket egy kis harapnivalóval és frissítővel, hogy kellemesen induljon az este!',
  },
  {
    time: '17:00',
    title: 'Szertartás',
    description: 'Elérkezett a nagy pillanat! Meghitt szertartásunkon hivatalosan is összekötjük életünket.',
  },
  {
    time: '18:00',
    title: 'Gratuláció',
    description: 'Örömmel fogadjuk jókívánságaitokat, öleléseiteket és kedves szavaitokat ezen a különleges napon.',
  },
  {
    time: '19:30',
    title: 'Vacsora',
    description:
      'Ízletes fogásokkal és finom italokkal várunk titeket, hogy közösen ünnepeljünk egy felejthetetlen lakomával.',
  },
  {
    time: '23:00',
    title: 'Torta',
    description: 'Elérkezett az édesség ideje! Vágjuk fel együtt az esküvői tortát, és élvezzük az édes pillanatokat.',
  },
  {
    time: '00:00',
    title: 'Menyecsketánc',
    description:
      'Indulhat a menyecsketánc! A menyasszony új ruhában táncra perdül, és mindenki csatlakozhat az ünnepléshez.',
  },
];
