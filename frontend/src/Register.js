// import React, { useState } from 'react'
// import { Link } from "react-router-dom";
// import "./Login.css"
// import  Axios  from 'axios';


// export default function Register() {
//   const [name,setName]=useState("")
//   const [email,setEmail]=useState("")
//   const [password,setPassword]=useState("")

//   const handleRegister = () => {
// 		Axios.post("http://localhost:3000/userregister", {
// 			name,
// 			password,
// 			email
// 		})
// 		.then(res => {
// 			if (res.data.success) {
// 				alert("Registered ✅");
// 			}
// 		});
// 	};

//   return (
//    <>
//      <div className="auth-container">

//       {/* LEFT SIDE */}
//       <div className="auth-left">

//         <h1>Welcome!</h1>

//         <p>
//           Create your account and get started with us.
//         </p>

//       </div>


//       {/* RIGHT SIDE */}
//       <div className="auth-right">

//         <form className="register-form">

//           <h2>Create Account</h2>

//           {/* NAME */}
//           <div className="input-group">

//             <label>Full Name</label>

//             <input
//               type="text"
//               placeholder="Enter your full name"
//               value={name}
//               onChange={(e)=>setName(e.target.value)}
//             />

//           </div>


//           {/* EMAIL */}
//           <div className="input-group">

//             <label>Email</label>

//             <input
//               type="email"
//               placeholder="Enter your email"
//                value={email}
//               onChange={(e)=>setEmail(e.target.value)}
//             />

//           </div>


//           {/* PASSWORD */}
//           <div className="input-group">

//             <label>Password</label>

//             <input
//               type="password"
//               placeholder="Enter your password"
//                value={password}
//               onChange={(e)=>setPassword(e.target.value)}
//             />

//           </div>
    
//           {/* REGISTER BUTTON */}
//           <button 
//           type="submit"
//           onClick={handleRegister}
//           >
//             Register
//           </button>


//           {/* LOGIN LINK */}
//           <p className="login-text">

//             Already have an account?

//             {" "}

//             <Link to="/login">
//               Login
//             </Link>

//           </p>

//         </form>

//       </div>

//     </div>
//    </>
//   )
// }


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import "./Login.css";

export default function Register() {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        if (
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword
        ) {
            alert("Please fill all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        try {

            const res = await Axios.post(
                "http://localhost:3000/userregister",
                {
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword
                }
            );

            if (res.data.success) {
                alert("Account created successfully! ✅");
                navigate("/login");
            } else {
                alert(res.data.message);
            }

        } catch (error) {
            console.log(error);
            alert("Registration failed.");
        }
    };

    return (
        <div className="register-page">

            {/* LEFT IMAGE SECTION */}
            <div className="register-visual">

                <img
                    src="/images/register.jpg"
                    alt="Create Account"
                />

                <div className="visual-overlay"></div>

                <div className="visual-content">
                    <span className="visual-badge">
                        ✦ JOIN OUR COMMUNITY
                    </span>

                    <h1>
                        Start Your
                        <br />
                        <span>Journey Today.</span>
                    </h1>

                    <p>
                        Create your account and unlock a better
                        experience with us.
                    </p>

                    <div className="visual-features">
                        <div>
                            <span>✓</span>
                            Easy & secure registration
                        </div>

                        <div>
                            <span>✓</span>
                            Access your personal dashboard
                        </div>

                        <div>
                            <span>✓</span>
                            Your data stays protected
                        </div>
                    </div>
                </div>

            </div>


            {/* RIGHT FORM SECTION */}
            <div className="register-form-area">

                <div className="register-form-box">

                    <div className="register-header">

                        <div className="logo-mark">
                            ✦
                        </div>

                        <h2>Create an account</h2>

                        <p>
                            Already have an account?
                            <Link to="/login"> Log in</Link>
                        </p>

                    </div>


                    <form onSubmit={handleRegister}>

                        {/* NAME ROW */}
                        <div className="name-row">

                            <div className="form-group">
                                <label>First Name</label>

                                <input
                                    type="text"
                                    placeholder="First name"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                            </div>


                            <div className="form-group">
                                <label>Last Name</label>

                                <input
                                    type="text"
                                    placeholder="Last name"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                            </div>

                        </div>


                        {/* EMAIL */}
                        <div className="form-group">
                            <label>Email address</label>

                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                            />
                        </div>


                        {/* PASSWORD */}
                        <div className="form-group">
                            <label>Password</label>

                            <input
                                type="password"
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />

                            <small>
                                Must be at least 6 characters
                            </small>
                        </div>


                        {/* CONFIRM PASSWORD */}
                        <div className="form-group">
                            <label>Confirm Password</label>

                            <input
                                type="password"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                        </div>


                        {/* TERMS */}
                        <div className="terms">
                            <input type="checkbox" required />

                            <p>
                                I agree to the{" "}
                                <span>Terms & Conditions</span>{" "}
                                and{" "}
                                <span>Privacy Policy</span>.
                            </p>
                        </div>


                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="register-btn"
                        >
                            Create Account
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


