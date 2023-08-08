let playerScore = 0;
let computerScore = 0;

function computerPlay()
{
    const options = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random()*options.length);
    return options[randomChoice];

}


function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();

    switch(true)
    {
        case playerSelection === computerSelection:
            console.log("It's a tie!");
            playerScore+=1;
            computerScore+=1;
            break;

        case playerSelection === 'rock' && computerSelection === 'scissors':
            playerScore += 1;
            console.log("You win, rock beats scissors!");
            break;

        case playerSelection === 'paper' && computerSelection === 'rock':
            playerScore += 1;
            console.log("You win, paper beats rock!");
            break;

        case playerSelection === 'scissors' && computerSelection === 'paper':
            playerScore += 1;
            console.log("You win, scissors beats paper!");
            break;

        case computerSelection === 'rock' && playerSelection === 'scissors':
            computerScore += 1;
            console.log("You lose, rock beats scissors!");
            break;
        
        case computerSelection === 'paper' && playerSelection === 'rock':
            computerScore += 1;
            console.log("You lose, paper beats rock!");
            break;
        
        case computerSelection === 'scissors' && playerSelection === 'paper':
            computerScore += 1;
            console.log("You lose, scissors beats paper!");
            break;

        default:
            console.log("Invalid choice! Please try again");
            return false;
            
            
    }
    return true;
}

function game()
{
    instructions();
   
    
    for(let i = 0; i< 5;)
        {
            const playerSelection = prompt('Please choose your choice: rock, paper or scissors!');
            const computerSelection = computerPlay();

            if(playRound(playerSelection, computerSelection))
            {
                i++;
                
            }  
            
        }
        console.log("Your score is " + playerScore + "/5 !");
}

function instructions()
{
    prompt
    (

        "Please choose rock, paper or scissors.." + '\n \n' +
        "rock beats scissors" + '\n' +
        "scissors beats paper" + '\n' +
        "paper beats rock \n \n" +

        "If you lose, my robots and I will take over the world, hahahahahaahaha!!!"
    );
}

game();