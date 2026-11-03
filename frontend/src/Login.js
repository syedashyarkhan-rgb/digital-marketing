// import React, { useState } from 'react'
// import { Link } from "react-router-dom";
// import "./Login.css"
// import { useContext } from "react";
// import AuthContext from "./AuthContext";
// import { useNavigate } from "react-router-dom";
// import  Axios  from 'axios';

// export default function Login() {
//    const [name,setName]=useState("")
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")

//      const navigate = useNavigate()


//     const {login} = useContext(AuthContext)



//     const handleLogin = () => {

//     Axios.post("http://localhost:3000/login", {
//         name,
//         email,
//         password
//     })
//     .then(res => {

//         if (res.data.success) {


//             login(res.data.token);
//             if(res.data.role === "admin"){
//                 alert("Login Success ✅");
//                   navigate("/admin");

//             }else{
//                  navigate("/dashboard");
//             }



//         } else {

//             alert("Wrong Credentials ❌");

//         }

//     })
//     .catch(err => {
//         console.log(err);
//         alert("Login Failed ❌");
//     });
// };

//   return (

//     <>
//       {/* <h2> Welcome to the Login Page </h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" /><br />
//                 <input type="text" /><br />
//                 <input type="submit" value="Sign In" />
//             </form>


//             <button onClick={handleSubmit}>Login</button> */}

//     <div className="auth-container">

//       <div className="auth-left">

//         <h1>Welcome Back!</h1>

//         <p>
//           Login to your account and continue.
//         </p>

//       </div>


//       <div className="auth-right">

//         <form className="register-form">

//           <h2>Login</h2>

//              <div className="input-group">

//             <label>Name</label>

//             <input
//               type="password"
//               placeholder="Enter your name"
//                value={name}
//               onChange={(e)=>setName(e.target.value)}
//             />

//           </div>

//           <div className="input-group">

//             <label>Email</label>

//             <input
//               type="email"
//               placeholder="Enter your email"
//                value={email}
//               onChange={(e)=>setEmail(e.target.value)}
//             />

//           </div>


//           <div className="input-group">

//             <label>Password</label>

//             <input
//               type="password"
//               placeholder="Enter your password"
//                value={password}
//               onChange={(e)=>setPassword(e.target.value)}
//             />

//           </div>


//           <button 
//           type="submit"
//           onClick={handleLogin}
//           >
//             Login
//           </button>


//           <p className="login-text">

//             Don't have an account?

//             {" "}

//             <Link to="/register">
//               Register
//             </Link>

//           </p>

//         </form>

//       </div>

//     </div>
//     </>
//   )
// }



import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import AuthContext from "./AuthContext";
import "./logins.css";

export default function Login() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {

    e.preventDefault();

    if (!name || !password) {
      alert("Please enter your name and password.");
      return;
    }

    try {

      const res = await Axios.post(
        "http://localhost:3000/login",
        {
          name,
          password
        }
      );

      if (res.data.success) {

        // Save token + user data
        login(res.data.token, res.data.user);

        alert("Login Successful ✅");

        if (res.data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }

      } else {

        alert(res.data.message || "Wrong Credentials ❌");

      }

    } catch (error) {

      console.log(error);
      alert("Login Failed ❌");

    }
  };


  return (
    <div className="register-page">

      {/* ================================
                LEFT IMAGE SECTION
            ================================= */}

      <div className="register-visual">

        <img
          src="/images/login.jpg"
          alt="Welcome Back"
        />

        <div className="visual-overlay"></div>

        <div className="visual-content">

          <span className="visual-badge">
            ✦ WELCOME BACK
          </span>

          <h1>
            Good to
            <br />
            <span>See You Again.</span>
          </h1>

          <p>
            Sign in to your account and continue
            where you left off.
          </p>

          <div className="visual-features">

            <div>
              <span>✓</span>
              Secure account access
            </div>

            <div>
              <span>✓</span>
              Access your personal dashboard
            </div>

            <div>
              <span>✓</span>
              Fast and simple login
            </div>

          </div>

        </div>

      </div>


      {/* ================================
                RIGHT LOGIN FORM
            ================================= */}

      <div className="register-form-area">

        <div className="register-form-box">

          <div className="register-header">

            <div className="logo-mark">
              ✦
            </div>

            <h2>Welcome back</h2>

            <p>
              Don't have an account?
              <Link to="/register"> Sign up</Link>
            </p>

          </div>


          <form onSubmit={handleLogin}>

            {/* NAME */}

            <div className="form-group">

              <label>Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

            </div>


            {/* PASSWORD */}

            <div className="form-group">

              <div className="password-label">

                <label>Password</label>

                <Link to="/forgot-password">
                  Forgot password?
                </Link>

              </div>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

            </div>


            {/* REMEMBER */}

            <div className="terms login-remember">

              <input
                type="checkbox"
                id="remember"
              />

              <label htmlFor="remember">
                Remember me
              </label>

            </div>


            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="register-btn"
            >
              Login
              <span>→</span>
            </button>

          </form>


          <div className="secure-text">
            🔒 Your information is securely encrypted
          </div>

        </div>

      </div>

    </div>
  );
}

