name = `Brendan Cowley`;
age = 32;
birthday = `December 20`;
detroitGC = true;
lifeEvents = [
  `I married Amy`,
  `I have a son Seamus`,
  `I graduated from the Culinary Institute of America with a B.S.`,
  `Left my previous profession to start this bootcamp`
];
if (detroitGC === true) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ​${age}​ years old and my birthday is on ​${birthday}​.`
  );
} else {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i of lifeEvents) {
  console.log(i);
}

let randomNumber = Math.floor(Math.random() * 10) + 1;
let counter = 0;
while (true) {
  if (randomNumber !== 5) {
    console.log(`${randomNumber} !== 5`);
    randomNumber = Math.floor(Math.random() * 10) + 1;
    counter++;
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
