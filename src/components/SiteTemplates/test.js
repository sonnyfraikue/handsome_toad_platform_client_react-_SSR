var player1 = 0;
var player2 = 1;
var scorerArray = [{'player1':0},{'player2':0}]

var score = 0;


while (score < 55) {
var scorer = Math.random()
if(scorer > 0.5){
    scorerArray['player2'] + 15;
}else{
    scorerArray['player1'] + 15;
}
    score = score +15;
    console.log(`scorer ${scorer} scored ${score}` )
    if(score > 40){
        console.log(`scorer ${scorer} wins`)
    }
}

