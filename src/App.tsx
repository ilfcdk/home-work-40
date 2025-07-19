// src/App.tsx
import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { ControlledForm } from './components/ControlledForm';
import { UncontrolledForm } from './components/UncontrolledForm';

interface Post {
  id: number;
  title: string;
  body: string; // додати body
}

function App() {
  const [count, setCount] = useState(0);

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Vite + React + TypeScript</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
      </div>

      <ControlledForm />
      <UncontrolledForm />

      <h2>Posts:</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

