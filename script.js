const $missCheck = document.getElementsByClassName("missCheck");
const $bonusCheck = document.getElementsByName("bonusCheck");
const $point = document.getElementsByClassName("pointInput");
const scoreText = document.getElementsByClassName("scoreText");
const $scoreBoard = document.getElementById("overallScore");

let scoreList = [0, 0, 0];
const totalScore = function (arr) {
  return arr.reduce(function (prev, current, i, arr) {
    return prev + current;
  });
};

let bonus = [false, false, false];

let bonusIndex = 0;
while (bonusIndex < $bonusCheck.length) {
  $bonusCheck[bonusIndex].addEventListener("click", (e) => {
    let t = e.target;
    let s = t.dataset.bonus_index;

    bonus = [false, false, false];

    if (t.checked) {
      bonus[s] = true;
    } else {
      bonus[s] = false;
    }
  });
  bonusIndex += 1;
}

let missIndex = 0;
while (missIndex < $missCheck.length) {
  $missCheck[missIndex].addEventListener("click", (e) => {
    let t = e.target;
    let s = t.dataset.miss_index;
    s = Number(s);

    if (t.checked) {
      $point[s].value = 0;
      scoreText[s].innerHTML = `${s + 1}投目 0point`;
      scoreList[s] = 0;
      $scoreBoard.innerHTML = totalScore(scoreList);
    } else {
      scoreList[s] = Number("0");
      $point[s].value = "";
      $scoreBoard.innerHTML = totalScore(scoreList);
    }
  });
  missIndex += 1;
}
