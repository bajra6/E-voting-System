import "../css/login.css"

function Login(params) {
    return <div class="login-page">
                <div class="form">
                <div class="login">
                    <div class="login-header">
                    <h3>LOGIN</h3>
                    <p> Login in To cast Vote</p>
                    </div>
                </div>
                <form class="login-form">
                    <input type="text" placeholder="Aadhaar Number"/>
                    <input type="password" placeholder="password"/>
                    <button>login</button>
                    </form>
                </div>
            </div>
}

export default Login;