/* eslint-disable */
import logo from "./logo.png";
import aarushi from "./aarushi.jpeg";
import ben from "./ben.jpeg";
import carnell from "./challenger-carnell.jpeg";
import christina from "./christina.jpeg";
import elvis from "./elvis.jpeg";
import emily from "./emily.jpeg";
import jessica from "./jessica.jpeg";
import jin from "./jin.png";
import jonah from "./jonah.jpeg";
import justin from "./justin.jpeg";
import kidus from "./kidus.jpeg";
import michelle from "./michelle.png";
import vp from "./vivian-p.jpeg";
import vn from "./vivian.jpeg";
import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";

import "./App.css";

function App() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Welcome to AppDev :)</p>
                </header>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4 text-light">Android</h1>
                    </div>
                </div>
                <div className="container px-4">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="card border-0">
                                <img
                                    src={aarushi}
                                    className="card-img-top"
                                    alt="aarushi"
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        What are grilled cheese sandwich ?!?!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0">
                                <img
                                    src={ben}
                                    className="card-img-top"
                                    alt="ben"
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        Me like cycling 🚴‍♀️
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0">
                                <img
                                    src={jonah}
                                    className="card-img-top"
                                    alt="jonah"
                                />
                                <div className="card-body">
                                    <p className="card-text">Me chef 👨‍🍳</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4 text-light">iOS</h1>
                    </div>
                </div>
                <div className="container px-4">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="card border-0">
                                <img
                                    src={justin}
                                    className="card-img-top"
                                    alt="justin"
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        I have been to 30 different cities
                                        across 11 countries 🎉!!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0">
                                <img
                                    src={vn}
                                    className="card-img-top"
                                    alt="vivian"
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        I am a cereal killer (I eat my cereal
                                        and then drink the milk)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0">
                                <img
                                    src={elvis}
                                    className="card-img-top"
                                    alt="elvis"
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        🚗🚙🚗🚙🚗 ~ I love transformers ~
                                        🚙🚗🚙🚗🚙🚗🚙🚗🚙
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4 text-light">Marketing</h1>
                    </div>
                </div>
                <div className="container px-4 col-md-7">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="card border-0">
                                <img
                                    src={carnell}
                                    className="card-img-top"
                                    alt="carnell"
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        Maple syrup runs in my blood 🍁🍯🇨🇦
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0">
                                <img
                                    src={vp}
                                    className="card-img-top"
                                    alt="vp"
                                />
                                <div className="card-body">
                                    <p className="card-text">Me fashion 💃💅</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4 text-light">Design</h1>
                    </div>
                </div>
                <div className="container px-4">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="card border-0">
                                <img
                                    src={jin}
                                    className="card-img-top"
                                    alt="jin"
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        Me like rocks 🗿
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0">
                                <img
                                    src={christina}
                                    className="card-img-top"
                                    alt="kristina"
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        I am the terminator 🤘🎸
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0">
                                <img
                                    src={michelle}
                                    className="card-img-top"
                                    alt="michelle"
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        I am boxing chad 🥊
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0">
                                <img
                                    src={emily}
                                    className="card-img-top"
                                    alt="emily"
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        Fruits are scary 😳
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>]
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4 text-light">Backend</h1>
                    </div>
                </div>
                <div className="container px-4 col-md-7">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="card border-0">
                                <img
                                    src={jessica}
                                    className="card-img-top"
                                    alt="jessica"
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        I like to surf 🌊🏄‍♀️
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0">
                                <img
                                    src={kidus}
                                    className="card-img-top"
                                    alt="kidus"
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        I am a rochester imposter
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
        </>
    );
}

export default App;
