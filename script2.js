const multiple1 = document.getElementsByName("multiple1");
const multiple2 = document.getElementsByName("multiple2");
const multiple3 = document.getElementsByName("multiple3");

let multipleIndex1 = 0;
let point1;
while (multipleIndex1 < 3) {
  multiple1[multipleIndex1].addEventListener("click", (e) => {
    let t = e.target;
    let s = t.dataset.bai;
    s = Number(s);

    point1 = $point[0].value;
    if (t.checked) {
      if (bonus[0]) {
        scoreList[0] = point1 * s * 2;
        scoreText[0].innerHTML = `1投目 ${scoreList[0]}point`;
        $scoreBoard.innerHTML = totalScore(scoreList);
      } else {
        scoreList[0] = point1 * s;
        scoreText[0].innerHTML = `1投目 ${scoreList[0]}point`;
        $scoreBoard.innerHTML = totalScore(scoreList);
      }
    }
  });
  multipleIndex1 += 1;
}

let multipleIndex2 = 0;
let point2;
while (multipleIndex2 < 3) {
  multiple2[multipleIndex2].addEventListener("click", (e) => {
    let t = e.target;
    let s = t.dataset.bai;
    s = Number(s);

    point2 = $point[1].value;
    if (t.checked) {
      if (bonus[1]) {
        scoreList[1] = point2 * s * 2;
        scoreText[1].innerHTML = `2投目 ${scoreList[1]}point`;
        $scoreBoard.innerHTML = totalScore(scoreList);
      } else {
        scoreList[1] = point2 * s;
        scoreText[1].innerHTML = `2投目 ${scoreList[1]}point`;
        $scoreBoard.innerHTML = totalScore(scoreList);
      }
    }
  });
  multipleIndex2 += 1;
}

let multipleIndex3 = 0;
let point3;
while (multipleIndex3 < 3) {
  multiple3[multipleIndex3].addEventListener("click", (e) => {
    let t = e.target;
    let s = t.dataset.bai;
    s = Number(s);

    point3 = $point[2].value;
    if (t.checked) {
      if (bonus[2]) {
        scoreList[2] = point3 * s * 2;
        scoreText[2].innerHTML = `3投目 ${scoreList[2]}point`;
        $scoreBoard.innerHTML = totalScore(scoreList);
      } else {
        scoreList[2] = point3 * s;
        scoreText[2].innerHTML = `3投目 ${scoreList[2]}point`;
        $scoreBoard.innerHTML = totalScore(scoreList);
      }
    }
  });
  multipleIndex3 += 1;
}
