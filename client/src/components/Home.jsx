function Home({ account, candidates, castVote, hasVoted, votingPhase, publishResults }) {

    return(<>
    <img src="banner.png" style={{width:"99vw"}}></img>
    <div style={{padding:"3rem 5rem"}}> 
        <div style={{display: "flex", justifyContent:"space-between", alignItems:"center"}}>
            <div style={{width: "50vw"}}>
                <img style={{maxWidth:"35vw", borderRadius:"1rem"}} src="https://assets.telegraphindia.com/telegraph/2022/Jan/1641405686_election.jpg"/>
            </div>
            <div style={{width: "50vw", fontSize:"5rem", fontWeight:"bold"}}>One Nation! <br/> One Vote!</div>
        </div>
    <img src="banner2.png" style={{margin: "2rem -5rem", width:"99vw"}}></img>
        <p style={{fontSize:"1.3rem"}}>India has a parliamentary system as defined by its constitution, with power distributed between the central government and the states. The President of India is the ceremonial head of state of the country and supreme commander-in-chief for all defence forces in India.However, it is the Prime Minister of India, who is the leader of the party or political alliance having a majority in the national elections to the Lok Sabha. The Prime Minister is the leader of the executive branch of the Government of India. The Prime Minister is the chief adviser to the President of India and the head of the Union Council of Ministers.
India is regionally divided into States (and Union Territories) and each State has a Governor who is the state's head, but the executive authority rests with the Chief Minister who is the leader of the party or political alliance that has won a majority in the regional elections otherwise known as State Assembly Elections that exercises executive powers in that State. The respective State's Chief Minister has executive powers within the State and works jointly with the Prime Minister of India or their ministers on matters that require both State and Central attention. Some Union Territories also elect an Assembly and have a territorial government and other (mainly smaller) Union Territories are governed by a person appointed by the President of India.
The President of India monitors the rule of law through their appointed governors in each State and on their recommendation can take over the executive powers from the Chief Minister of the State, temporarily when the elected representatives of the State government has failed to create a peaceful environment and has deteriorated into chaos. The President of India dissolves the existing State government if necessary, and a new election is conducted.</p>
This year's contestants are, 
        <div id = "content">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Logo</th>
                    <th scope="col">Party</th>
                    <th scope="col">Name</th>
                </tr>
                </thead>
                <tbody id = "candidateResults">
                    {candidates.map((candidate, i) => {
                        console.log(candidate);
                        var id = candidate[0].words[0];
                        var name = candidate[1];
                        var votes = candidate[2].words[0];
                        var party = candidate[4]
                        var logo = candidate[5];
                        return <tr><th>{id}</th><td><img style={{height:"2rem"}} src={logo}></img></td><td>{party}</td><td>{name}</td></tr>;
                    })}
                </tbody>
            </table>
            <hr/>
            <p id="accountAddress">Your account is : {account}</p>
        </div>
    </div>
    </>
    );
}

export default Home;