import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Column } from '../types';

interface TableHeadProps {
  columns: Column[];
  handleSorting: (sortField: string, sortOrder: string) => void;
}

const TableHead = ({ columns, handleSorting }: TableHeadProps) => {
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  const handleSortingChange = (accessor: string) => {
    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor }) => {
          const cl =
            sortField === accessor && order === 'asc' ? (
              <FontAwesomeIcon icon={faArrowUp} />
            ) : sortField === accessor && order === 'desc' ? (
              <FontAwesomeIcon icon={faArrowUp} rotation={180} />
            ) : (
              ''
            );
          return (
            <th key={accessor} onClick={() => handleSortingChange(accessor)}>
              {label} {cl}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
