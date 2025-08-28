import React, { useEffect, useState } from 'react';
import API from '../api';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('No token found, please login again');
          return;
        }

        const res = await API.get('/protected/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });

        setUser(res.data.user);
      } catch (err) {
        setError(err.response?.data?.msg || 'Unable to fetch user profile');
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : !error ? (
        <p>Loading profile...</p>
      ) : null}
    </div>
  );
}

export default Dashboard;
