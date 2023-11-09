const resetBtn = document.getElementById("resetBtn");
const input = document.getElementsByTagName("input");

resetBtn.addEventListener("click", () => {
  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
    input[i].checked = false;
  }
  scoreList = [0, 0, 0];
  bonus = [false, false, false];
  $scoreBoard.innerHTML = totalScore(scoreList);
  for (let i = 0; i < scoreText.length; i++) {
    scoreText[i].innerHTML = `${i + 1}投目 ${scoreList[i]}`;
  }
});
