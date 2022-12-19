import "../css/main.css"

function Voting({ account, candidates, castVote, hasVoted, votingPhase, publishResults }) {
    return <div class="container">
    <div class="todoBlock">
      <div class="listHolder">
        <div class="list">
          <ul>
            <li class="sam">
              <img src ="https://www.bing.com/th?id=OIP.Dlvn1297Qm15AKvgJhH9ggHaHa&w=206&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width="100px" height="100px"/>
              &ensp; 
              <div class="btn-primary">
                <div style={{fontSize:"2rem"}}>Narendra Modi</div>
                <div>0x8D95293Fb0E281d9BDc44E53CFa6dAc2E16285e0</div>
              </div>
            </li>
            <li class="sam">
              <img class="listimag" src ="https://upload.wikimedia.org/wikipedia/commons/6/63/Indian_National_Congress_hand_logo.png" width="100px" height="100px"/>
              &ensp;
              <div class="btn-primary">
                <div style={{fontSize:"2rem"}}>Rahul Gandhi</div>
                <div>0x8D95293Fb0E281d9BDc44E53CFa6dAc2E16285e0</div>
              </div>
            </li>
            <li class="sam">
              <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Logo_of_Shiv_Sena.svg/1024px-Logo_of_Shiv_Sena.svg.png" width="100px" height="100px"/>
              &ensp;
              <div class="btn-primary">
                <div style={{fontSize:"2rem"}}>Eknath Shinde</div>
                <div>0x8D95293Fb0E281d9BDc44E53CFa6dAc2E16285e0</div>
              </div>
            </li>
            <li class="sam">
              <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_various_Republican_Parties_of_India.svg/1024px-Flag_of_various_Republican_Parties_of_India.svg.png" width="100px" height="100px"/>
              &ensp;
              <div class="btn-primary">
                <div style={{fontSize:"2rem"}}>Jayalalitha</div>
                <div>0x8D95293Fb0E281d9BDc44E53CFa6dAc2E16285e0</div>
              </div>
            </li>           
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default Voting;