import React, { useEffect, useState } from 'react';
import { getUsers } from './utils';
import { User } from './types';

import Table from './components/Table';
import Button from './components/Button';

import './App.css';

function App() {
  const [next, setNext] = useState('');
  const [previous, setPrevious] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleFetchUsers(url: string) {
    setLoading(true);
    const result = await getUsers(url);
    if (result) {
      const { next, previous, users } = result;
      setNext(next);
      setPrevious(previous);
      setUsers(users);
      setLoading(false);
    }
  }

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const result = await getUsers('https://swapi.dev/api/people/');

      if (result) {
        const { next, previous, users } = result;
        setNext(next);
        setPrevious(previous);
        setUsers(users);
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Table Title</h1>
      </div>
      {users && <Table users={users} />}
      <div>
        <Button
          label={'Previous'}
          apiUrl={previous}
          handleFetchUsers={handleFetchUsers}
          disabled={!previous || loading}
        />
        <Button
          label={'Next'}
          apiUrl={next}
          handleFetchUsers={handleFetchUsers}
          disabled={!next || loading}
        />
      </div>
      {loading && <p>Loading User Data...</p>}
    </div>
  );
}

export default App;
