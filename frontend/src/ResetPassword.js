
import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Axios from "axios";
import "./Login.css";

export default function ResetPassword() {

    const { token } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleResetPassword = async (e) => {

        e.preventDefault();

        if (!password || !confirmPassword) {
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
                `https://digital-marketing-l4y5.vercel.app/reset-password/${token}`,
                {
                    password,
                    confirmPassword
                }
            );

            if (res.data.success) {

                alert("Password reset successfully! ✅");

                navigate("/login");

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
                    alt="Reset Password"
                />

                <div className="visual-overlay"></div>

                <div className="visual-content">

                    <span className="visual-badge">
                        ✦ PASSWORD RESET
                    </span>

                    <h1>
                        Create a
                        <br />
                        <span>New Password.</span>
                    </h1>

                    <p>
                        Choose a strong password to keep
                        your account safe and secure.
                    </p>

                    <div className="visual-features">

                        <div>
                            <span>✓</span>
                            Secure password reset
                        </div>

                        <div>
                            <span>✓</span>
                            Password encrypted
                        </div>

                        <div>
                            <span>✓</span>
                            Secure account access
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

                        <h2>Create new password</h2>

                        <p>
                            Enter your new password below
                        </p>

                    </div>

                    <form onSubmit={handleResetPassword}>

                        <div className="form-group">

                            <label>New Password</label>

                            <input
                                type="password"
                                placeholder="Enter new password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />

                            <small>
                                Must be at least 6 characters
                            </small>

                        </div>

                        <div className="form-group">

                            <label>Confirm Password</label>

                            <input
                                type="password"
                                placeholder="Confirm new password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />

                        </div>

                        <button
                            type="submit"
                            className="register-btn"
                        >
                            Reset Password
                            <span>→</span>
                        </button>

                    </form>

                    <div className="forgot-back">

                        <Link to="/login">
                            ← Back to Login
                        </Link>

                    </div>

                    <div className="secure-text">
                        🔒 Your password is securely encrypted
                    </div>

                </div>

            </div>

        </div>
    );
}

