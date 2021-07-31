import { React } from "react";
import ReactDom from "react-dom";
import PrimeraApp from "./PrimeraApp";

import './index.css';



// Create a reference
const divRoot =document.querySelector('#root');

ReactDom.render(<PrimeraApp  /> ,divRoot);