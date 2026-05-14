import rockImg from '../assets/rock.png'
import paperImg from '../assets/paper.png'
import scissorsImg from '../assets/scissors.png'


function Game({onChoiceSelect}){
    // function HandleButton(btnName){
    //     alert(btnName+" was clicked");
    // }

    return(
        <div className="Card">
                <div style={{textAlign:'center'}}>
                    <button className="btn" onClick={() => onChoiceSelect('Rock')} >
                        <img
                            src={rockImg}
                            alt="rock"
                            width="100px"
                        />
                    </button>
                    <p style={{color:'#8892b0',marginTop:'8px'}}>Rock</p>
                </div>

                <div style={{textAlign:'center'}}>
                    <button className="btn" onClick={() => onChoiceSelect('Paper')}>
                        <img
                            src={paperImg}
                            alt="paper"
                            width="100px"
                        />
                    </button>
                    <p style={{color:'#8892b0',marginTop:'8px'}}>Paper</p>
                </div>

                <div style={{textAlign:'center'}}>
                    <button className="btn" onClick={() => onChoiceSelect('Scissors')}>
                        <img
                            src={scissorsImg}
                            alt="scissors"
                            width="100px"
                        />
                    </button>
                    <p style={{color:'#8892b0',marginTop:'8px'}}>Scissors</p>
                </div>
            </div>
    );
}




export default Game