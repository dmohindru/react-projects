import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export const Callback: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const authorizationCode = searchParams.get('code');

    if (authorizationCode) {
      const pkceCodeVerifier = sessionStorage.getItem('pkce_code_verifier');

      // Exchange the authorization code for an access token
      axios
        .post(
          'http://localhost:8080/oauth2/token',
          new URLSearchParams({
            grant_type: 'authorization_code',
            code: authorizationCode,
            redirect_uri: 'http://localhost:3000/callback',
            client_id: 'frontend-react-app',
            code_verifier: pkceCodeVerifier!,
          }),
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        )
        .then((response) => {
          const { access_token, refresh_token } = response.data;
          // Save tokens in storage or handle accordingly
          console.log('Access Token:', access_token);
          console.log('Refresh Token:', refresh_token);
          navigate('/app');
        })
        .catch((error) => {
          console.error('Token exchange failed:', error);
        });
    }
  }, [location, navigate]);

  return <div>Processing...</div>;
};
