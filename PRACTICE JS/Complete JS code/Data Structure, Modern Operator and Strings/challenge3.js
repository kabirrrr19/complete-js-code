'use strict';

  const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);
console.log(gameEvents);
  // to create an array of unique events
  const events = new Set(gameEvents.values());
  console.log(events);
  const eventsArr = [...new Set(gameEvents.values())];
  console.log(eventsArr);

  // delete event from 64 minute
  for (const [min, event] of gameEvents.entries()) {
      if (min ===64 ) {
        gameEvents.delete(min);
       console.log(`Without the ${min} event, \n ${[...gameEvents]}.`);
      }
  } 
  // gameEvents.delete(64);


  // Print the following strings 
  const time = [...gameEvents.keys()].pop();
  console.log(time);
  console.log(gameEvents.size);
  console.log(`An event happened, on average, every ${ time / gameEvents.size } minutes.`);

// loop through the Map
console.log(gameEvents.entries());
for (const [min, event] of gameEvents.entries()) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min} : ${event}`);
} 