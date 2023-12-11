'use strict';

// *** GLOBAL VARIABLES *** //
const storesWholeObjectArray = [];
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
let storesSection = document.getElementById('stores'); // *** GRAB WINDOW INTO THE DOM *** //
let table = document.createElement('table');
storesSection.appendChild(table);

let addLocationFormVariable = document.getElementById('addStoreForm'); // *** GRAB form INTO THE DOM *** //
let button = document.querySelector('button');


// let homePageSection = document.getElementById('homepage');
// let homePageElem = document.createElement('section');
// homePageSection.appendChild(homePageElem);

// *** CONSTUCTOR FUNCTION *** //

function Store(name, minCustomer, maxCustomer, avgCookieSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.customerNumber = 0;
  this.cookiePurchasePerHourArray = [];
  this.totalCookiesWholeDay = 0;
  storesWholeObjectArray.push(this);
}

// *** PROTOTYPE METHODS *** //

Store.prototype.randomNumCustomer = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

Store.prototype.getNum = function() {
  this.customerNumber = this.randomNumCustomer(this.minCustomer, this.maxCustomer);
  return this.customerNumber;
};

Store.prototype.render = function() {

  let storeRow = document.createElement('tr');
  table.appendChild(storeRow);

  let storeHeading = document.createElement('td');
  storeHeading.innerText = this.name;
  storeRow.appendChild(storeHeading);

  for (let i = 0; i < hours.length; i++) {
    let cookiesBought = Math.ceil(this.avgCookieSale * this.getNum());
    this.totalCookiesWholeDay += cookiesBought;
    this.cookiePurchasePerHourArray.push(cookiesBought);
  }

  for (let i = 0; i < hours.length; i++) {
    let cookieItem = document.createElement('td');
    cookieItem.textContent = this.cookiePurchasePerHourArray[i];
    storeRow.appendChild(cookieItem);
  }
  let cookieTotal = document.createElement('th');
  cookieTotal.textContent = this.totalCookiesWholeDay;
  storeRow.appendChild(cookieTotal);
};

// Store.prototype.renderHomePage = function() {
//   let storeName = document.createElement('h2');
//   console.log(this.name);
//   storeName.innerText = this.name;
//   homePageSection.appendChild(storeName);
// };





// *** NON-PROTOTYPE FUNCTIONS *** //

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
      allSalesThisHour += storesWholeObjectArray[j].cookiePurchasePerHourArray[i];
    }
    let hoursTotal = document.createElement('th');
    hoursTotal.textContent = allSalesThisHour;
    rowValues6.appendChild(hoursTotal);
    allStoresGrandTotal += allSalesThisHour;
  }
  let grandTotalCell = document.createElement('th');
  grandTotalCell.textContent = allStoresGrandTotal;
  rowValues6.appendChild(grandTotalCell);
}

// *** HELPER FUNCTIONS / UTILITIES *** //

function renderAll() {
  for (let i = 0; i < storesWholeObjectArray.length; i++) {
    storesWholeObjectArray[i].render();
  }
}

// *** Event Handler *** //

function newLocationForm(event) {
  console.log('I have been clicked!!!');
  event.preventDefault();
  let locationName = event.target.locationInput.value;
  let locationMin = parseFloat(event.target.minCustomerInput.value);
  let locationMax = parseFloat(event.target.maxCustomerInput.value);
  let locationAvg = parseFloat(event.target.avgCookieSaleInput.value);
  let formStoreCreation = new Store(locationName, locationMin, locationMax, locationAvg);
  console.log(formStoreCreation);
  storesWholeObjectArray.push(formStoreCreation);
  console.log(storesWholeObjectArray);
}


// *** CONSTRUCT THE STORES *** //

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 14.6);

// if I want to grab 23 (minCustomer) out of the object that I think of as Seattle: you'd refer to it as storesWholeObjectArray[0].minCustomer //
addLocationFormVariable.addEventListener('submit', newLocationForm);
header();
renderAll();
footer();
button.addEventListener('submit', newLocationForm);

// renderAllHomePage();

// FORM PRACTICE //

let buttonToBeClicked = document.getElementById('submit');

//Attach eventlistener to the element
buttonToBeClicked.addEventListener('click', newLocationForm)