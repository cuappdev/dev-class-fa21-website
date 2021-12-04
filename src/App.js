 /* eslint-disable */
import logo from './logo.svg';
import jin from './jin.png';
import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from 'react';

import './App.css';
import { data } from 'jquery';


function App() {
  const [show, setShow] = useState(false);

  const handleShow = (id) => setShow(!show)
  
  return (
    <>
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to AppDev :)
        </p>
      </header>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-light">Android</h1>
        </div>
      </div>
      
      <div className="container px-4">
        <div className="row gx-5">
          <div className="col">
            <div className="card" onClick={handleShow("kidus")} >
              <img src={jin} className="card-img-top" alt="jin" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src={jin} className="card-img-top" alt="jin" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src={jin} className="card-img-top" alt="jin" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <Modal show={show}>
        <Modal.Header closeButton  onClick={handleShow}>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="data">
            
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
