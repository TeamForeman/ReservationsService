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
      document.getElementsByClassName('arrow').item(0).classList.remove("up");document.getElementsByClassName('arrow').item(0).classList.add("down");
    } else {
      content.item(0).style.display = 'block';
      console.log(document.getElementsByClassName('arrow').item(0).classList);
      document.getElementsByClassName('arrow').item(0).classList.remove("down");document.getElementsByClassName('arrow').item(0).classList.add("up");
    }
  };

  return (
    <div >
      <button type="button" className="main_button" onClick = {openColapible}>GUESTS <i class="arrow down"></i></button>
      <div className="content">
        <div className ="content-style-grid">

          <div className = "adults-text">
            <span > Adults</span>
          </div>
          <div className="adults-button-minus" >
            <button className = "button"
              onClick={() => adults > 1 ? setAdults(adults - 1) : null}
            > - </button>
          </div>
          <span className ="adults-number">{adults}</span>
          <div className="adults-button-plus">
            <button className = "button"
              onClick={adults + children < guests ? () => setAdults(adults + 1) : null}
            > + </button>
          </div>


          <div className = "children-text">
            <span >children</span>
          </div>
          <div className="children-button-minus">
            <button className = "button"
              onClick={() => children > 0 ? setchildren(children - 1) : null}
            > - </button>
          </div>
          <span className ="children-number">{children}</span>
          <div className="children-button-plus">
            <button className = "button"
              onClick={adults + children < guests ? () => setchildren(children + 1) : null}
            > + </button>
          </div>


          <div className = "infants-text">
            <span >Infants</span>
          </div>
          <div className="infants-button-minus">
            <button className = "button"
              onClick={() => infants > 0 ? setInfants(infants - 1) : null}
            > - </button>
          </div>
          <span className ="infants-number">{infants}</span>
          <div className="infants-button-plus">
            <button className = "button"
              onClick={infants < guests * 3 ? () => setInfants(infants + 1) : null}
            > + </button>
          </div>


        </div>
        {/* <div className = "buttom-text">
          {guests} maximum. Infants don’t count toward the number of guests.
        </div> */}
      </div>

    </div>
  );
};

export default Guests;