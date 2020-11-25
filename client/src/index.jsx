import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';
import Text from './TextComponent/Text.jsx';


// ReactDom.render(<Text/>, document.getElementById('text'));

if (document.getElementById('app')) {
  ReactDom.render(<App/>, document.getElementById('app'));
} else {
  ReactDom.render(<App/>, document.getElementById('service2') );
}
