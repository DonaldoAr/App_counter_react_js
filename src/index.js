import { React } from "react";
import ReactDom from "react-dom";

import PrimeraApp from "./PrimeraApp";

import './index.css';
import CounterApp from "./CounterApp";



// Create a reference
const divRoot =document.querySelector('#root');

//ReactDom.render(<PrimeraApp saludo='Hola mundo' /> ,divRoot);

//ReactDom.render(<CounterApp value = {10} /> ,divRoot);


ReactDom.render(<PrimeraApp saludo = "Hola Luis" /> ,divRoot);