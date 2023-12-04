// *** New Function to Display Location Details on the Home Page

// *** Global Variables *** //

let homePageSection = document.getElementById('homepage');
let homePageArray = [];

// *** DOM Manipulation *** //


// *** Helper Functions/Utilities *** //


// *** Constructor Function *** //

function homeStore(name, address, openHours, contactInfo) {
  this.name = name;
  this.address = address;
  this.openHours = openHours;
  this.contactInfo = contactInfo;
  homePageArray.push(this);
}

// Prototypes and Methods

homeStore.prototype.renderHomePage = function() {
  let storeName8 = document.createElement('h2');
  console.log(this.name); // Ensure 'this' refers to the Store instance

  // Set innerText only if 'name' property exists
  if (this.name) {
    storeName8.innerText = this.name;
    console.log(storeName8);
    homePageSection.appendChild(storeName8);
  } else {
    console.error("Store name is undefined or null.");
  }
};

function renderAllHomePage() {
  for (let i = 0; i < homePageArray.length; i++) {
    homePageArray[i].renderHomePage();
  }
}


// *** CONSTRUCT THE STORES *** //

new homeStore('Seattle', '708 Ravenna Dr., Seaatle, WA 98121', '6AM-7PM', '206-232-4960');
new homeStore('Tokyo', '1 Chome-1-2 Oshiage, Sumida, Tokyo 131-8634', '6AM-7PM', '555-777-5555');
new homeStore('Dubai', '1 Sheikh Mohammed bin Rashid Blvd-Dubai', '6AM-7pm', '333-333-3333');
new homeStore('Paris', 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris', '6AM-7PM', '111-111-1111');
new homeStore('Lima', 'Ca. Gral. Borgono cuadra 8, Miraflores 15074', '6AM-7PM', '888-999-0000');

renderAllHomePage();