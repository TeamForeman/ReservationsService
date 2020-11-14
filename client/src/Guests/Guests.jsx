import React, {useState} from 'react';
import Collapsible from 'react-collapsible';
import './Guests.css';
const Guests = ({}) => {

  const [adults, setAdults] = useState(1);

  const [children, setchildren] = useState(0);

  const [infants, setInfants] = useState(0);

  return (
    <Collapsible trigger = "Guests">
      <p>Adults
        <button className = "button button1"
          onClick={() => adults > 0 ? setAdults(adults - 1) : null}
        > - </button>
        {adults}
        <button className = "button button2"
          onClick={() => setAdults(adults + 1)}
        > + </button>
      </p>

      <p>Children
        <button className = "button button3"
          onClick={() => children > 0 ? setchildren(children - 1) : null}
        > - </button>
        {children}
        <button className = "button button4"
          onClick={() => setchildren(children + 1)}
        > + </button>
      </p>

      <p>Infants
        <button className = "button button5"
          onClick={() => infants > 0 ? setInfants(infants - 1) : null}
        > - </button>
        {infants}
        <button className = "button button6"
          onClick={() => setInfants(infants - 1)}
        > + </button>
      </p>
    </Collapsible>
  );
};

export default Guests;