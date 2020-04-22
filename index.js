// DOM elements
const guideList = document.querySelector('.guides');

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const accountDetails = document.querySelector(".accountinfo");

const setupUI= (user) => {
 if (user) {
   // account info
    const html = `${user.email}`;
    accountDetails.innerHTML = html;
    accountDetails.data = html;
    
  loggedInLinks.forEach(item => item.style.display = 'block');
  loggedOutLinks.forEach(item => item.style.display = 'none');
 } else {
  // clear account info
  accountDetails.innerHTML = '';
  loggedInLinks.forEach(item => item.style.display = 'none');
  loggedOutLinks.forEach(item => item.style.display = 'block');
 }
}



// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});

function showlogin() {
  var x = document.getElementById("modal-login");
  var y = document.getElementById("modal-signup");
  var z = document.getElementById("loginbutton");
  var w = document.getElementById("signupbutton");
  x.style.display= "block";
  y.style.display= "none";
  z.style.display= "none";
  w.style.display= "block";
}

function showsignup() {
  var x = document.getElementById("modal-login");
  var y = document.getElementById("modal-signup");
  var z = document.getElementById("loginbutton");
  var w = document.getElementById("signupbutton");
  x.style.display= "none";
  y.style.display= "block";    
  w.style.display= "none";
  z.style.display= "block";
}


