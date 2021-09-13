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

// task 1
const [gk, ...fieldPlayers] = game.players;
console.log(gk, fieldPlayers);

// task 2
const [players1, players2] = game.players;
console.log(players1, players2);

// task 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// task 4
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perscic'];
console.log(playersFinal);

// task 5
const {odds : {team1, x : draw, team2}} = game;
console.log(team1, draw, team2);

// task 6
const printGoals = function (...players) {
    console.log(`${players.length} goals were scored.`)
    for (let i = 0; i < players.length; i++) {
        console.log(`${players[i]} scored a goal.`);
    }
}

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);


// task 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
