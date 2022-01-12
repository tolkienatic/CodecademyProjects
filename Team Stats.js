

const team = {
  _players: [
    {
    firstName:'Abby',
    lastName:'Erceg',
    age:31,
    },
    {
    firstName:'Casey',
    lastName:'Murphy',
    age:25
    },
    {
    firstName:'Cari',
    lastName:'Roccaro',
    age:27
    }
  ],
  _games: [
    {
      opponent:'Chicago Red Starts',
      teamPoints:1,
      opponentPoints:1
    },
    {
      opponent:'OL Reign',
      teamPoints:1,
      opponentPoints:2
    },
    {
      opponent: 'Houston Dash',
      teamPoints:5,
      opponentPoints:2
    }
  ],
  get players() {
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName,lastName,age){
    let newPlayer = {
      firstName: firstName,
      lastName: lastName,
      age: age};
    this._players.push(newPlayer)
    },
  addGame(opponent,teamPoints,opposingPoints){
    let newGame = {
      opponent: opponent,
      teamPoints: teamPoints,
      opposingPoints: opposingPoints};
    this._games.push(newGame)
  }
}
team.addPlayer('Steph','Curry','28');
team.addPlayer('Lisa','Leslie','44');
team.addPlayer('Bugs','Bunny','76');
console.log(team.players)
team.addGame('Orlando Pride',5,0)
team.addGame('Utah Royals',1,1)
team.addGame('Washington Spirit',2,1)
console.log(team.games)
