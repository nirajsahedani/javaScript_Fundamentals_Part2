function calcAverage(score1, score2, score3) {
  let avgScore = (score1 + score2 + score3) / 3;
  return avgScore;
}

/*
//Test data 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
*/

//Test data 2
let avgDolphins = calcAverage(85, 54, 41);
let avgKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgScoreDolphins, avgScoreKoalas) {
  if (avgScoreDolphins > avgScoreKoalas * 2) {
    console.log("Dolphin is winner");
  } else if (avgScoreKoalas > avgScoreDolphins * 2) {
    console.log("Koalas is winner");
  } else {
    console.log("No team is wins");
  }
};

checkWinner(avgDolphins, avgKoalas);
