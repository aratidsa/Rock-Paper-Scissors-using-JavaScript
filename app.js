/* ---------------------- pick id and class from html ------------------- */

const choices = document.querySelectorAll('.imgBtn')
const score = document.querySelector('.score')
const modal = document.querySelector('.modal-container')
const userSelect = document.querySelector('#userSelect')
const computerSelect = document.querySelector('#computerSelect')
const resultDisplay = document.querySelector('#result')
const infoDisplay = document.getElementById('info')

/* ---------------------- create a dictionary for storing user and computer scores, initialise to 0 ------------------- */

const scoreboard = {
    user:0,
    computer:0,
}

let userChoice
let computerChoice

/* ---------------------- grab the choices using foreach loop  ------------------- */

choices.forEach(choice => choice.addEventListener('click',play))

function play(e)
{   /* ---------------------- get id for user choice ie rock,paper or scissor  ------------------- */
    userChoice = e.target.id

    /* ---------------------- display user choice on the modal  ------------------- */
    userSelect.innerHTML = `
               <img src="images/${userChoice}.jpg">  `
    
     /* ---------------------- call function to generate computer choice  ------------------- */
    generateComputerChoice()

    /* ---------------------- call function to get the winner  ------------------- */
    getWinner(userChoice,computerChoice)

    /* ---------------------- display the modal  ------------------- */
    modal.style.display = 'block'
}

function generateComputerChoice()
{   /* ---------------------- get the random number between 0 to 2  ------------------- */
    const randomNumber = Math.floor(Math.random() * 3)
    
    /* ----------- assign 0 - rock , 1 - paper, 2 - scissor as computer choices and display on the modal  ------------------- */
    if(randomNumber === 0)
    {
        computerChoice = 'rock'
        computerSelect.innerHTML = `
           <img src="images/${computerChoice}.jpg">  `
    }
    else if(randomNumber === 1)
    {
        computerChoice = 'paper'
        computerSelect.innerHTML = `
          <img src="images/${computerChoice}.jpg">  `        
    }
    else
    {
        computerChoice = 'scissor'
        computerSelect.innerHTML = `
           <img src="images/${computerChoice}.jpg">  `        
    }
}

function getWinner(u,c)
{   /* ---------------------- if user choice and computer choice are same then its a draw  ------------------- */
    if(u === c)
    {
        infoDisplay.innerHTML=""
        resultDisplay.innerHTML="It's a Draw"  
        modal.style.display = 'block'
    }
     /* ---------------------- if user choice is rock and computer choice is paper then computer wins and vice versa  ------------------- */
    /* ---------------------- if computer wins increment computer score by 1 else increment user score by 1  ------------------- */
    else if( u === 'rock')
    {
        if( c === 'paper')
        {
            infoDisplay.innerHTML="Paper grabs rock"
            resultDisplay.innerHTML="Computer Won"  
            scoreboard.computer++
            modal.style.display = 'block'
        }
        else
        {   infoDisplay.innerHTML="Paper grabs rock"
            resultDisplay.innerHTML="You Won"  
            scoreboard.user++
            modal.style.display = 'block'
        }
    }
      /* ---------------------- if user choice is paper and computer choice is scissor then computer wins and vice versa ------------------- */
        /* ---------------------- if computer wins increment computer score by 1 else increment user score by 1  ------------------- */
    else if( u === 'paper')
    {
        if( c === 'scissor')
        {
            infoDisplay.innerHTML="Scissor cuts paper"
            resultDisplay.innerHTML="Computer Won"  
            scoreboard.computer++
            modal.style.display = 'block'        
        }
        else
        {
            infoDisplay.innerHTML="Scissor cuts paper"
            resultDisplay.innerHTML="You Won"  
            scoreboard.user++
            modal.style.display = 'block'  
        }
    }
    /* ---------------------- if user choice is scissor and computer choice is rock then computer wins and vice versa ------------------- */
        /* ---------------------- if computer wins increment computer score by 1 else increment user score by 1  ------------------- */
    else if( u === 'scissor')
    {
        if( c === 'rock')
        {
            infoDisplay.innerHTML="Scissor can not cut rock"
            resultDisplay.innerHTML="Computer Won"  
            scoreboard.computer++
            modal.style.display = 'block'        
        }
        else
        {
            infoDisplay.innerHTML="Scissor can not cut rock"
            resultDisplay.innerHTML="You Won"  
            scoreboard.user++
            modal.style.display = 'block'  
        }
    }
    /* ------- display the computer and user score on the grid ------------------- */

    score.innerHTML = `
            <p>User: ${scoreboard.user}</p>
            <p>Computer: ${scoreboard.computer}</p>`
}

    /* ---------------------- if you  want to play again the same game with carry forwarding the score  ------------------- */

function replay()
{   modal.style.display = 'none' 
}

  /* ---------------------- if you  want to start a new game  ------------------- */
function startGame()
{   modal.style.display = 'none' 
    scoreboard.user = 0
    scoreboard.computer = 0
    score.innerHTML = `
            <p>User: 0 </p>
            <p>Computer: 0 </p>`
}

