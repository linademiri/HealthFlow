import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { NavLink, useNavigate } from 'react-router-dom';
import contactImage from './assets/R.jpeg';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  document.title = "Register";
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("User");
    if (user) navigate("/");
  }, [navigate]);

  const handleRegister = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    toast.dismiss();

    const today = new Date();
    const dob = new Date(dateOfBirth);
    if (dob > today) {
      toast.error('Date of Birth cannot be in the future.');
      setIsSubmitting(false);
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error('Password must be at least 6 characters, contain one uppercase letter and one special character.');
      setIsSubmitting(false);
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      setIsSubmitting(false);
      return;
    }

    const userData = {
      Username: username,
      FirstName: fullName,
      LastName: lastName,
      Email: email,
      Password: password,
      Ditelindja: dateOfBirth
    };

    try {
      const response = await axios.post(
        'https://localhost:7107/api/User/register',
        userData
      );

      const data = response.data;

      if (typeof data === "string" && data.includes("User Registered")) {
        toast.success('Registration successful! Redirecting to login...');
        navigate("/login");
      } else {
        toast.error(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-form-container" style={{
      backgroundImage: `url(${contactImage})`,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: 0, // remove padding for edge-to-edge
    }}>
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', // full width
      }}>
        <MDBCard className='p-3' style={{
          width: '100%', // full width
          margin: 0,
          borderRadius: 0, // remove rounded corners
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: 'none', // optional: remove shadow for edge-to-edge
        }}>
          <MDBCardBody className='px-4 py-3'>
            <h2 className="text-uppercase text-center mb-2" style={{ fontSize: '1.3rem' }}>Create an account</h2>
            <form onSubmit={handleRegister}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <MDBInput placeholder='Username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
                <MDBInput placeholder='Full Name' type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                <MDBInput placeholder='Last Name' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                <MDBInput placeholder='Your Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <MDBInput placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <MDBInput placeholder='Repeat your password' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <MDBInput placeholder='Date of Birth' type='date' value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />

                <MDBBtn size='lg' type='submit' style={{ width: '100%' }} disabled={isSubmitting}>
                  {isSubmitting ? 'Registering...' : 'Register'}
                </MDBBtn>
              </div>
            </form>
            <NavLink to="/LoginForm" className="text-center d-block mt-2" style={{ color: 'green', fontSize: '0.9rem' }}>
              Already have an account? Log in here
            </NavLink>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}

export default Register;
