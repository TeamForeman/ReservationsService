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
    let content = document.getElementsByClassName('content-em');
    let content2 = document.getElementsByClassName('box-em');


    if (content.item(0).style.display === 'block') {

      content.item(0).style.display = 'none';

      if (content2.item(0).style.height === '60%') {
        content2.item(0).style.height = '45%';
      } else {
        content2.item(0).style.height = '27%';
      }

      document.getElementsByClassName('arrow-em').item(0).classList.remove("up-em");

      document.getElementsByClassName('arrow-em').item(0).classList.add("down-em");
    } else {
      content.item(0).style.display = 'block';
      console.log('height =' , content2.item(0).style.height );
      if (content2.item(0).style.height === '27%' || content2.item(0).style.height ==='' ) {
        content2.item(0).style.height = '45%';
      } else {
        content2.item(0).style.height = '60%';
      }
      //console.log(document.getElementsByClassName('arrow-em').item(0).classList);
      //console.log(document.getElementsByClassName('arrow').item(0).classList);
      document.getElementsByClassName('arrow-em').item(0).classList.remove("down-em");
      document.getElementsByClassName('arrow-em').item(0).classList.add("up-em");
    }
  };

  return (
    <div >
      <button type="button-em" className="main_button-em" onClick = {openColapible}>GUESTS <i className="arrow-em down-em"></i></button>
      <div className="content-em">
        <div className ="content-style-grid-em">

          <div className = "adults-text-em">
            <span > Adults</span>
          </div>
          <div className="adults-button-minus-em" >
            <button className = "button-em"
              onClick={() => adults > 1 ? setAdults(adults - 1) : null}
            > - </button>
          </div>
          <span className ="adults-number-em">{adults}</span>
          <div className="adults-button-plus-em">
            <button className = "button-em"
              onClick={adults + children < guests ? () => setAdults(adults + 1) : null}
            > + </button>
          </div>


          <div className = "children-text-em">
            <span >children</span>
          </div>
          <div className="children-button-minus-em">
            <button className = "button-em"
              onClick={() => children > 0 ? setchildren(children - 1) : null}
            > - </button>
          </div>
          <span className ="children-number-em">{children}</span>
          <div className="children-button-plus-em">
            <button className = "button-em"
              onClick={adults + children < guests ? () => setchildren(children + 1) : null}
            > + </button>
          </div>


          <div className = "infants-text-em">
            <span >Infants</span>
          </div>
          <div className="infants-button-minus-em">
            <button className = "button-em"
              onClick={() => infants > 0 ? setInfants(infants - 1) : null}
            > - </button>
          </div>
          <span className ="infants-number-em">{infants}</span>
          <div className="infants-button-plus-em">
            <button className = "button-em"
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