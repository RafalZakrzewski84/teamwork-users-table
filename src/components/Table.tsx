import React, { useState, useEffect } from 'react';
import { getColumnsFromUserData } from '../utils';
import { User, Row } from '../types';

import TableBody from './TableBody';
import TableHead from './TableHead';

interface TableProps {
  users: User[];
}

const Table = ({ users }: TableProps) => {
  const [tableData, setTableData] = useState<User[]>([]);
  const [columns, setColumns] = useState<any>([]);

  useEffect(() => {
    setTableData(users);

    if (users.length > 0) {
      const columns = getColumnsFromUserData(users[0]);
      setColumns(columns);
    }
  }, [users]);

  const handleSorting = (sortField: string, sortOrder: string) => {
    if (!sortField) return;
    const sorted = [...tableData].sort((a: Row, b: Row) => {
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
    <div>
      {tableData && (
        <table className="table">
          <TableHead columns={columns} handleSorting={handleSorting} />
          <TableBody columns={columns} tableData={tableData} />
        </table>
      )}
    </div>
  );
};

export default Table;
