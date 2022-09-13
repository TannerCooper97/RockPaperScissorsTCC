
const userDisplay = document.createElement('h2');
userDisplay.setAttribute('id', 'userChoice');
const computerDisplay = document.createElement('h2');
computerDisplay.setAttribute('id','computerChoice')
const userScoreDisplay = document.createElement('h2');
const computerScoreDisplay = document.createElement('h2');
const resultDisplay = document.createElement('h1');
const gameGrid = document.getElementById('gameBox');
const resultInfo = document.getElementById('resultBox');
const roundInfo = document.getElementById('roundBox');
const choiceInfo = document.getElementById('choicesBox');
const scoreInfo = document.getElementById('scoreBox');
const roundWinner = document.createElement('h1');
roundWinner.setAttribute('id', 'roundWin');
const restartButton = document.createElement('button');
restartButton.setAttribute('onClick', 'window.location.reload();')
restartButton.innerHTML = "Play Again?";

roundInfo.append(roundWinner);
scoreInfo.append(userScoreDisplay, computerScoreDisplay, )
choiceInfo.append(userDisplay, computerDisplay);
resultInfo.append(resultDisplay);


const choices = ['👊', '✋', '✌️'];

let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;

const handleOnClick = (e) => {
  userChoice = e.target.id;
  userDisplay.innerHTML = 'Your choice: ' + userChoice;
  userDisplay.style.backgroundColor = 'rgb(0, 81, 255)';
  userDisplay.style.padding = '1rem';
  generateComputerChoice();
  getScore();
  getResult();
};


const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  computerChoice = randomChoice;
  computerDisplay.innerHTML = 'Their choice: ' + computerChoice;
  computerDisplay.style.backgroundColor = 'rgba(249, 46, 46, 0.983)';
  computerDisplay.style.padding = '1rem';
};


for (let i = 0; i < choices.length; i++) {
  const button = document.createElement('button');
  button.id = choices[i];
  button.innerHTML = choices[i];
  button.addEventListener('click', handleOnClick);
  gameGrid.appendChild(button);
};


const getScore = () => {
  switch (userChoice + computerChoice) {
    case '✌️✋':
    case '👊✌️':
    case '✋👊':
      userScore += 1;
      userScoreDisplay.innerHTML = `${'Your Score: ' + userScore}`;
      computerScoreDisplay.innerHTML = `${'Their Score: ' + computerScore}`;
      roundWinner.innerHTML = `Your: ${userChoice} Beats <br/>  Their: ${computerChoice}!`
      break
    case '✋✌️':
    case '✌️👊':
    case '👊✋':
      computerScore += 1;
      userScoreDisplay.innerHTML = `${'Your Score: ' + userScore}`;
      computerScoreDisplay.innerHTML = `${'Their Score: ' + computerScore}`;
      roundWinner.innerHTML = `Their: ${computerChoice} Beats <br/> Your: ${userChoice}!`
      break
    case '✋✋':
    case '✌️✌️':
    case '👊👊':
      roundWinner.innerHTML = `${computerChoice} TIE ${userChoice}`
      break
  }
};

const getResult = () => {
    function removeButtons() {
        let elem1 = document.getElementById('✋');
        let elem2 = document.getElementById('✌️');
        let elem3 = document.getElementById('👊');
        elem1.parentNode.removeChild(elem1);
        elem2.parentNode.removeChild(elem2);
        elem3.parentNode.removeChild(elem3);
        return false;
    }


    if (userScore === 2 && computerScore === 2){
        resultDisplay.innerHTML = 'Draw!'
        userScoreDisplay.innerHTML = `${'Your Score: ' + userScore}`;
        computerScoreDisplay.innerHTML = `${'Their Score: ' + computerScore}`;
        userDisplay.innerHTML = '';
        computerDisplay.innerHTML = '';
        roundWinner.innerHTML = ''
        removeButtons();
        resultInfo.append(restartButton);
    } else if (userScore === 3 && computerScore === 1 || userScore === 4 && computerScore === 0){
        resultDisplay.innerHTML = 'You win!'
        userScoreDisplay.innerHTML = `${'Your Score: ' + userScore}`;
        computerScoreDisplay.innerHTML = `${'Their Score: ' + computerScore}`;
        userDisplay.innerHTML = '';
        computerDisplay.innerHTML = '';
        roundWinner.innerHTML = ''
        removeButtons();
        resultInfo.append(restartButton);
    } else if (computerScore === 3 && userScore === 1 || computerScore === 4 && userScore === 0){
        resultDisplay.innerHTML = 'You Lose!'
        userScoreDisplay.innerHTML = `${'Your Score: ' + userScore}`;
        computerScoreDisplay.innerHTML = `${'Their Score: ' + computerScore}`;
        userDisplay.innerHTML = '';
        computerDisplay.innerHTML = '';
        roundWinner.innerHTML = ''
        removeButtons();
        resultInfo.append(restartButton);
    }

   

};
