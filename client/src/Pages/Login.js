import React, { useState } from 'react';
import {Link, redirect} from 'react-router-dom'
import './Login.css';

export default function Login() {
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectUrl, setRedirectUrl] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password
        };

        try {
            const response = await fetch('http://localhost:12358/returningUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);

            if (data.redirectUrl) {
                // If redirectUrl is present in the response, redirect the user
                setRedirectUrl(data.redirectUrl);
            }
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };

	if (redirectUrl) {
        return <Link to={redirectUrl} />;
    }

	return (
		<div className="login-container">
			<form onSubmit={handleLogin} className="login-form">
				<center><h2 id="login-header">ACHILLES | Sign In</h2></center>
				<div className="input-group">
					<label htmlFor="email">Email:</label>
					<input type="text" id="email" placeholder='example@domain.com'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="input-group">
					<label htmlFor="password">Password:</label>
					<input
						type="password" id="password" placeholder='Required (8 characters minimum)'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					{/* TODO: MAKE FORGOT email/PASSWORD FORM AND LINK */}
				</div>
				<Link to="/Home">
					<button type="submit">Login</button>
				</Link>
				<Link id="no-account" to="/Register">Don't have an account?</Link>
			</form>
		</div>
	);
}
