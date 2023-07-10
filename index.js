let scorePlayer =0;
let scoreComp=0;

function getComputerChoice() {
    min = Math.ceil(0);
    max = Math.floor(3);
    const num = Math.floor(Math.random() * (max - min)) + min
     
    if(num == 0)
    {
        return 'rock'
    }
    if(num == 1)
    {
        return 'paper'
    } 
    else(num == 2)
    {
        return 'scissors'
    }

  }
//console.log(getComputerChoice());

function playRound (playerSelection, computerSelection) {

    if (computerSelection == playerSelection) {
        return 'ничья'
    } 
    
    if (computerSelection == 'paper' && playerSelection == 'rock')
    {
        scoreComp++;
        return 'Бумага бьет камень, Вы проиграли'
    }
    
    if (computerSelection == 'paper' && playerSelection == 'scissors')
    {
        scorePlayer++;
        return 'Ножницы бьет бумагу, Вы победили'
    }
    
    if (computerSelection == 'rock' && playerSelection == 'scissors')
    {
        scoreComp++;
        return 'Камень бьет ножницы, Вы проиграли'
    }

    if (computerSelection == 'rock' && playerSelection == 'paper')
    {
        scorePlayer++;
        return 'Бумага бьет камень, Вы победили'
    }

    if (computerSelection == 'scissors' && playerSelection == 'papers')
    {
        scoreComp++;
        return 'Ножницы бьют бумагу, Вы проиграли'
    }

    if (computerSelection == 'scissors' && playerSelection == 'rock')
    {
        scorePlayer++;
        return 'Камень бьет ножницы, Вы победили'
    }

}

// function playerChoise() {
//     let hod = prompt();
//     return (hod);    
// }

function game() {
   for(let i = 0; i<5; i++){
    let xx = getComputerChoice()
    let yy = prompt();

    console.log (playRound(xx,yy))
    }

    console.log(`Компьютер ${scoreComp}`);
    console.log(`Человек ${scorePlayer}`);

    if (scoreComp>scorePlayer){
        console.log('Победил компьютер');
        
    }else if(scoreComp<scorePlayer) {
        console.log('Вы победили');
    }else console.log('Победила дружба');
}

//const playerSelection = playerChoise();
//const computerSelection = getComputerChoice();
game();


