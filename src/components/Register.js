import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [teamName, setTeamName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, 'signups'), {
        name,
        email,
        teamName,
        timestamp: new Date(),
      });
      toast.success('Registration successful!');
      // reset form fields
      setName('');
      setEmail('');
      setTeamName('');
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Error registering. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <StyledInput
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <StyledInput
          type="text"
          placeholder="Team Name (optional)"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <StyledButton type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </StyledButton>
      </StyledForm>
    </div>
  );
};

// Styled-components
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  background-color: #f07167;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f08080;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default Register;
