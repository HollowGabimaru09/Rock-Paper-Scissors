function ScoreTrack({win,loss,ties}){

    return(
        <div className="scoretrack">
            <div><span className="win-score">{win}</span><h3>Wins</h3></div>
            <div><span className="loss-score">{loss}</span><h3>Losses</h3></div>
            <div><span className="tie-score">{ties}</span><h3>Ties</h3></div>
        </div>
    );
}

export default ScoreTrack