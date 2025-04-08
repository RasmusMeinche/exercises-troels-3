"use client";

import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data') // Skift til din API-url
      .then(response => {
        if (!response.ok) {
          throw new Error('Noget gik galt med fetch!');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Tom array = kører kun én gang ved mount

  if (loading) return <p>Indlæser...</p>;
  if (error) return <p>Fejl: {error}</p>;

  return (
    <div>
      <h1>Data fra API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;