import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Example API
        console.log(response);
        
        const result = await response.json();
        console.log(result);
        
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
          <h1>Data Fetcher</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.slice(0, 10).map(item => (
            <li key={item.id}>{item.title}</li> 
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataFetcher;
