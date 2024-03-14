import React, { useState, useEffect } from 'react';
import './App.css'

interface MemberData {
  members?: string[];
}

function App(){
  const [data, setData] = useState<MemberData>({});
  const accessToken = "BQBlpJ2EEaadtHQBkjoeLXeJMFCUTYwyThZb-8JpYzNuMFV_u-mMGmn2MLr7TfjhrfbcjlpfEsysGdNRCihsOez4hR8N6hz8QaOTZ1gB71vEW531WCQI2At3bdY2lj0UQ-qw6we7-K3V0PqQClbbfPOD7V2RY6Saeibf0MNfgde9UtZBVyQgPRxOGpR1gC2UpmHk2eP_56Et1fQxS9TwbuEIKxw_XI3yVMc3x2oQ-7QqAd3Fb6wHIOt3uHjYwic0ZqUeQrryQe0EFHPydq7bvf4";
  const expiresIn = 3600; // Token expiry time in seconds

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/findFollowedArtists", {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Include the access token here
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        setData(responseData);
        console.log(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Use this useEffect to refresh the access token before it expires
  useEffect(() => {
    const interval = setInterval(() => {
      // Implement your token refresh logic here
      console.log('Refreshing token...');
    }, (expiresIn - 60) * 1000); // Refresh token 60 seconds before expiry

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Your component rendering code */}
    </div>
  );
}

export default App;
