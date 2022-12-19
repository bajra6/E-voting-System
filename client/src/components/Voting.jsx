import "../css/main.css";
import { Link } from "react-router-dom";

function Voting({ account, candidates, castVote, hasVoted, votingPhase, publishResults }) {
    return <>
    <div class="container">
        <div class="todoBlock">
        <div class="listHolder">
            <div class="list">
            <ul>
                {candidates.map((candidate, i) => {
                    console.log(candidate);
                    var id = candidate[0].words[0];
                    var name = candidate[1];
                    // var votes = candidate[2].words[0];
                    var pubAddr = candidate[3];
                    var party = candidate[4];
                    var logo = candidate[5];
                    return <li class="sam">
                        <img src ={logo} width="100px" height="100px"/>
                        &ensp; 
                        <div class="btn-primary">
                            <div style={{fontSize:"2rem"}}>{name}</div>
                            <div>{pubAddr}</div>
                        </div>
                        {votingPhase && !hasVoted?<div className = "btn-primary" style={{margin:"0 0 0 1rem"}} onClick={event => castVote(event, id)}>
                            <div style={{textAlign:"center", fontSize:"1.5rem", padding:"10px 1rem"}}>Vote</div>
                        </div>:<></>}
                    </li>
                })}       
            </ul>
            </div>
        </div>
        </div>
    {hasVoted?<div>You have Voted Already!</div>:<></>}
    {!votingPhase && !publishResults?<div>Waiting for voting phase to start.</div>:<></>}
    {publishResults?<div>Voting Phase has completed. Check results <Link style={{textDecoration:"underline" , cursor:"pointer", color: "white", margin:"0 0 0 0.5rem"}}to="/results">here</Link>!</div>:<></>}
    </div>
  </>
}

export default Voting;