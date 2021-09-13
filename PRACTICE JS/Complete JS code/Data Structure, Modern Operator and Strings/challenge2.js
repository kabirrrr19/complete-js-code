'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  // To Display Team Names along with their players
  for (const [i, team] of Object.entries(game.players)) {
    i % 2 === 0 ? console.log(game.team1) : console.log(game.team2);
    console.log(`${team}}`);
  }


  // task 1
  for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i} : ${player}`);
  }

  // task 2
  let sum = 0;
  const odds = Object.values(game.odds);
  for (const val of Object.values(game.odds)) {
    sum +=  val;
  }
  sum /= odds.length;
  console.log(`The average of the odds is ${sum}`);

 // task 3
 for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = `${team === `x` ? `draw` : `victory for ${game[team]}` }`;
  console.log(`The Odds of ${teamStr} ${odd}`);
 }
