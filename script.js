const target = document.querySelector(".target");
let Arr = ["developpeur", "gamer", "riche"];
let letterIndex = 0;
let wordIndex = 0;

let addLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  target.textContent = Arr[wordIndex][letterIndex];
  setTimeout(() => {
    letter = "";
  }, 1500);
};

let loopLetter = () => {
  setTimeout(() => {
    if (wordIndex >= Arr.length) {
      wordIndex = 0;
      letterIndex = 0;
      loopLetter();
    } else if (letterIndex < Arr[wordIndex].length) {
      addLetter();
      letterIndex++;
      loopLetter();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loopLetter();
      }, 2000);
    }
  }, 30);
};
loopLetter();
