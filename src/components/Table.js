import React from 'react';
import { EditList } from 'components/EditButton';

function Table({ lists, updateState, handleEdit, handleDelete,setList }) {
  return (
    <table>
      {lists.map(current => (
        updateState === current.id ? (
          <EditList current={current} lists={lists} setList={setList} />
        ) : (
          <tr key={current.id}>
            <td>{current.name}</td>
            <td>{current.price}</td>
            <td>
              <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
              <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
            </td>
          </tr>
        )
      ))}
    </table>
  );
}

export default Table;


