
import ReactDom from 'react-dom';
import React, { useState } from 'react';

// eslint-disable-next-line func-style
function Example () {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
ReactDom.render(<Example/>, document.getElementById('app') );