import React, { useState, useEffect } from 'react';
import { getColumnsFromUserData } from '../utils';
import { User } from '../types';
import { createUseStyles } from 'react-jss';

import styles from './TableStyles';

import TableBody from './TableBody';
import TableHead from './TableHead';

interface TableProps {
  users: User[];
}
const useStyles = createUseStyles(styles);

const Table = ({ users }: TableProps) => {
  const classes = useStyles();

  const [tableData, setTableData] = useState<User[]>([]);
  const [columns, setColumns] = useState<any>([]);
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    setTableData(users);
    setSortField('');
    setOrder('asc');

    if (users.length > 0) {
      const columns = getColumnsFromUserData(users[0]);
      setColumns(columns);
    }
  }, [users]);

  const handleSorting = (sortField: string, sortOrder: string) => {
    if (!sortField) return;
    const sorted = [...tableData].sort((a: User, b: User) => {
      if (!a[sortField]) return 1;
      if (!b[sortField]) return -1;
      if (a[sortField] === null && b[sortField] === null) return 0;
      return (
        a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
          numeric: true,
        }) * (sortOrder === 'asc' ? 1 : -1)
      );
    });
    setTableData(sorted);
  };

  return (
    <div className={classes.tableContainer}>
      {users.length > 0 ? (
        tableData && (
          <table className={classes.table}>
            <TableHead
              columns={columns}
              handleSorting={handleSorting}
              sortField={sortField}
              handleSetSortField={setSortField}
              order={order}
              handleSetOrder={setOrder}
            />
            <TableBody columns={columns} tableData={tableData} />
          </table>
        )
      ) : (
        <div className={classes.noUsers}>No user matches</div>
      )}
    </div>
  );
};

export default Table;
