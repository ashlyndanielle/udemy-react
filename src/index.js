import React from 'react';
import ReactDOM from 'react-dom';
// Creat a new component that will produce some HTML
const App = () => {
  return <div>Hello World</div>
}
// Take this component's generated HTML and put it
// on the page ( render it to the DOM )
ReactDOM.render(<App />, document.querySelector('.container'));