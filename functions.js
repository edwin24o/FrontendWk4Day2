// Task 1: ceated function for deposit with parameters of amount and balance if less than 0. 
const deposit = (balance, amount) => {
    if (amount <= 0) {
      console.log("No amount was deposited.");
      return balance;
    }
    // if greater than 0/positive adds to balance and returns update
    balance += amount;
    console.log(`Deposit complete! Your updated balance is: $${balance}`);
    return balance;
  };
  
  // Task 2: withdrawals had balance and amount p. for a bank account if less than 0 flags, if not enought funds to withdraw flags, and if amount is able to subtract from balance subtracts and returns.
  const withdraw = (balance, amount) => {
    if (amount <= 0) {
      console.log("You withdrawed nothing..");
      return balance;
    } else if (amount > balance) {
      console.log("Insufficient funds in account.");
      return balance;
    }
    balance -= amount;
    console.log(`Withdrawal complete! Your new updated balance is $${balance}`);
    return balance;
  };
  
  // Task 3: accountBalance function to check the current balance of the account. Trying to get familiar with arrow functioning things as best practice...
  const accountBalance = (balance) => {
    console.log(`Account balance: $${balance}`);
    return balance;
  };
  
  
  // our MC is struggling but good thing its Friday!  
  let balance = 5;

  // tries to withdraw $20 but..
  balance = withdraw(balance, 20);
  // checks balance to see why?
  accountBalance(balance);
  // deposits biweekly check
  balance = deposit(balance, 1500);
  // withdraws with confidence now
  balance = withdraw(balance, 450);
  // rechecks to make sure amount is correct
  accountBalance(balance);
  