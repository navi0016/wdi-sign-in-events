document.addEventListener('DOMContentLoaded', function() {

var signIn = document.querySelector('.signin');
var form = document.querySelector('.getstarted');
var modal = document.querySelector('.modal');
var body = document.querySelector('body');
var password = document.querySelector('#pass')
var user = document.querySelector('#user')

  signIn.addEventListener('click', function() {
    modal.style.display = 'block'

});

modal.addEventListener('click', function(e) {
  if (e.target.className === 'close') {
  modal.style.display = 'none';
} else if (e.target.className === 'submit') {
  if (user.value === "") {
    user.className = 'error'
  }else if (password.value === "") {
    password.className = 'error'
  }
  if (user.value != "") {
    user.className = ""
  }else if (password.value != "") {
    password.className = "";
  }
}

});


});
