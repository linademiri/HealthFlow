/*import React, { useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { NavLink, useNavigate } from 'react-router-dom';
import contactImage from './assets/R.jpeg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const userData = { email, password };

        try {
            const response = await fetch('https://localhost:7107/api/User/token', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Login failed:', errorText);
                setErrorMessage('Login failed. Please check your email and password.');
                return;
            }

            const data = await response.json();
            console.log('Login successful:', data);

            // Vendos token dhe rolet në localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('refreshToken', data.refreshToken);
            localStorage.setItem('userRoles', JSON.stringify(data.roles || []));
            localStorage.setItem('email', email);

            // Redirect sipas rolit
            const roles = data.roles || [];
            if (roles.includes('Doctor')) {
                navigate('/Dashboard');
            } else if (roles.includes('Administrator')) {
                navigate('/AdminDashboard');
            } else if (roles.includes('User')) {
                navigate('/AppointmentSchedule');
            } else {
                navigate('/'); // fallback
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                width: '100vw',
                margin: 0,
                padding: 0,
                overflowX: 'hidden',
                backgroundImage: `url(${contactImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <MDBCard
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                    margin: '0 10px',
                }}
            >
                <MDBCardBody className="px-5 py-4">
                    <h2 className="text-uppercase text-center mb-3">Log In</h2>
                    <form onSubmit={handleLogin}>
                        <MDBInput
                            placeholder="Your Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <MDBInput
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        {errorMessage && (
                            <div className="text-danger mb-2">{errorMessage}</div>
                        )}

                        <MDBBtn size="lg" type="submit" style={{ width: '100%' }}>
                            Login
                        </MDBBtn>
                    </form>

                    <NavLink to="/ForgotPassword" className="text-center d-block mt-3" style={{ color: 'green' }}>
                        Forgot Password?
                    </NavLink>

                    <NavLink to="/RegisterForm" className="text-center d-block mt-2" style={{ color: 'blue' }}>
                        Don't have an account? Register here
                    </NavLink>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default LoginForm;*/

import React, { useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const FakeLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedRole, setSelectedRole] = useState('Doctor'); // Default role for testing
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        if (!email || !password) {
            setErrorMessage('Please enter email and password');
            return;
        }

        // Fake login data
        const fakeData = {
            token: 'test-token',
            refreshToken: 'refresh-token',
            roles: [selectedRole], // Doctor, Administrator, User
        };

        // Save token and roles in localStorage
        localStorage.setItem('token', fakeData.token);
        localStorage.setItem('refreshToken', fakeData.refreshToken);
        localStorage.setItem('userRoles', JSON.stringify(fakeData.roles));
        localStorage.setItem('email', email);

        // Redirect based on role
        if (fakeData.roles.includes('Doctor')) {
            navigate('/Dashboard');
        } else if (fakeData.roles.includes('Administrator')) {
            navigate('/AdminDashboard');
        } else if (fakeData.roles.includes('User')) {
            navigate('/AppointmentSchedule');
        } else {
            navigate('/');
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            width: '100vw',
            backgroundColor: '#f0f0f0'
        }}>
            <MDBCard style={{ width: '100%', maxWidth: '400px', borderRadius: '15px', padding: '20px' }}>
                <MDBCardBody>
                    <h2 className="text-center mb-3">Fake Login (Test)</h2>
                    <form onSubmit={handleLogin}>
                        <MDBInput
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mb-3"
                        />
                        <MDBInput
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mb-3"
                        />

                        {/* Dropdown to choose role for testing */}
                        <div className="mb-3">
                            <label>Select Role for Test:</label>
                            <select
                                value={selectedRole}
                                onChange={(e) => setSelectedRole(e.target.value)}
                                className="form-select"
                            >
                                <option value="Doctor">Doctor</option>
                                <option value="Administrator">Administrator</option>
                                <option value="User">User</option>
                            </select>
                        </div>

                        {errorMessage && <div className="text-danger mb-2">{errorMessage}</div>}

                        <MDBBtn type="submit" style={{ width: '100%' }}>
                            Login
                        </MDBBtn>
                    </form>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default FakeLoginForm;

