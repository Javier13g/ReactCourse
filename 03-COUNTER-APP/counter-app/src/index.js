import React from 'react'
import { createRoot } from 'react-dom/client';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css'


//const divRoot =document.querySelector('#app');
const divCounter =document.querySelector('#counterApp');
const root = createRoot(/*divRoot,*/ divCounter);

var number = 0

//root.render(<PrimeraApp data="mandando datos por props" />);
root.render(/*<PrimeraApp data={"Desde prop klk"}/>,*/ <CounterApp value={number}/>);