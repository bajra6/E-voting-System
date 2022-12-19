function Results({ account, candidates, castVote, hasVoted, votingPhase, publishResults }) {
    return <>
    {publishResults?<div class="container">
        <div class="todoBlock">
            <div class="listHolder">
                <div class="list">
                <ul>
                    {candidates.map((candidate, i) => {
                        console.log(candidate);
                        var id = candidate[0].words[0];
                        var name = candidate[1];
                        var votes = candidate[2].words[0];
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
                            {publishResults?<div className = "btn-primary" style={{margin:"0 0 0 1rem"}} onClick={event => castVote(event, id)}>
                                <div style={{textAlign:"center", fontSize:"1.5rem", padding:"10px 1rem"}}>{votes}</div>
                            </div>:<></>}
                        </li>
                    })}       
                </ul>
                </div>
            </div>
        </div>
    </div>:<div>Results not generated. Wait for election to end!</div>}
    </>
}

export default Results;