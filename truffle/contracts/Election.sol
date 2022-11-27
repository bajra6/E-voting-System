contract Election {
    // store candidate
    // read candidate
    // constructor

    // model a candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
        address pubAdd;
    }

    // store accounts already voted
    mapping(address => bool) public voters;
    // store a candidate
    // fetch a candidate
    mapping(uint => Candidate) public candidates;
    // store candidate count
    uint public candidatesCount;

    event votedEvent(uint indexed _candidateId);

    constructor (){
        addCandidate("Candidate 1", 0xcDF6D921cC8e2Eb23ac7fD845502A6dfF76d4FeC);
        addCandidate("Candidate 2", 0xcDF6D921cC8e2Eb23ac7fD845502A6dfF76d4FeC);
    }

    function addCandidate (string memory _name, address _pubAdd) public {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0, _pubAdd);
    }

    function vote (uint _candidateId) public {
        // record voter and validate vote
        require(!voters[msg.sender]); //just like if condition
        require(_candidateId>0 && _candidateId <= candidatesCount);
        voters[msg.sender] = true;
        // ^ this is meta data passed by solidity

        // update candidate vote count
        candidates[_candidateId].voteCount++;

        emit votedEvent(_candidateId);
    }
}