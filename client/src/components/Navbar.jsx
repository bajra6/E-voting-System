import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function Navbar() {

    const style = {
        backgroundColor: "#328f8a",
        backgroundImage: "linear-gradient(45deg,#328f8a,#08ac4b)",
        position:"absolute", 
        top:"0", 
        left:"0", 
        display:"flex", 
        justifyContent:"space-between", 
        alignItems:"center",
        padding: "1rem 0",
        width:"100vw"
    };

    return <div className='navbar' style={style}>
        <div style={{padding:"0 0 0 2rem", display: "flex", alignItems:"center"}}>
            <img style={{height:"2rem"}} src='https://upload.wikimedia.org/wikipedia/commons/1/17/Ashoka_Chakra.svg'></img>
            <div style={{margin:"0 0 0 1rem", fontSize:"1.5rem"}}>Indian Elections 2024</div>
        </div>
        <div style={{padding:"0 2rem 0 0"}}>
            <Link style={{textDecoration:"none", cursor:"pointer", color: "white", margin:"0 1rem 0 0"}}to="/">Home</Link>
            <Link style={{textDecoration:"none", cursor:"pointer", color: "white", margin:"0 0 0 1rem"}}to="/results">Results</Link>
        </div>
    </div>    
}

export default Navbar;