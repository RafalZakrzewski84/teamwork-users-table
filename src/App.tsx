import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Outlet } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { useUsers } from './hooks/useUsers';
import Table from './components/Table';
import Button from './components/Button';

import styles from './AppStyles';

const useStyles = createUseStyles(styles);

//https://github.com/FortAwesome/react-fontawesome/issues/366
const faLinkedinInPropIcon = faLinkedin as IconProp;
const faGithubPropIcon = faGithub as IconProp;

function App() {
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const {
    loading,
    users,
    paginationNextUsers,
    paginationPreviousUsers,
    fetchUsers,
  } = useUsers('https://swapi.dev/api/people/');

  async function handleFetchUsers(url: string) {
    setSearchText('');
    fetchUsers(url);
  }

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
    <div className={classes.app}>
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <h1>User List</h1>
          <p>by SWAPI</p>
        </div>
        <div className={classes.searchContainer}>
          <input
            className={classes.input}
            id="searchInput"
            type="text"
            placeholder=" "
            value={searchText}
            onChange={handleSearchUsers}
            disabled={loading}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <label
            htmlFor="searchInput"
            style={
              isFocused || searchText.length > 0
                ? { display: 'none' }
                : undefined
            }
            className={!isFocused ? classes.label : ''}
          >
            Search users by name
          </label>
        </div>
        <div className={classes.tableContainer}>
          {loading ? (
            <div className={classes.loaderContainer}>
              <div className={classes.loader}>
                <div className={classes.spinner}></div>
                <p className={classes.loaderText}>Loading Users</p>
              </div>
            </div>
          ) : (
            users && <Table users={filteredUsers} />
          )}
        </div>
        <div className={classes.footer}>
          <div>
            <a
              id="tweet-quote"
              href="https://www.linkedin.com/in/rafal--zakrzewski/"
              target="blank"
            >
              <FontAwesomeIcon
                className={classes.icon}
                icon={faLinkedinInPropIcon}
              />
            </a>
            <a
              id="tweet-quote"
              href="https://github.com/RafalZakrzewski84"
              target="blank"
            >
              <FontAwesomeIcon
                className={classes.icon}
                icon={faGithubPropIcon}
              />
            </a>
          </div>
          <div>
            <Button
              label={'Previous'}
              apiUrl={paginationPreviousUsers}
              handleFetchUsers={handleFetchUsers}
              disabled={!paginationPreviousUsers || loading}
            />
            <Button
              label={'Next'}
              apiUrl={paginationNextUsers}
              handleFetchUsers={handleFetchUsers}
              disabled={!paginationNextUsers || loading}
            />
          </div>
        </div>
        {createPortal(
          <div id="modal">
            <Outlet />
          </div>,
          document.body,
        )}
      </div>
    </div>
  );
}

export default App;
