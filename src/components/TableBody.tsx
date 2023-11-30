import React from 'react';
import { User, Column } from '../types';

interface TableBodyProps {
  tableData: User[];
  columns: Column[];
}

const TableBody = ({ tableData, columns }: TableBodyProps) => {
  return (
    <tbody>
      {tableData.map(user => {
        return (
          <tr key={user.name.toString()}>
            {columns.map(({ accessor }) => {
              const tData =
                user[accessor] !== 'unknown' ? user[accessor] : '---';
              const tdataToString =
                typeof tData === 'string' ? tData : JSON.stringify(tData);
              if (accessor === 'homeworld') {
                return tData === '---' ? (
                  tData
                ) : (
                  <td key={accessor}>
                    <h4>With link {tdataToString}</h4>
                  </td>
                );
              }
              return <td key={accessor}>{tdataToString}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
