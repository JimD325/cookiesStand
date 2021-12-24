'use strict';
let hours =['6 a.m','7 a.m','8 a.m','9 a.m','10 a.m','11 a.m','12 p.m','1 p.m','2 p.m','3 p.m','4 p.m','5 p.m','6 p.m','7 p.m'];


let Seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avr: 6.3,
  dailyTotal: 0,
  hourlyCookieArray :[],
  randomCustomer: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //random number of customers
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++){
      let hourlyCustomer= this.randomCustomer(); //stores randomly generated customer count for one hour
      let hourlyCookies= Math.ceil(hourlyCustomer*this.avr);
      this.dailyTotal += hourlyCookies;
      this.hourlyCookieArray.push(hourlyCookies);
    }
  },
  render: function() {
    this.calcCookiesPerHour();
    // console.log(this.dailyTotal);
    // console.log(this.hourlyCookieArray);
    // console.log(`In ${hours.length} hours of operation, our ${this.name} location has sold ${this.dailyTotal} cookies!`);
    // header element creation using DOM manipulation
    let headerElement = document.createElement('h2');
    let headText = document.createTextNode(`${this.name} location cookie sales by hour`);
    headerElement.appendChild(headText);
    let headPosition = document.getElementsByTagName('div')[0];
    headPosition.appendChild(headerElement);
    // list element creation using DOM manipulation
    let listElement = document.createElement('ul');
    let listText = document.createTextNode('');
    listElement.appendChild(listText);
    let listPosition = document.getElementsByTagName('div')[0];
    listPosition.appendChild(listElement);
    // list item element creation using dom manipulation, using a for loop to iterate the entire list.
    for (let i = 0; i < hours.length; i++){
      let itemElement = document.createElement('li');
      let itemText = document.createTextNode(`${hours[i]} ${this.hourlyCookieArray[i]} cookies`);
      itemElement.appendChild(itemText);
      let itemPosition = document.getElementsByTagName('ul')[0];
      itemPosition.appendChild(itemElement);
    }
    // adding the Total cookies sold on that day using DOM manipulation, likely a cleaner way exists, should ask about it.
    for (let i = 14; i <= hours.length; i++){
      let itemElement = document.createElement('li');
      let itemText = document.createTextNode(`Total: ${this.dailyTotal} cookies`);
      itemElement.appendChild(itemText);
      let itemPosition = document.getElementsByTagName('ul')[0];
      itemPosition.appendChild(itemElement);
    }
  },
};
Seattle.render();
///////////////////////////////////
let Tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avr: 1.2,
  dailyTotal: 0,
  hourlyCookieArray :[],
  randomCustomer: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //random number of customers
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++){
      let hourlyCustomer= this.randomCustomer(); //stores randomly generated customer count for one hour
      let hourlyCookies= Math.ceil(hourlyCustomer*this.avr);
      this.dailyTotal += hourlyCookies;
      this.hourlyCookieArray.push(hourlyCookies);
    }
  },
  render: function() {
    this.calcCookiesPerHour();
    // console.log(this.dailyTotal);
    // console.log(this.hourlyCookieArray);
    // console.log(`In ${hours.length} hours of operation, our ${this.name} location has sold ${this.dailyTotal} cookies!`);
    // header element creation using DOM manipulation
    let headerElement = document.createElement('h2');
    let headText = document.createTextNode(`${this.name} location cookie sales by hour`);
    headerElement.appendChild(headText);
    let headPosition = document.getElementsByTagName('div')[0];
    headPosition.appendChild(headerElement);
    // list element creation using DOM manipulation
    let listElement = document.createElement('ul');
    let listText = document.createTextNode('');
    listElement.appendChild(listText);
    let listPosition = document.getElementsByTagName('div')[0];
    listPosition.appendChild(listElement);
    // list item element creation using dom manipulation, using a for loop to iterate the entire list.
    for (let i = 0; i < hours.length; i++){
      let itemElement = document.createElement('li');
      let itemText = document.createTextNode(`${hours[i]} ${this.hourlyCookieArray[i]} cookies`);
      itemElement.appendChild(itemText);
      let itemPosition = document.getElementsByTagName('ul')[1];
      itemPosition.appendChild(itemElement);
    }
    // adding the Total cookies sold on that day using DOM manipulation, likely a cleaner way exists, should ask about it.
    for (let i = 14; i <= hours.length; i++){
      let itemElement = document.createElement('li');
      let itemText = document.createTextNode(`Total: ${this.dailyTotal} cookies`);
      itemElement.appendChild(itemText);
      let itemPosition = document.getElementsByTagName('ul')[1];
      itemPosition.appendChild(itemElement);
    }
  },
};
Tokyo.render();
///////////////////////////////////
let Dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avr: 3.7,
  dailyTotal: 0,
  hourlyCookieArray :[],
  randomCustomer: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //random number of customers
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++){
      let hourlyCustomer= this.randomCustomer(); //stores randomly generated customer count for one hour
      let hourlyCookies= Math.ceil(hourlyCustomer*this.avr);
      this.dailyTotal += hourlyCookies;
      this.hourlyCookieArray.push(hourlyCookies);
    }
  },
  render: function() {
    this.calcCookiesPerHour();
    // console.log(this.dailyTotal);
    // console.log(this.hourlyCookieArray);
    // console.log(`In ${hours.length} hours of operation, our ${this.name} location has sold ${this.dailyTotal} cookies!`);
    // header element creation using DOM manipulation
    let headerElement = document.createElement('h2');
    let headText = document.createTextNode(`${this.name} location cookie sales by hour`);
    headerElement.appendChild(headText);
    let headPosition = document.getElementsByTagName('div')[0];
    headPosition.appendChild(headerElement);
    // list element creation using DOM manipulation
    let listElement = document.createElement('ul');
    let listText = document.createTextNode('');
    listElement.appendChild(listText);
    let listPosition = document.getElementsByTagName('div')[0];
    listPosition.appendChild(listElement);
    // list item element creation using dom manipulation, using a for loop to iterate the entire list.
    for (let i = 0; i < hours.length; i++){
      let itemElement = document.createElement('li');
      let itemText = document.createTextNode(`${hours[i]} ${this.hourlyCookieArray[i]} cookies`);
      itemElement.appendChild(itemText);
      let itemPosition = document.getElementsByTagName('ul')[2];
      itemPosition.appendChild(itemElement);
    }
    // adding the Total cookies sold on that day using DOM manipulation, likely a cleaner way exists, should ask about it.
    for (let i = 14; i <= hours.length; i++){
      let itemElement = document.createElement('li');
      let itemText = document.createTextNode(`Total: ${this.dailyTotal} cookies`);
      itemElement.appendChild(itemText);
      let itemPosition = document.getElementsByTagName('ul')[2];
      itemPosition.appendChild(itemElement);
    }
  },
};
Dubai.render();
///////////////////////////////////
let Paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avr: 2.3,
  dailyTotal: 0,
  hourlyCookieArray :[],
  randomCustomer: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //random number of customers
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++){
      let hourlyCustomer= this.randomCustomer(); //stores randomly generated customer count for one hour
      let hourlyCookies= Math.ceil(hourlyCustomer*this.avr);
      this.dailyTotal += hourlyCookies;
      this.hourlyCookieArray.push(hourlyCookies);
    }
  },
  render: function() {
    this.calcCookiesPerHour();
    // console.log(this.dailyTotal);
    // console.log(this.hourlyCookieArray);
    // console.log(`In ${hours.length} hours of operation, our ${this.name} location has sold ${this.dailyTotal} cookies!`);
    // header element creation using DOM manipulation
    let headerElement = document.createElement('h2');
    let headText = document.createTextNode(`${this.name} location cookie sales by hour`);
    headerElement.appendChild(headText);
    let headPosition = document.getElementsByTagName('div')[0];
    headPosition.appendChild(headerElement);
    // list element creation using DOM manipulation
    let listElement = document.createElement('ul');
    let listText = document.createTextNode('');
    listElement.appendChild(listText);
    let listPosition = document.getElementsByTagName('div')[0];
    listPosition.appendChild(listElement);
    // list item element creation using dom manipulation, using a for loop to iterate the entire list.
    for (let i = 0; i < hours.length; i++){
      let itemElement = document.createElement('li');
      let itemText = document.createTextNode(`${hours[i]} ${this.hourlyCookieArray[i]} cookies`);
      itemElement.appendChild(itemText);
      let itemPosition = document.getElementsByTagName('ul')[3];
      itemPosition.appendChild(itemElement);
    }
    // adding the Total cookies sold on that day using DOM manipulation, likely a cleaner way exists, should ask about it.
    for (let i = 14; i <= hours.length; i++){
      let itemElement = document.createElement('li');
      let itemText = document.createTextNode(`Total: ${this.dailyTotal} cookies`);
      itemElement.appendChild(itemText);
      let itemPosition = document.getElementsByTagName('ul')[3];
      itemPosition.appendChild(itemElement);
    }
  },
};
Paris.render();
///////////////////////////////////
let Lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avr: 4.6,
  dailyTotal: 0,
  hourlyCookieArray :[],
  randomCustomer: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min); //random number of customers
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++){
      let hourlyCustomer= this.randomCustomer(); //stores randomly generated customer count for one hour
      let hourlyCookies= Math.ceil(hourlyCustomer*this.avr);
      this.dailyTotal += hourlyCookies;
      this.hourlyCookieArray.push(hourlyCookies);
    }
  },
  render: function() {
    this.calcCookiesPerHour();
    // console.log(this.dailyTotal);
    // console.log(this.hourlyCookieArray);
    // console.log(`In ${hours.length} hours of operation, our ${this.name} location has sold ${this.dailyTotal} cookies!`);
    // header element creation using DOM manipulation
    let headerElement = document.createElement('h2');
    let headText = document.createTextNode(`${this.name} location cookie sales by hour`);
    headerElement.appendChild(headText);
    let headPosition = document.getElementsByTagName('div')[0];
    headPosition.appendChild(headerElement);
    // list element creation using DOM manipulation
    let listElement = document.createElement('ul');
    let listText = document.createTextNode('');
    listElement.appendChild(listText);
    let listPosition = document.getElementsByTagName('div')[0];
    listPosition.appendChild(listElement);
    // list item element creation using dom manipulation, using a for loop to iterate the entire list.
    for (let i = 0; i < hours.length; i++){
      let itemElement = document.createElement('li');
      let itemText = document.createTextNode(`${hours[i]} ${this.hourlyCookieArray[i]} cookies`);
      itemElement.appendChild(itemText);
      let itemPosition = document.getElementsByTagName('ul')[4];
      itemPosition.appendChild(itemElement);
    }
    // adding the Total cookies sold on that day using DOM manipulation, likely a cleaner way exists, should ask about it.
    for (let i = 14; i <= hours.length; i++){
      let itemElement = document.createElement('li');
      let itemText = document.createTextNode(`Total: ${this.dailyTotal} cookies`);
      itemElement.appendChild(itemText);
      let itemPosition = document.getElementsByTagName('ul')[4];
      itemPosition.appendChild(itemElement);
    }
  },
};
Lima.render();
///////////////////////////////////
