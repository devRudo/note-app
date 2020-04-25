import React from 'react';

const ListItem = (props) => {
    const { id, title, desc, createdAt, updatedAt } = props.data;
    const rank = props.index;
    return (
        <tr>
            <th scope="row">{rank}</th>
            <td>{title}</td>
            <td>{desc}</td>
            <td>{createdAt}</td>
            <td>{updatedAt}</td>
            <td>
                <i className="fas fa-2x fa-edit text-primary" onClick={() => { props.showEditForm(id) }}></i>
                <i className="fas fa-2x fa-trash-alt text-danger" onClick={() => { props.showDelete(id) }}></i>
            </td>
        </tr>
    );
}

export default ListItem;
