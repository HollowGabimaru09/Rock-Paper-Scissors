function Result({playerChoice,compChoice,result}){
    const resultColor = 
        result === 'You Win!!!' ? '#64ffda':
        result === 'You Loss! Better Luck Next Time.' ? '#ff6b6b' : '#57cbff';
    return(
        <div className="result-box">
      <h3>You chose: {playerChoice}</h3>
      <h3>computer chose: {compChoice}</h3>
      <div className="result-text" style={{ color: resultColor,fontSize:20, fontWeight:"bold" }}>
                {result}
            </div>
        </div>
    );
}


export default Result