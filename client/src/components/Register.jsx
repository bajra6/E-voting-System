import "../css/login.css"

function Register() {
    return <div class="login-page">
                <div class="form">
                <div class="login">
                    <div class="login-header">
                    <h3>REGISTER</h3>
                    <p>Register to generate keys</p>
                    </div>
                </div>
                <form class="login-form">
                    <input type="text" placeholder="Aadhaar Number"/>
                    <input type="password" placeholder="Password"/>
                    <button>Register</button>
                    </form>
                </div>
            </div>
}

export default Register;