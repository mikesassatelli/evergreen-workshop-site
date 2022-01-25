import React, { useState } from 'react';
import Routing from './Routing';

function App() {
  return (
    <>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />

    <Routing/>

    <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin="true"></script>
    <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="true"></script>
    <script>var Alert = ReactBootstrap.Alert;</script>
    </>
  )
}

export default App;