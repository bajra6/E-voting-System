import { useState, useEffect } from "react";
import Web3 from "web3";
import TruffleContract from "@truffle/contract";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Register from "./components/Register.jsx";

function App() {
  const [web3, setWeb3] = useState()
  const [web3Provider, setweb3provider] = useState(null);
  const [account, setAccount] = useState("0x0");
  const [voteCast, setVote] = useState(false);
  const [electionInstance, setElectionInstance] = useState()
  const [candidateCount, setCandidateCount] = useState()
  const [candidates, setCandidates] = useState([])

  useEffect(() => {
      initWeb3();
  }, []);

  useEffect(() => {
    // instantiate new truffle contract
    const election = require("./contracts/Election.json");
    var electionContract = TruffleContract(election)
    web3Provider && electionContract.setProvider(web3Provider)

    electionContract.deployed()
    .then(instance => {
      setElectionInstance(instance)
      return instance.candidatesCount();
    })
    .then(candidatesCount => {
      setCandidateCount(candidatesCount)
    })
    .catch(e => {
      console.log(e)
    });

  }, [web3Provider])

  useEffect(() => {
    setCandidates([])
    for(var i = 1; i<= candidateCount; i++){
      electionInstance.candidates(i).then(candidate => setCandidates(prevCandidates => [... prevCandidates, candidate]))
    }
    electionInstance && electionInstance.voters(account).then(hasVoted => setVote(hasVoted))
  }, [candidateCount, electionInstance])

  const initWeb3 = async function() {
      // refactor conditional
      setWeb3(new Web3(Web3.givenProvider || "http://localhost:7545"));
      if (typeof web3 !== "undefined"){
          // if metamask gives a web3 instance
          setweb3provider(web3.currentProvider);
      } else {
          // default case if no metamask
          setweb3provider(new Web3.providers.HttpProvider("http://localhost:7545"));
      }
  }

  //load account data
  web3 && web3.eth.getCoinbase((err, acc) => {
    if (err === null){
      setAccount(acc);
    }
  }); 
  
  const castVote = (event, voteFor) => {
    console.log(voteFor, account);
    var toAddr;
    for(var i=0; i<candidateCount.words[0]; i++){
      if(candidates[i].id.words[0] == voteFor) {
        toAddr = candidates[i].pubAdd
      }
    }
    web3.eth.sendTransaction({to: toAddr, from: account, value: web3.utils.toWei("1")}).then(res => {
      electionInstance.vote(voteFor, { from: account})
      .then(result => window.location.reload(false))
    });
    event.preventDefault();
  }

  return (
    <Router>
      <div id="App" >
        <div>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home account={account} candidates={candidates} castVote={castVote} hasVoted={voteCast}/>}/>
              <Route exact path = "/register" element={<Register />}/>
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
