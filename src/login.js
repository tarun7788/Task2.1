import React from "react";
import "./style.css"


function Login() {
    return(
        
        
            <body>
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
			<div class="signup">
				<form action="/register" method="POST">
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="Name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button type="submit">Sign up</button>
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
</body>
    )
}
export default Login