'use strict';

// *** GLOBAL VARIABLES *** //
const storesWholeObjectArray = [];

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

// *** GRAB WINDOW INTO THE DOM *** //
let storeSectionIntoHtml = document.getElementById('stores');

let table = document.createElement('table');
storeSectionIntoHtml.appendChild(table);

// *** HELPER FUNCTIONS / UTILITIES *** //

function renderAll() {
  for (let i = 0; i < storesWholeObjectArray.length; i++) {
    storesWholeObjectArray[i].render();
  }
}

// *** CONSTUCTOR FUNCTION *** //

function Stores(name, minCustomer, maxCustomer, avgCookieSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.customerNumber = 0;
  this.cookiePurchase = [];
  this.totalCookies = 0;
}

// *** PROTOTYPE METHODS *** //

Stores.prototype.randomNumCustomer = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

Stores.prototype.getNum = function () {
  this.customerNumber = this.randomNumCustomer(this.minCustomer, this.maxCustomer);
  return this.customerNumber;
};

Stores.prototype.render = function () {

  let storeRow = document.createElement('tr');
  table.appendChild(storeRow);

  let storeHeading = document.createElement('td');
  storeHeading.innerText = this.name;
  storeRow.appendChild(storeHeading);

  for (let i = 0; i < hours.length; i++) {
    let cookiesBought = Math.ceil(this.avgCookieSale * this.getNum());
    // console.log(cookiesBought);
    this.totalCookies += cookiesBought;
    this.cookiePurchase.push(cookiesBought);

    // console.log(this.cookiePurchase);
    // console.log('TotalSales:', this.totalCookies);
  }

  for (let i = 0; i < hours.length; i++) {
    let cookieItem = document.createElement('td');
    cookieItem.textContent = this.cookiePurchase[i];
    storeRow.appendChild(cookieItem);
    // console.log(cookieItem);
  }
  let cookieTotal = document.createElement('th');
  cookieTotal.textContent = this.totalCookies;
  storeRow.appendChild(cookieTotal);
};

// *** TABLE DEMO *** //


// First Row: Locations, Hours Loop, Daily Total

function header() {
  let rowHeading = document.createElement('tr');
  table.appendChild(rowHeading);

  let cell = document.createElement('th');
  rowHeading.appendChild(cell);

  for (let i = 0; i < hours.length; i++) {
    let hoursHeader = document.createElement('th');
    hoursHeader.textContent = hours[i];
    rowHeading.appendChild(hoursHeader);
  }

  let dailyTotalCell = document.createElement('th');
  dailyTotalCell.textContent = 'Daily Location Total';
  rowHeading.appendChild(dailyTotalCell);
}

function footer() {

  let rowValues6 = document.createElement('tr');
  table.appendChild(rowValues6);

  let totalValues = document.createElement('th');
  totalValues.textContent = 'Totals';
  rowValues6.appendChild(totalValues);

  let allStoresGrandTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    let allSalesThisHour = 0;

    for (let j = 0; j < storesWholeObjectArray.length; j++) {
      allSalesThisHour += storesWholeObjectArray[j].cookiePurchase[i];
    }

    let hoursTotal = document.createElement('th');
    hoursTotal.textContent = allSalesThisHour;
    rowValues6.appendChild(hoursTotal);

    allStoresGrandTotal += allSalesThisHour;
    console.log(allStoresGrandTotal);
  }

  let grandTotalCell = document.createElement('th');
  grandTotalCell.textContent = allStoresGrandTotal;
  rowValues6.appendChild(grandTotalCell);

}

// *** EXECUTABLE CODE *** //

let seattle = new Stores('Seattle', 23, 65, 6.3);
let tokyo = new Stores('Tokyo', 3, 24, 1.2);
let dubai = new Stores('Dubai', 11, 38, 3.7);
let paris = new Stores('Paris', 20, 38, 2.3);
let lima = new Stores('Lima', 2, 16, 14.6);

storesWholeObjectArray.push(seattle, tokyo, dubai, paris, lima);

header();
renderAll();
footer();
