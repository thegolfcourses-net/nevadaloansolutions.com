document.addEventListener("DOMContentLoaded", function() {
 fields.person = document.getElementById('person');
 fields.email = document.getElementById('email');
 fields.direct_line = document.getElementById('direct_line');
 fields.churchName = document.getElementById('name');
 fields.address = document.getElementById('address');
 fields.state = document.getElementById('state');
 fields.city = document.getElementById('city');
 fields.zipcode = document.getElementById('zipcode');
 fields.phone = document.getElementById('phone');
 fields.desc = document.getElementById('desc');
 
})

function isEmail(email) {
 let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
 return regex.test(String(email).toLowerCase());
}
