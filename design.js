var list = [0, 1, 2, 3, 4, 6, "w"];
var teams = ["srh", "rcb"];
var num = list.ri;
var team1 = 0;
var w1 = 0;
var team2 = 0;
var w2 = 0;
var p1scores = [];
var p2scores = [];
var i = 0;
var j = 0;
var rtoss = teams[Math.floor(Math.random() * 2)];
alert(rtoss+" WON THE TOSS");
function superover() {
  if (rtoss == "rcb") {
    document.getElementById("BATTING").value = "RCB BATS !";
    bat();
  } else {
    document.getElementById("BATTING").value = "SRH BATS !";
    bat2();
  }
}
var countball = 0;
function bat() {
  if(team2<team1 && team2!=0){
    result();
  }
  else{


  if (countball < 6 && w1 < 2) {
    var ri = list[Math.floor(Math.random() * 7)];
    console.log(ri);
    p1scores.push(ri);
    var p1_score = document.getElementById("player1").children;
    p1_score[i].textContent = ri;
    if (ri == "w") {
      w1++;
    } else {
      team1 += ri;
      document.getElementById("R_score").textContent = team1;
    }
    countball++;
    i++;
  } 
  else {
    rtoss = "srh";
    if(team2!=0){
        result();
    }
  }
}
}

var countball2 = 0;

function bat2() {
  if(team1<team2 && team1!=0){
    result();
  }
  else{

  
  if (countball2 < 6 && w2 < 2) {
    var ri = list[Math.floor(Math.random() * 7)];
    console.log(ri);
    p2scores.push(ri);
    var p2_score = document.getElementById("player2").children;
    p2_score[j].textContent = ri;
    if (ri == "w") {
      w2++;
    } else {
      team2 += ri;
      document.getElementById("S_score").textContent = team2;
    }
    countball2++;
    j++;
  } else {
    rtoss ="rcb";
    if(team1!=0){
        result();
    }
  }
}
}

function result(){
    if(team1==team2){
        document.getElementById("res").textContent ="MATCH DRAW !!";
    }
    else if(team1>team2){
        document.getElementById("res").textContent ="RCB WINS !!";
    }
    else{
        document.getElementById("res").textContent ="SRH WINS !!";
    }
}
