import 'react';
import symbol2 from '../assets/symbol.jpg';

function Section({ className, children }) {
  return (
    <div className={className}>
      <img className="section-image upper-section-image" src={symbol2} />
      {children}
    </div>
  );
}

export default Section;
