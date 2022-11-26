import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function Home({ account, candidates, castVote, hasVoted }) {

    const [voteFor, setVoteFor] = useState("--Select--")

    return(<>
        <div class="container">
            <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-push-2">
                <h1 class="text-center">Indian Election 2024</h1>
                <hr/>
                <br/>
            </div>
            </div>
        </div>

        <div id = "content">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Votes</th>
                </tr>
                </thead>
                <tbody id = "candidateResults">
                    {candidates.map((candidate, i) => {
                        var id = candidate[0].words[0];
                        var name = candidate[1];
                        var votes = candidate[2].words[0];
                        return <tr><th>{id}</th><td>{name}</td><td>{votes}</td></tr>;
                    })}
                </tbody>
            </table>
            <hr/>
            {!hasVoted?
            <form onSubmit={(event) => castVote(event, voteFor)}>
                <div>
                    <label for="candidateSelect">Select Candidate</label>
                    <select name="form-control" id="candidateSelect" value={voteFor} onChange={e => setVoteFor(e.target.value)}>
                        <option value={0}>--Select--</option>
                        {candidates.map(candidate => {
                            var id = candidate[0].words[0];
                            var name = candidate[1];
                            return <option value={id}>{name}</option>
                        })}
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Vote</button>
            </form>:<></>}

            <p id="accountAddress">Your account is : {account}</p>
        </div>
    </>
    );
}

export default Home;