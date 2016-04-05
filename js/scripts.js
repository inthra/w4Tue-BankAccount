// business logic
var BankAccount = function(name, initDeposit) {
  this.name = name;
  this.balance = initDeposit;
}

BankAccount.prototype.deposit = function(depositAmount) {
  balance += depositAmount;
}

BankAccount.prototype.withdraw = function(withdrawAmount) {
  balance -= withdrawAmount;
}

// user interface logic
$(document).ready(function() {
  $("#sign-up").submit(function(event) {
    event.preventDefault();
    

  });

  $("#transaction").submit(function(event) {
    event.preventDefault();



  });



});
