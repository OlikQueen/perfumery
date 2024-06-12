import './src/scss/style.scss'
import { setupCounter } from './src/js/counter.js'

setupCounter()

import { modal } from './src/js/modal.js'
modal()

import { choiceCity } from './src/js/choice-city.js'
choiceCity()

import { toggle } from './src/js/toggle.js'
toggle()

import { range } from './src/js/range.js'
range()

import { slider } from "slider00";
import './node_modules/slider00/dist/slider00.css';



import db from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';

async function fetchData() {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
}

fetchData();