//player class
class Player {
  //creating playerIndex, distance and name in constructor
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }
  //getCount
  getCount(){
    //refer to databse for playerCount
    var playerCountRef = database.ref('playerCount');
    //keep on reading it over and over
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
  //update playerCount
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
//update everything else
  update(){
    //playerIndex
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
// static means that this will happen once everything else has happened
  static getPlayerInfo(){
    //refer to database for player info
    var playerInfoRef = database.ref('players');
    //repeatedly read database for player info
    playerInfoRef.on("value",(data)=>{
      //for all the player in the game
      allPlayers = data.val();
    })
  }
}