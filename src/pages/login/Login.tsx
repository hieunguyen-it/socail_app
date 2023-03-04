import React from "react";
import "./login.scss";

const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          rerum quos ducimus consectetur amet esse molestiae dolorem iure
          debitis, maiores iusto libero dolor commodi recusandae voluptatem
          suscipit quia! Impedit, atque.</p>
        <span>Dont' you have an account ?</span>
        <button>Register</button>
        </div>
        <div className="right">
         <h1>Login</h1>
         <form>
           <input type="text" placeholder="Username" />
           <input type="password" placeholder="Password" />
           <button>Login</button>
         </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
