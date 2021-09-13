'use strict';


const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovement = function (movements, sort = false ) {
  containerMovements.innerHTML = '';
  // creating a copy using slice method so we dont change the original underlying array
  const movs = sort ? movements.slice().sort( (a, b) => a - b ) : movements;

  movs.forEach( (mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov} $</div>
      </div> 
          `;
      containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}



// Reduce Method Lecs

const calcDisplayBalance = acc => {
  acc.balance = acc.movements.reduce( (acc, mov) => acc + mov, 0);
  labelBalance.textContent = `$ ${acc.balance}`
}



const calcDisplaySummary = acc => {
  const income = acc.movements
    .filter( mov => mov > 0 ) 
    .reduce( (acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `$ ${income}`;

  const out = acc.movements
    .filter( mov => mov < 0 ) 
    .reduce( (acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `$ ${Math.abs(out)}`;

  const interest = acc.movements
    .filter( mov => mov > 0 )
    .map( deposit => deposit * acc.interestRate/100)
    .filter( (int, i, arr) => { // Bank introduces a new scheme of only giving if the interest on deposit is > 1
      // console.log(arr);
      return int >= 1;
    })
    .reduce( (acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `$ ${interest}`;
}



// Map Method Lecs

// first we used foreach to looped over the account array without returning anything
// and then we manipulated it in each iteration using map method which created a new array
const createUserName = accs => {
  accs.forEach(  acc => {
    acc.username = acc.owner.
    toLowerCase()
    .split(' ')
    .map( name => name[0] ).
    join('');
  });
}
createUserName(accounts);


const updateUI = acc => {
  // Display movements
  displayMovement(acc.movements);

  // Display Balance
  calcDisplayBalance(acc);
  
  // Display Summary
  calcDisplaySummary(acc);
}



// EVENT HANDLERS


// Login
let currentAccount;

btnLogin.addEventListener('click', (event) => {
  // Prevent form  from submitting
  event.preventDefault();

  currentAccount = accounts.find( acc => acc.username === inputLoginUsername.value);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and a welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear the input fields 
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();


    updateUI(currentAccount);

  }
});


// Implementing Transfers

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  // console.log(amount, receiverAcc);                      the chaining helps check if receiverAcc exists
  if ( amount > 0 &&  currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Updating the UI
    updateUI(currentAccount);
  }
});


// Closing Account

// Find Index Method Lecs

btnClose.addEventListener('click', (e) => {
  e.preventDefault();

  
  if( inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    // Find index of account
    const index = accounts.findIndex( acc => acc.username === currentAccount.username);

    // Deleting Account
    accounts.splice(index, 1);
    
    // Hiding UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});


// Some Method

// Requesting a Loan

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  console.log(amount);
  if ( amount > 0 && currentAccount.movements.some( mov => mov >= amount * 0.1 ) ) {
    // Add Movement
    currentAccount.movements.push(amount); 

    // Update UI
    updateUI(currentAccount);
  }
  
  inputLoanAmount.value = '';
})


// Sorting the movements

let sorted = false;
btnSort.addEventListener( 'click', (e) => {
  e.preventDefault();

  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
})  



// Creating and Filling Arrays Lecs



labelBalance.addEventListener( 'click', (e) => {
  // this wont work as it's an array like object but not an array so it doesn't have array methods to it
  // const movementsUI = document.querySelectorAll('.movements__value');  
  

  // Solutions to the problem
  const movementsUI = Array.from(document.querySelectorAll('.movements__value') );
  // const movementsUI = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI.map( el => Number(el.textContent.replace('$', '') ) ) );

})