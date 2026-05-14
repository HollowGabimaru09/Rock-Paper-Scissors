import Header from './components/Header'
import Game from './components/Game'
import './styles/app.css'
import { useState } from 'react';
import Result from './components/Result';
import ScoreTrack from './components/ScoreTrack';

function getComputerChoice (){
  const choices = ['Rock','Paper','Scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}



function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [compChoice, setCompChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [win, setWin] = useState(0);
  const [loss, setLoss] = useState(0);
  const [ties, setTies] = useState(0);
 
  function handlePlayerChoice(choice){
    const computer = getComputerChoice();
    setPlayerChoice(choice);
    setCompChoice(computer);
    if(choice === computer){
        setResult('You tied!');
        setTies(prev => prev + 1);
    }
    else if((choice === 'Rock' && computer === 'Paper')||
    (choice === 'Paper' && computer === 'Scissors')||
    (choice === 'Scissors' && computer === 'Rock'))
    {
      setResult('You Loss! Better Luck Next Time.');
      setLoss(prev => prev + 1);
    }
    else{
      setResult("You Win!!!");
      setWin(prev => prev + 1);
    }
  }

  function handleReset(){
  setPlayerChoice(null);
  setCompChoice(null);
  setResult(null);
  setWin(0);
  setLoss(0);
  setTies(0);
}

  return (
    <div className='app-container'>
      <Header/>
      <ScoreTrack 
        win ={win}
        loss={loss}
        ties={ties}
      />
      <Game onChoiceSelect = {handlePlayerChoice}/>
      <Result 
        playerChoice = {playerChoice}
        compChoice = {compChoice}
        result={result}
      />
      <button className='reset' onClick={()=> handleReset()}>Reset</button>
    </div>
  );
}



export default App
