'use strict';

/*
TODO: Store the min/max hourly customers, and the average cookies per customer, in object properties.

TODO: Generate a random number of customers that can be used to simulate hourly sales, using Objects/Math/random

TODO: Calculate  the simulated amounts of cookies purchased for each hour based on average cookies purchased and the random number of customers generated.

TODO: store cookies at each location using - separate array

TODO: Store the results for each location in a separate array… perhaps as a property of the object representing that location.

 TODO: Display the values of each array as unordered lists in the browser.

TODO: Calculating the sum of these hourly totals; your output for each location should look like this:
*/

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];

let seattle = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  customerNumber: 0 // will hold a random number of customers between min and max when method below is called
  randomNumCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
  }
  getNum: function () {
    this.customerNumber = this.randomNumCustomer (this.minCustomer,this.maxCustomer);
    return this.customerNumber;
  },

  cookiePurchase: [],
  totalcookies: 0,

  render: function () {
    // this.getNum();
    for (let i=0; i< hours.length; i++) {
      let cookiesBought = (this.avgCookieSale * this.getNum());
      console.log(cookiesBought);
      this.totalCookies += cookiesBought;
    }

  }
}