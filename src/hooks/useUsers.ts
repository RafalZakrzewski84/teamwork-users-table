import { useEffect, useState, useCallback } from 'react';
import { getUsers } from '../utils';
import { User } from '../types';

export function useUsers(url: string) {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [paginationNextUsers, setPaginationNextUsers] = useState('');
  const [paginationPreviousUsers, setPaginationPreviousUsers] = useState('');

  const fetchUsers = useCallback(async (url: string) => {
    setLoading(true);

    try {
      const result = await getUsers(url);

      if (result) {
        setUsers(result.users);
        setPaginationPreviousUsers(result.previous);
        setPaginationNextUsers(result.next);
        localStorage.setItem('users', JSON.stringify(result.users));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers('https://swapi.dev/api/people/');
  }, [fetchUsers]);

  return {
    loading,
    users,
    paginationNextUsers,
    paginationPreviousUsers,
    fetchUsers,
  };
}
