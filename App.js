import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement => Object => HTMLElement(render)

// const heading = React.createElement(
//   "h1",
//   { id: 'heading' },
//   "Namaste React By Suraj"
// );

// console.log(heading);

// jsx - HTML-like or XML-like 
// jsx - transpiler before it reaches the js - this works done by Parcel inside Babel
// jsx - Babel transpiled it to React.createElement => ReactElement - JS Object => HTMLElement(render)
// const jsxHeading = (<h1 className='heading'>
//   Namaste React By Suraj
// </h1>);

// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading);

// React Functional component is a funtion that return some pice of jsx code.

// const HeadingComponent = () => (
//   <div id='container'>
//     <h1 className='heading'>Namaste React Functional component</h1>
//   </div>
// )

const HeadingComponent = () => {
  return (
    <div id='container'>
      <h1 className='heading'>Namaste React Functional component</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);