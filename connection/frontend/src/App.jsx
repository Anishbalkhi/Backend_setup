import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  // ✅ useEffect should have a dependency array to avoid infinite re-renders
  useEffect(() => {
    axios
      .get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // empty dependency array means this runs once on mount

  return (
    <>
      <h1>anis project</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id || index}>
          {/* ✅ Fix JSX to use actual values, not string literals */}
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
