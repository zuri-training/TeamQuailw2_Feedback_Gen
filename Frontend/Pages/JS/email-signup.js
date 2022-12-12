var passwordToggleId = document.getElementById('togglePassword');
var passwordId = document.getElementById('password');
var passwordToggleConfirmId = document.getElementById('togglePasswordConfirm');
var passwordConfirmId = document.getElementById('passwordConfirm');
var passwordCheck = document.getElementById('check');

passwordToggleId.addEventListener('click', function() {
  if (passwordId.type === "password") {
    passwordId.type = "text";
  } else {
    passwordId.type = "password";
  }
});

passwordToggleConfirmId.addEventListener('click', function() {
  if (passwordConfirmId.type === "password") {
    passwordConfirmId.type = "text";
  } else {
    passwordConfirmId.type = "password";
  }
});

passwordId.onkeyup = function() {
  if (passwordId.value.length >= 8) {
    passwordCheck.checked = true;
    passwordId.style = "color: green";
  } else {
    passwordCheck.checked = false;
    passwordId.style = "color: #000";
  }
  if (passwordConfirmId.value === passwordId.value) {
    passwordConfirmId.style = "color: green";
  } else {
    passwordConfirmId.style = "color: #000";
  }
}

passwordConfirmId.onkeyup = function() {
  if (passwordConfirmId.value === passwordId.value) {
    passwordConfirmId.style = "color: green";
  } else {
    passwordConfirmId.style = "color: #000";
  }
}