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
};

// *** OBJECT LITERALS *** //
 
// let seattle = {
//   name: 'Seattle',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSale: 6.3,
//   customerNumber: 0, // will hold a random number of customers between min and max when method below is called
//   randomNumCustomer: function (min, max) {
//     return Math.floor(Math.random() * (max - min +1) + min);
//   },
//   getNum: function () {
//     this.customerNumber = this.randomNumCustomer (this.minCustomer,this.maxCustomer);
//     return this.customerNumber;
//   },

//   cookiePurchase: [],
//   totalCookies: 0,

//   render: function () {
//     // this.getNum();
//     for (let i=0; i < hours.length; i++) {
//       let cookiesBought = Math.ceil(this.avgCookieSale * this.getNum());
//       console.log(cookiesBought);
//       this.totalCookies += cookiesBought;
//       //this.totalCookies = this.totalCookies + cookiesBought
//       //in other words, adding cookiesBought to the total for every iteration
//       this.cookiePurchase.push(cookiesBought);

//       console.log(this.cookiePurchase);
//       console.log('TotalSales:', this.totalCookies);
//     }

//     //DOM MANIPULATION
//     // let storeSection = document.getElementById('stores');

//     let storeHeading = document.createElement('h2');
//     storeHeading.innerText = this.name;
//     storeSection.appendChild(storeHeading);

//     let storeList = document.createElement('ul');
//     storeSection.appendChild(storeList);
//     console.log(storeList);

//     for (let i = 0; i < this.cookiePurchase.length; i++) {
//       let cookieItem = document.createElement('li');
//       cookieItem.textContent = `${hours[i]}: ${this.cookiePurchase[i]} cookies`;
//       storeList.appendChild(cookieItem);
//       console.log(cookieItem);
//     }
//     let cookieTotal = document.createElement('li');
//     cookieTotal.textContent = `Total Sales: ${this.totalCookies}`;
//     storeList.appendChild(cookieTotal);

//   },
// };


// // let tokyo = {}
// let tokyo = {
//   name: 'Tokyo',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSale: 1.2,
//   customerNumber: 0, // will hold a random number of customers between min and max when method below is called
//   randomNumCustomer: function (min, max) {
//     return Math.floor(Math.random() * (max - min +1) + min);
//   },
//   getNum: function () {
//     this.customerNumber = this.randomNumCustomer (this.minCustomer,this.maxCustomer);
//     return this.customerNumber;
//   },

//   cookiePurchase: [],
//   totalCookies: 0,

//   render: function () {
//     // this.getNum();
//     for (let i=0; i < hours.length; i++) {
//       let cookiesBought = Math.ceil(this.avgCookieSale * this.getNum());
//       console.log(cookiesBought);
//       this.totalCookies += cookiesBought;
//       //this.totalCookies = this.totalCookies + cookiesBought
//       //in other words, adding cookiesBought to the total for every iteration
//       this.cookiePurchase.push(cookiesBought);

//       console.log(this.cookiePurchase);
//       console.log('TotalSales:', this.totalCookies);
//     }

//     //DOM MANIPULATION
//     // let storeSection = document.getElementById('stores');

//     let storeHeading = document.createElement('h2');
//     storeHeading.innerText = this.name;
//     storeSection.appendChild(storeHeading);

//     let storeList = document.createElement('ul');
//     storeSection.appendChild(storeList);
//     console.log(storeList);
    
//     for (let i = 0; i < this.cookiePurchase.length; i++) {
//       let cookieItem = document.createElement('li');
//       cookieItem.textContent = `${hours[i]}: ${this.cookiePurchase[i]} cookies`;
//       storeList.appendChild(cookieItem);
//       console.log(cookieItem);
//     }
//     let cookieTotal = document.createElement('li');
//     cookieTotal.textContent = `Total Sales: ${this.totalCookies}`;
//     storeList.appendChild(cookieTotal);

//   },
// };



// let dubai = {
//   name: 'Dubai',
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieSale: 3.7,
//   customerNumber: 0, // will hold a random number of customers between min and max when method below is called
//   randomNumCustomer: function (min, max) {
//     return Math.floor(Math.random() * (max - min +1) + min);
//   },
//   getNum: function () {
//     this.customerNumber = this.randomNumCustomer (this.minCustomer,this.maxCustomer);
//     return this.customerNumber;
//   },

//   cookiePurchase: [],
//   totalCookies: 0,

//   render: function () {
//     // this.getNum();
//     for (let i=0; i < hours.length; i++) {
//       let cookiesBought = Math.ceil(this.avgCookieSale * this.getNum());
//       console.log(cookiesBought);
//       this.totalCookies += cookiesBought;
//       //this.totalCookies = this.totalCookies + cookiesBought
//       //in other words, adding cookiesBought to the total for every iteration
//       this.cookiePurchase.push(cookiesBought);

//       console.log(this.cookiePurchase);
//       console.log('TotalSales:', this.totalCookies);
//     }

//     //DOM MANIPULATION
//     // let storeSection = document.getElementById('stores');

