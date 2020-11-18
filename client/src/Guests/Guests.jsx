import React, {useState, useEffect} from 'react';
import Collapsible from 'react-collapsible';
import './Guests.css';
const Guests = (props) => {
  const [guests, setGuests] = useState(props.guests);

  const [adults, setAdults] = useState(1);

  const [children, setchildren] = useState(0);

  const [infants, setInfants] = useState(0);

  useEffect(() => {
    props.guestsUpdate(adults, children, infants);
  }, [adults, children, infants]);

  const openColapible = ()=> {
    let content = document.getElementsByClassName('content');
    //console.log(content.item(0).style.display);
    if (content.item(0).style.display === 'block') {
      content.item(0).style.display = 'none';
    } else {
      content.item(0).style.display = 'block';
    }
  };

  return (
    <div>
      <button type="button" className="main_button" onClick = {openColapible}>GUESTS</button>
      <div className="content">
        <p>Adults
          <button className = "button button1"
            onClick={() => adults > 1 ? setAdults(adults - 1) : null}
          > - </button>
          {adults}
          <button className = "button button2"
            onClick={adults + children < guests ? () => setAdults(adults + 1) : null}
          > + </button>
        </p>

        <p>Children
          <button className = "button button3"
            onClick={() => children > 0 ? setchildren(children - 1) : null}
          > - </button>
          {children}
          <button className = "button button4"
            onClick={adults + children < guests ? () => setchildren(children + 1) : null}
          > + </button>
        </p>

        <p>Infants
          <button className = "button button5"
            onClick={() => infants > 0 ? setInfants(infants - 1) : null}
          > - </button>
          {infants}
          <button className = "button button6"
            onClick={infants < guests * 3 ? () => setInfants(infants + 1) : null}
          > + </button>
        </p>
        <a>
          {guests} maximum. Infants don’t count toward the number of guests.
        </a>
      </div>
    </div>
  );
};

export default Guests;