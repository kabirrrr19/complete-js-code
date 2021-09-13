'use strict';


const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-07-04T14:43:26.374Z',
    '2021-07-07T18:49:59.371Z',
    '2021-07-09T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2021-07-04T14:43:26.374Z',
    '2021-07-07T18:49:59.371Z',
    '2021-07-09T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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


// Functions


const formatCur = (value, locale, currency) =>  {
  return new  Intl.NumberFormat(locale, {
    style : 'currency',
    currency : currency,
  }).format(value);
}


const formatMovementDate = (date, locale) => {
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1)/(1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const year = date.getFullYear();
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const day = `${date.getDate()}`.padStart(2, 0);
  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);

}




const displayMovement = function (acc, sort = false ) {
  containerMovements.innerHTML = '';
  // creating a copy using slice method so we dont change the original underlying array
  const movs = sort ? acc.movements.slice().sort( (a, b) => a - b ) : acc.movements;

  movs.forEach( (mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]) ;
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__date">${displayDate}</div>
          <div class="movements__value">${formattedMov}</div>
      </div> 
          `;
      containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}



// Reduce Method Lecs

const calcDisplayBalance = acc => {
  acc.balance = acc.movements.reduce( (acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
}


const calcDisplaySummary = acc => {
  const income = acc.movements
    .filter( mov => mov > 0 ) 
    .reduce( (acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(income, acc.locale, acc.currency);

  const out = acc.movements
    .filter( mov => mov < 0 ) 
    .reduce( (acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter( mov => mov > 0 )
    .map( deposit => deposit * acc.interestRate/100)
    .filter( (int, i, arr) => { // Bank introduces a new scheme of only giving if the interest on deposit is > 1
      // console.log(arr);
      return int >= 1;
    })
    .reduce( (acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
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
  displayMovement(acc);

  // Display Balance
  calcDisplayBalance(acc);
  
  // Display Summary
  calcDisplaySummary(acc);
}



const startLogoutTimer = () => {

  const tick = () => {
      // In each call print the remaining time in UI
      const min = `${Math.trunc(time / 60)}`.padStart(2, 0);
      const sec = `${time % 60}`.padStart(2, 0);
      labelTimer.textContent = `${min}:${sec}`;
  
      // when 0 seconds, stop timer and logout user
      if ( time === 0 ) {
        clearInterval(timer);
        labelWelcome.textContent = `Log in to get started`;
        containerApp.style.opacity = 0;
      }
      
      // Dicrease 1s
      time--;
  }

  // set time to 5 minutes
  let time = 300;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  
  return timer;

  };



  
// EVENT HANDLERS


// Login
let currentAccount, timer;
// Global variables which are user dependent 



btnLogin.addEventListener('click', (event) => {
  // Prevent form  from submitting
  event.preventDefault();

  currentAccount = accounts.find( acc => acc.username === inputLoginUsername.value);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and a welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const locale = navigator.language;
    const options = {
      hour : 'numeric',
      minute : 'numeric',
      day : 'numeric',
      month : 'long', // 2-digit 
      year : 'numeric',
      weekday : 'long',
    };
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);


    // Clear the input fields 
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

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

    // Add Transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Updating the UI
    updateUI(currentAccount);

    inputTransferAmount.value = inputTransferTo.value = '';

    // Reset Timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});



// Some Method
// Requesting a Loan
btnLoan.addEventListener('click', (e) => {
  e.preventDefault();
  
  const amount = Math.floor(inputLoanAmount.value);
  console.log(amount);
  if ( amount > 0 && currentAccount.movements.some( mov => mov >= amount * 0.1 ) ) {
    
    setTimeout(() => {
      // Add Movement
      currentAccount.movements.push(amount); 
      
      // Add Transfer Date
      currentAccount.movementsDates.push(new Date().toISOString());
      
      // Update UI
      updateUI(currentAccount);
    }, 3000);
  }
  
  inputLoanAmount.value = '';
  
  // Reset Timer
  clearInterval(timer);
  timer = startLogoutTimer();
  
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



// Sorting the movements
let sorted = false;
btnSort.addEventListener( 'click', (e) => {
  e.preventDefault();

  displayMovement(currentAccount, !sorted);
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



// Adding color differences in even movements row
window.addEventListener( 'click', (e) => {
  [...document.querySelectorAll('.movements__row')].forEach( ( row, i ) => {
    i % 2 === 0 ? row.style.backgroundColor = 'rgba(256, 256, 256, 1)' : row.style.backgroundColor =  'rgba(250, 250, 250, 1)';
  });
});



