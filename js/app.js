'use strict';

// *** GLOBAL VARIABLES *** //
const storesWholeObjectArray = [];
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
let storesSection = document.getElementById('stores'); // *** GRAB WINDOW INTO THE DOM *** //
let table = document.createElement('table');
storesSection.appendChild(table);

// let homePageSection = document.getElementById('homepage');
// let homePageElem = document.createElement('section');
// homePageSection.appendChild(homePageElem);

// *** CONSTUCTOR FUNCTION *** //

function Store(name, minCustomer, maxCustomer, avgCookieSale, address, openHours, contactInfo) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.customerNumber = 0;
  this.cookiePurchasePerHourArray = [];
  this.totalCookiesWholeDay = 0;
  this.address = address;
  this.openHours = openHours;
  this.contactInfo = contactInfo;
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


// *** CONSTRUCT THE STORES *** //

new Store('Seattle', 23, 65, 6.3, '708 Ravenna Dr., Seaatle, WA 98121', '6AM-7PM', '206-232-4960');
new Store('Tokyo', 3, 24, 1.2, '1 Chome-1-2 Oshiage, Sumida, Tokyo 131-8634', '6AM-7PM', '555-777-5555');
new Store('Dubai', 11, 38, 3.7, '1 Sheikh Mohammed bin Rashid Blvd-Dubai', '6AM-7pm', '333-333-3333');
new Store('Paris', 20, 38, 2.3, 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris', '6AM-7PM', '111-111-1111');
new Store('Lima', 2, 16, 14.6, 'Ca. Gral. Borgono cuadra 8, Miraflores 15074', '6AM-7PM', '888-999-0000');

// if I want to grab 23 (minCustomer) out of the object that I think of as Seattle: you'd refer to it as storesWholeObjectArray[0].minCustomer //

header();
renderAll();
footer();
// renderAllHomePage();

