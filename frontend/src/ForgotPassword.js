
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Login.css";

export default function ForgotPassword() {

    const [email, setEmail] = useState("");

    const handleForgotPassword = async (e) => {

        e.preventDefault();

        if (!email) {
            alert("Please enter your email.");
            return;
        }

        try {

            const res = await Axios.post(
                "http://localhost:3000/forgot-password",
                {
                    email
                }
            );


            if (res.data.success) {

                alert("Password reset link has been sent to your email.");

            } else {

                alert(res.data.message);

            }



        } catch (error) {

            console.log(error);

            alert("Something went wrong.");

        }
    };

    return (
        <div className="register-page">

            {/* LEFT SIDE */}
            <div className="register-visual">

                <img
                    src="/images/login.jpg"
                    alt="Forgot Password"
                />

                <div className="visual-overlay"></div>

                <div className="visual-content">

                    <span className="visual-badge">
                        ✦ ACCOUNT RECOVERY
                    </span>

                    <h1>
                        Forgot Your
                        <br />
                        <span>Password?</span>
                    </h1>

                    <p>
                        Don't worry. Enter your registered email
                        and we'll help you recover your account.
                    </p>

                    <div className="visual-features">

                        <div>
                            <span>✓</span>
                            Secure password recovery
                        </div>

                        <div>
                            <span>✓</span>
                            Temporary reset link
                        </div>

                        <div>
                            <span>✓</span>
                            Your account stays protected
                        </div>

                    </div>

                </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="register-form-area">

                <div className="register-form-box">

                    <div className="register-header">

                        <div className="logo-mark">
                            ✦
                        </div>

                        <h2>Reset your password</h2>

                        <p>
                            Enter your email to continue
                        </p>

                    </div>

                    <form onSubmit={handleForgotPassword}>

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

                        <button
                            type="submit"
                            className="register-btn"
                        >
                            Send Reset Link
                            <span>→</span>
                        </button>

                    </form>

                    <div className="forgot-back">

                        <Link to="/login">
                            ← Back to Login
                        </Link>

                    </div>

                    <div className="secure-text">
                        🔒 Your information is securely protected
                    </div>

                </div>

            </div>

        </div>
    );
}

