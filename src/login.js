import React from "react";
import "./style.css"


function Login() {
    return(
        
        <div className='main'>
            <input type="checkbox" id="chk" aria-hidden="true"/>
            <div className='bg-white p-3 rounded w-100px '>
                <form  action="/register" method="post"  >
                    <div>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Email" className="form-control rounded-0"/>
                    </div>
                    <div>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter Password" className="form-control rounded-0"/>
                    </div>
            <button className="btn btn-success w-100" p-3>Log in</button>
            <p>You are agree to aour terms and policies</p>
            <button className='btn btn-default border w-100 bg-light'> Create Account </button>
            </form>
            </div>
            <div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
            </div>
    )
}
export default Login