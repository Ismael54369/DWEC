type Ranking = [number, string, boolean];

let position: number;
let playerName: string;
let finishedGame: boolean;
let ranking: Ranking;
let hallOfFame: Array<Ranking> = [];

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

function printRankings(rankings: Array<Ranking>): void {
    for (let ranking of rankings) {
        console.log(ranking);
    }
}

printRankings(hallOfFame);