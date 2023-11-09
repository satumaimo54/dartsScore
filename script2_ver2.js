const multiple1 = document.getElementsByName("multiple1");
const multiple2 = document.getElementsByName("multiple2");
const multiple3 = document.getElementsByName("multiple3");

let point;
const handleMultiple = (e, s, a) => {
  point = $point[a].value;
  if (e.checked) {
    if (bonus[a]) {
      scoreList[a] = point * s * 2;
      scoreText[a].innerHTML = `${a + 1}投目 ${scoreList[a]}point`;
      $scoreBoard.innerHTML = totalScore(scoreList);
    } else {
      scoreList[a] = point * s;
      scoreText[a].innerHTML = `${a + 1}投目 ${scoreList[a]}point`;
      $scoreBoard.innerHTML = totalScore(scoreList);
    }
  }
};

let multipleIndex1 = 0;
while (multipleIndex1 < 3) {
  multiple1[multipleIndex1].addEventListener("click", (e) => {
    let t = e.target;
    let s = Number(e.target.dataset.bai);
    handleMultiple(t, s, 0);
  });
  multipleIndex1 += 1;
}

let multipleIndex2 = 0;
while (multipleIndex2 < 3) {
  multiple2[multipleIndex2].addEventListener("click", (e) => {
    let t = e.target;
    let s = Number(e.target.dataset.bai);
    handleMultiple(t, s, 1);
  });
  multipleIndex2 += 1;
}

let multipleIndex3 = 0;
while (multipleIndex3 < 3) {
  multiple3[multipleIndex3].addEventListener("click", (e) => {
    let t = e.target;
    let s = Number(e.target.dataset.bai);
    handleMultiple(t, s, 2);
  });
  multipleIndex3 += 1;
}