//     let storeHeading = document.createElement('h2');
//     storeHeading.innerText = this.name;
//     storeSection.appendChild(storeHeading);

//     let storeList = document.createElement('ul');
//     storeSection.appendChild(storeList);
//     console.log(storeList);
    
//     for (let i = 0; i < this.cookiePurchase.length; i++) {
//       let cookieItem = document.createElement('li');
//       cookieItem.textContent = `${hours[i]}: ${this.cookiePurchase[i]} cookies`;
//       storeList.appendChild(cookieItem);
//       console.log(cookieItem);
//     }
//     let cookieTotal = document.createElement('li');
//     cookieTotal.textContent = `Total Sales: ${this.totalCookies}`;
//     storeList.appendChild(cookieTotal);

//   },
// };
// let paris = {
//   name: 'Paris',
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookieSale: 2.3,
//   customerNumber: 0, // will hold a random number of customers between min and max when method below is called
//   randomNumCustomer: function (min, max) {
//     return Math.floor(Math.random() * (max - min +1) + min);
//   },
//   getNum: function () {
//     this.customerNumber = this.randomNumCustomer (this.minCustomer,this.maxCustomer);
//     return this.customerNumber;
//   },

//   cookiePurchase: [],
//   totalCookies: 0,

//   render: function () {
//     // this.getNum();
//     for (let i=0; i < hours.length; i++) {
//       let cookiesBought = Math.ceil(this.avgCookieSale * this.getNum());
//       console.log(cookiesBought);
//       this.totalCookies += cookiesBought;
//       //this.totalCookies = this.totalCookies + cookiesBought
//       //in other words, adding cookiesBought to the total for every iteration
//       this.cookiePurchase.push(cookiesBought);

//       console.log(this.cookiePurchase);
//       console.log('TotalSales:', this.totalCookies);
//     }

//     //DOM MANIPULATION
//     // let storeSection = document.getElementById('stores');

//     let storeHeading = document.createElement('h2');
//     storeHeading.innerText = this.name;
//     storeSection.appendChild(storeHeading);

//     let storeList = document.createElement('ul');
//     storeSection.appendChild(storeList);
//     console.log(storeList);
    
//     for (let i = 0; i < this.cookiePurchase.length; i++) {
//       let cookieItem = document.createElement('li');
//       cookieItem.textContent = `${hours[i]}: ${this.cookiePurchase[i]} cookies`;
//       storeList.appendChild(cookieItem);
//       console.log(cookieItem);
//     }
//     let cookieTotal = document.createElement('li');
//     cookieTotal.textContent = `Total Sales: ${this.totalCookies}`;
//     storeList.appendChild(cookieTotal);

//   },
// };

// let lima = {
//   name: 'Lima',
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookieSale: 14.6,
//   customerNumber: 0, // will hold a random number of customers between min and max when method below is called
//   randomNumCustomer: function (min, max) {
//     return Math.floor(Math.random() * (max - min +1) + min);
//   },
//   getNum: function () {
//     this.customerNumber = this.randomNumCustomer (this.minCustomer,this.maxCustomer);
//     return this.customerNumber;
//   },

//   cookiePurchase: [],
//   totalCookies: 0,

//   render: function () {
//     // this.getNum();
//     for (let i=0; i < hours.length; i++) {
//       let cookiesBought = Math.ceil(this.avgCookieSale * this.getNum());
//       console.log(cookiesBought);
//       this.totalCookies += cookiesBought;
//       //this.totalCookies = this.totalCookies + cookiesBought
//       //in other words, adding cookiesBought to the total for every iteration
//       this.cookiePurchase.push(cookiesBought);

//       console.log(this.cookiePurchase);
//       console.log('TotalSales:', this.totalCookies);
//     }

//     //DOM MANIPULATION
//     // let storeSection = document.getElementById('stores');

//     let storeHeading = document.createElement('h2');
//     storeHeading.innerText = this.name;
//     storeSection.appendChild(storeHeading);

//     let storeList = document.createElement('ul');
//     storeSection.appendChild(storeList);
//     console.log(storeList);
    
//     for (let i = 0; i < this.cookiePurchase.length; i++) {
//       let cookieItem = document.createElement('li');
//       cookieItem.textContent = `${hours[i]}: ${this.cookiePurchase[i]} cookies`;
//       storeList.appendChild(cookieItem);
//       console.log(cookieItem);
//     }
//     let cookieTotal = document.createElement('li');
//     cookieTotal.textContent = `Total Sales: ${this.totalCookies}`;
//     storeList.appendChild(cookieTotal);

//   },
// };

// *** EXECUTABLE CODE *** //

let seattle = new Stores('Seattle', 23, 65, 6.3);
let tokyo = new Stores('Tokyo', 3, 24, 1.2);
let dubai = new Stores('Dubai', 11, 38, 3.7);
let paris = new Stores('Paris', 20, 38, 2.3); 
let lima = new Stores('Lima', 2, 16, 14.6);

storesArray.push(seattle,tokyo,dubai,paris,lima);

renderAll();


// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
