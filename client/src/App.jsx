import { useState, useEffect } from "react";
import Web3 from "web3";
import TruffleContract from "@truffle/contract";
import Home from "./components/Home.jsx";

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

      // contracts && contracts.deployed().then(instance => {
      //   instance.votedEvent({}, {
      //   fromBlock: 0,
      //   toBlock: "latest"
      //   }).watch ((err, event) => {
      //   console.log("event triggered", event);
      //   // A new vote cast
      //   setVote(!voteCast);
      //   }) 
      // }); 
  }

  //load account data
  web3 && web3.eth.getCoinbase((err, acc) => {
    if (err === null){
      setAccount(acc);
    }
  }); 
  
  const castVote = (event, voteFor) => {
    console.log(voteFor, account);
    electionInstance.vote(voteFor, { from: account })
    .then(result => window.location.reload(false))
    event.preventDefault();
  }

  // load contract data
  // contracts.Election.deployed().then((instance) => {
  //   setElectionInstance(instance);
  //   return electionInstance.candidatesCount();
  // }).then((candidatesCount) => {
  //   for(var i=1; i<=candidatesCount; i++){
  //     electionInstance.candidates(i).then((candidate) => {
  //       var id = candidate[0];
  //       var name = candidate[1];
  //       var voteCount = candidate[2];
  //       setCandidates([...candidates, {id: id, name: name, voteCount: voteCount}])
  //     });
  //   }
  //   return electionInstance.voters(account);
  // }).then(hasVoted => {
  //   if (hasVoted){
  //     setVote(true)
  //   }
  // }).catch((error) => console.warn(error));

  return (
    <div id="App" >
      <div className="container">
        <Home account={account} candidates={candidates} castVote={castVote} hasVoted={voteCast}/>
      </div>
    </div>
  );
}

export default App;
