import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Column } from '../types';

interface TableHeadProps {
  columns: Column[];
  sortField: string;
  handleSetSortField: (sortField: string) => void;
  order: string;
  handleSetOrder: (order: string) => void;
  handleSorting: (sortField: string, sortOrder: string) => void;
}

const TableHead = ({
  columns,
  sortField,
  handleSetSortField,
  order,
  handleSetOrder,
  handleSorting,
}: TableHeadProps) => {
  const handleSortingChange = (accessor: string) => {
    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    handleSetSortField(accessor);
    handleSetOrder(sortOrder);
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
