var position;
var playerName;
var finishedGame;
var ranking;
var hallOfFame = [];
position = 1;
playerName = "Bruno Krebs";
finishedGame = true;
ranking = [position, playerName, finishedGame];
hallOfFame.push(ranking);
position = 2;
playerName = "Maria Helena";
finishedGame = true;
ranking = [position, playerName, finishedGame];
hallOfFame.push(ranking);
function printRankings(rankings) {
    for (var _i = 0, rankings_1 = rankings; _i < rankings_1.length; _i++) {
        var ranking_1 = rankings_1[_i];
        console.log(ranking_1);
    }
}
printRankings(hallOfFame);
