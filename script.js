// console.log(document.querySelector(".messag").textContent);
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "hello world";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value;
// document.querySelector(".guess").value = 23;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;
const displayMassage = function (massage) {
  document.querySelector(".message").textContent = massage;
};
console.log(secretNumber);

const guess = Number(document.querySelector(".guess").value);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".score").textContent = score;
    displayMassage("🔴 Not a number!");
    //Whene no number
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMassage("🎉Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //Whene player wins
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      displayMassage(guess > secretNumber ? "Too high" : "Too low");
    } else {
      displayMassage("You lost :(");
      //Whene guess i s wrong
    }
    //   } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //       document.querySelector(".message").textContent = "Too high";
    //     } else {
    //       document.querySelector(".message").textContent = "You lost :(";
    //     }
    //     //Whene too high
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //       document.querySelector(".message").textContent = "Too low";
    //     } else {
    //       document.querySelector(".message").textContent = "You lost :(";
    //     }
    //     // Whene too low
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayMassage("Start guessing...");
});
