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
        string party;
        string logo;
    }

    // store accounts already voted
    mapping(address => bool) public voters;
    // store a candidate
    // fetch a candidate
    mapping(uint => Candidate) public candidates;
    // store candidate count
    uint public candidatesCount;

    bool public votingPhase;
    bool public publishResult; 

    event votedEvent(uint indexed _candidateId);

    constructor (){
        addCandidate("Narendra Modi", 0x63fA335F89e13929eCF90d3AC4988ef222cEDe2E, "BJP", "https://www.bing.com/th?id=OIP.Dlvn1297Qm15AKvgJhH9ggHaHa&w=206&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2");
        addCandidate("Rahul Gandhi", 0xcF765a745A3Aa36126179eBd67FcfAD82354B6d8, "Congress", "https://upload.wikimedia.org/wikipedia/commons/6/63/Indian_National_Congress_hand_logo.png");
        addCandidate("Eknath Shinde", 0xe203649B3a327F87F66bdA271c42F7F150B8f660, "Shiv Sena", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Logo_of_Shiv_Sena.svg/1024px-Logo_of_Shiv_Sena.svg.png");
        addCandidate("Jayalalitha", 0x75E1eaC1DFE306F4cdD2d55C2Dea692902B2DB54, "AIADMK", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Indian_Election_Symbol_Two_Leaves.svg/270px-Indian_Election_Symbol_Two_Leaves.svg.png");
    }

    function addCandidate (string memory _name, address _pubAdd, string memory _party, string memory _logo) public {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0, _pubAdd, _party, _logo );
    }

    modifier onlyBy(address _account) {
        require(msg.sender == _account);
        _;
    }

    function startVoting() public onlyBy(0x8147f34eA0A08Ac904BF99C70c64e5069C97a35d){
        votingPhase = true;
        publishResult = false;
    }

    function publishResults() public onlyBy(0x8147f34eA0A08Ac904BF99C70c64e5069C97a35d){
        votingPhase = false;
        publishResult = true;
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