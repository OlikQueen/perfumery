import './src/scss/style.scss'
import { setupCounter } from './src/js/counter.js'

setupCounter()

import { modal } from './src/js/modal.js'
modal()

import { choiceElement } from './src/js/choice-element.js'
choiceElement()

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



import noUiSlider from 'nouislider';
import './node_modules/nouislider/dist/nouislider.min.css';

document.addEventListener('DOMContentLoaded', function () {
  var slider = document.getElementById('range-slider');

  noUiSlider.create(slider, {
    start: [0, 999999], // Начальные значения ползунков
    connect: true, // Показывает цветную линию между двумя ползунками
    range: {
      'min': 0,
      'max': 999999
    },
    format: {
      to: function (value) {
        return Math.round(value); // Округление значения до целого числа
      },
      from: function (value) {
        return Math.round(value); // Округление значения до целого числа
      }
    }
  });



  var limitFieldMin = document.getElementById('slider-limit-value-min');
  var limitFieldMax = document.getElementById('slider-limit-value-max');

  slider.noUiSlider.on('update', function (values, handle) {
    (handle ? limitFieldMax : limitFieldMin).innerHTML = values[handle];
  });
});