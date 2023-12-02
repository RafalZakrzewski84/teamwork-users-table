import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Outlet } from 'react-router-dom';
import { getUsers } from './utils';
import { User, Result } from './types';

import Table from './components/Table';
import Button from './components/Button';

import './App.css';

function App() {
  const [next, setNext] = useState('');
  const [previous, setPrevious] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleResult = useCallback((result: Result) => {
    const { next, previous, users } = result;

    const storedUsers = window.localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      setUsers(users);
    }

    setNext(next);
    setPrevious(previous);
  }, []);

  const fetchUsers = useCallback(
    async (url: string) => {
      setLoading(true);
      const result = await getUsers(url);

      if (result) {
        window.localStorage.setItem('users', JSON.stringify(result.users));
        handleResult(result);
      }

      setLoading(false);
    },
    [handleResult],
  );

  async function handleFetchUsers(url: string) {
    fetchUsers(url);
  }

  useEffect(() => {
    fetchUsers('https://swapi.dev/api/people/');
  }, [fetchUsers]);

  const handleSearchUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      if (typeof user.name === 'string') {
        return user.name.toLowerCase().indexOf(searchText) !== -1;
      }
      return false;
    });
  }, [users, searchText]);

  return (
    <div className="App">
      <div>
        <h1>Table Title</h1>
      </div>
      <div>
        <input
          value={searchText}
          onChange={handleSearchUsers}
          disabled={loading}
        />
      </div>
      <div>{users && <Table users={filteredUsers} />}</div>
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
      {createPortal(
        <div id="modal">
          <Outlet />
        </div>,
        document.body,
      )}
    </div>
  );
}

export default App;
