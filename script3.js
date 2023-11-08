const resetBtn = document.getElementById("resetBtn");
const input = document.getElementsByTagName("input");

resetBtn.addEventListener("click", () => {
  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
    input[i].checked = false;
    scoreList = [0, 0, 0];
    $scoreBoard.innerHTML = totalScore(scoreList);
  }
});
