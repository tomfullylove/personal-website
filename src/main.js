import random from 'lodash/random';
import range from 'lodash/range';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateLoading(number) {
  const line = document.getElementById(`terminal-line-${number}`);
  const baseText = line.textContent
  for (const _number of range(0, 3)) {
    for (const dots of range(0, 4)) {
      line.textContent = baseText + ".".repeat(dots);
      await sleep(200);
    }
  }
  line.textContent = baseText + "...";
}

async function toggleLine(number) {
  const line = document.getElementById(`terminal-line-${number}`);
    line.classList.toggle("hidden");
    await sleep(200)
}

async function runTerminal() {
  const line = document.getElementById('terminal-line-1');

  for (const char of "tomfullylove init --build") {
    line.textContent += char;
    await sleep(random(50, 200));
  }
  await sleep(200)

  for (const number of range(2, 4)) {
    await toggleLine(number);
  }

  await animateLoading(3);

  for (const number of range(4, 8)) {
    await toggleLine(number);
  }
  await sleep(200)

  for (const number of range(8, 10)) {
    await toggleLine(number);
  }
  await sleep(200)

  await toggleLine(10);
  await sleep(500)

  await toggleLine(11);
}

runTerminal();
