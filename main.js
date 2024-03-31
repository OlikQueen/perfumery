import './src/scss/style.scss'
import { setupCounter } from './src/js/counter.js'

setupCounter(document.querySelector('#counter'))

import { modal } from './src/js/modal.js'
modal()

import { modalCity } from './src/js/modal-city.js'
modalCity()