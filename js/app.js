'use strict';

// *** GLOBAL VARIABLES *** //
const storesArray = [];

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];

let storeSection = document.getElementById('stores');

// *** HELPER FUNCTIONS / UTILITIES *** //

function renderAll(){
  for (let i=0; i < storesArray.length; i++) {
    storesArray[i].render();
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
  return Math.floor(Math.random() * (max - min +1) + min);
};

Stores.prototype.getNum = function () {
  this.customerNumber = this.randomNumCustomer (this.minCustomer,this.maxCustomer);
  return this.customerNumber;
};

Stores.prototype.render = function () {
  for (let i=0; i < hours.length; i++) {
    let cookiesBought = Math.ceil(this.avgCookieSale * this.getNum());
    console.log(cookiesBought);
    this.totalCookies += cookiesBought;
    this.cookiePurchase.push(cookiesBought);

    console.log(this.cookiePurchase);
    console.log('TotalSales:', this.totalCookies);
  }

  //DOM MANIPULATION

  let storeHeading = document.createElement('h2');
  storeHeading.innerText = this.name;
  storeSection.appendChild(storeHeading);

  let storeList = document.createElement('ul');
  storeSection.appendChild(storeList);
  console.log(storeList);

  for (let i = 0; i < this.cookiePurchase.length; i++) {
    let cookieItem = document.createElement('li');
    cookieItem.textContent = `${hours[i]}: ${this.cookiePurchase[i]} cookies`;
    storeList.appendChild(cookieItem);
    console.log(cookieItem);
  }
  let cookieTotal = document.createElement('li');
  cookieTotal.textContent = `Total Sales: ${this.totalCookies}`;
  storeList.appendChild(cookieTotal);

  // *** TABLE DEMO *** //

  let table = document.createElement('table');
  articleEle.appendChild(table);

  let rowHeading = document.createElement('tr');
  table.appendChild(rowHeading);

  let goodWithCatCell = document.createElement('th');
  goodWithCatCell.textContent = 'Is good with cats.';
  rowHeading.appendChild(goodWithCatCell);

  let goodWithDogCell = document.createElement('th');
  goodWithDogCell.textContent = 'Is good with dogs.';
  rowHeading.appendChild(goodWithDogCell);

  let goodWithKidCell = document.createElement('th');
  goodWithKidCell.textContent = 'Is good with kids.';
  rowHeading.appendChild(goodWithKidCell);

};

// *** EXECUTABLE CODE *** //

let seattle = new Stores('Seattle', 23, 65, 6.3);
let tokyo = new Stores('Tokyo', 3, 24, 1.2);
let dubai = new Stores('Dubai', 11, 38, 3.7);
let paris = new Stores('Paris', 20, 38, 2.3); 
let lima = new Stores('Lima', 2, 16, 14.6);

storesArray.push(seattle,tokyo,dubai,paris,lima);

renderAll();

