import React, { useState, useEffect } from 'react';
import './App.css'

interface MemberData {
  members?: string[];
}

function App(){
  const [data, setData] = useState<MemberData>({});

  useEffect(() => {
    fetch("http://127.0.0.1:5000/redirect")
    //typescript用不了proxy （按照原来的tutorial)
      .then(res => res.json())
      .then(
        (response) => {
          setData(response);
          console.log(response);
        }
      )
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {typeof data.members === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
    </div>
  );
}

export default App;