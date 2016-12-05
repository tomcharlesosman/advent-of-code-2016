const fs = require('fs');
const data = fs.readFileSync(__dirname + '/../data/day1.txt', 'utf8');

function calcBlockDistance () {
  const steps = data.split(',');
  let x = 0;
  let y = 0;
  let d = [0, 1];

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i].trim();
    const direction = step.charAt(0);
    const distance = +step.substr(1);
    d = direction === 'L' ? [d[1], -d[0]] : [-d[1], d[0]];
    x += distance * d[0];
    y += distance * d[1];
  }
  console.log(Math.abs(x) + Math.abs(y));
  return Math.abs(x) + Math.abs(y);
}

module.exports = {
  calcBlockDistance
};
