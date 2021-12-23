'use strict';

let Seattle = {
  name: 'Seattle',
  hours: 14,
  minCust: 23,
  maxCust: 65,
  AvrCookies: 6.3,
  hourlyCookies: {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(23);
      max = Math.floor(65);
      return Math.floor(Math.random() * (65 - 23 + 1) + 23); //The maximum is inclusive and the minimum is inclusive
      console.log(getRandomIntInclusive)
    }
  }
}