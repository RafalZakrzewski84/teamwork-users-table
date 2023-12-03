import React from 'react';
import { Link } from 'react-router-dom';
import { User, Column } from '../types';

interface TableBodyProps {
  tableData: User[];
  columns: Column[];
}

const TableBody = ({ tableData, columns }: TableBodyProps) => {
  const renderCellContent = (user: User, accessor: string) => {
    const tData = user[accessor] !== 'unknown' ? user[accessor] : '---';
    return typeof tData === 'string' ? tData : JSON.stringify(tData);
  };

  const renderHomeworldCell = (user: User, accessor: string) => {
    const tData = user[accessor] !== 'unknown' ? user[accessor] : '---';
    const tdataToString =
      typeof tData === 'string' ? tData : JSON.stringify(tData);

    return tData === '---' ? (
      <td key={accessor}>{tData}</td>
    ) : (
      <td key={accessor}>
        <Link
          to={`planet/${user.homeworld}`}
          state={{
            userName: user.name,
            name: user.homeworld,
            data: user.planetData,
          }}
        >
          {tdataToString}
        </Link>
      </td>
    );
  };

  return (
    <tbody>
      {tableData.map(user => (
        <tr key={user.name.toString()}>
          {columns.map(({ accessor }) =>
            accessor === 'homeworld' ? (
              renderHomeworldCell(user, accessor)
            ) : (
              <td key={accessor}>{renderCellContent(user, accessor)}</td>
            ),
          )}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
