'use strict';
let hours =['','6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm', 'Total'];
let TotalHourlyCookies = [];
let locationDailyCookiesArray =[];
let companyDailyCookies = 0;
const myTable = document.getElementById('theTable');
let thead = document.createElement('thead');
myTable.appendChild(thead);
let trh = document.createElement('tr');
thead.appendChild(trh);


// theader autofill header row to table
for (let i = 0; i < hours.length; i++){
  let theader = document.createElement('th');
  theader.textContent = (hours[i]);
  trh.appendChild(theader);
}
let tfoot = document.createElement('tfoot');
myTable.appendChild(tfoot);
let trf = document.createElement('tr');
tfoot.appendChild(trf);



function Location (name, min, max, avr){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avr = avr;
  this.hourlyCookieArray = [];
  this.dailyCookieArray = [];
  this.dailyCookie = 0;
  this.randomCustomer = function () {
    return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);

  };
  this.calcCookiesPerHour = function () {

    for (let i = 0; i < hours.length-2; i++){
      let hourlyCustomer= this.randomCustomer(); //stores randomly generated customer count for one hour
      let hourlyCookies= Math.ceil(hourlyCustomer*this.avr);
      this.hourlyCookieArray.push((hourlyCookies));
      TotalHourlyCookies.push((hourlyCookies));
      this.dailyCookie = this.dailyCookie + hourlyCookies;
    }
    this.dailyCookieArray.push(this.dailyCookie);
    locationDailyCookiesArray.push(this.dailyCookie);
    console.log(locationDailyCookiesArray);
    companyDailyCookies = companyDailyCookies + this.dailyCookie;
    console.log(companyDailyCookies);
  };

  this.render=function(){
    this.calcCookiesPerHour();

    // attempting to make format of rendered table match that on canvas.
    let headerBlank = document.createElement('th');
    headerBlank.textContent = ('     ');
    // theader autofill to table.

    let tbody = document.createElement('tbody');
    myTable.appendChild(tbody);

    let trb = document.createElement('tr');
    tbody.appendChild(trb);

    let bodyCellOne = document.createElement('td');
    bodyCellOne.textContent = (this.name);
    trb.appendChild(bodyCellOne);

    for (let i = 0; i < hours.length-2; i++){
      let tbodydata = document.createElement('td');
      tbodydata.textContent = (this.hourlyCookieArray[i]);
      trb.appendChild(tbodydata);
    }
    let LocationEndDaySales = document.createElement('td');
    LocationEndDaySales.textContent = (this.dailyCookieArray);
    trb.appendChild(LocationEndDaySales);

    // let CompanyEndDaySales = document.createElement('td');
    // CompanyEndDaySales.textContent =('HELOOOO');
    // trf.appendChild(CompanyEndDaySales);
  };
}

let Seattle = new Location ('Seattle', 23,65,6.3);
let Tokyo = new Location ('Tokyo',3,24,1.2);
let Dubai = new Location ('Dubai', 11, 38,3.7);
let Paris = new Location ('Paris',20,38,2.3);
let Lima = new Location ('Lima',2,16,4.6);


let tfootdata = document.createElement('td');
tfootdata.textContent= ('Totals');
trf.appendChild(tfootdata);


// let tfootCompanyWideTotal = document.createElement('td');
// tfootCompanyWideTotal.textContent = (this.locationSum);
// trf.appendChild(tfootCompanyWideTotal);





Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();
console.log(TotalHourlyCookies);



for (let i = 0; i < hours.length-2; i++){
  let sumCookies = TotalHourlyCookies[i]+TotalHourlyCookies[i+14]+TotalHourlyCookies[i+28]+TotalHourlyCookies[i+42]+TotalHourlyCookies[i+56];
  let tftotal =document.createElement('td');
  tftotal.textContent=(sumCookies);
  trf.appendChild(tftotal);
}
let CompanyEndDaySales = document.createElement('td');
CompanyEndDaySales.textContent =(companyDailyCookies);
trf.appendChild(CompanyEndDaySales);
console.log(myTable);

