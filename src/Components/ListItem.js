import React from 'react';

class ListItem extends React.Component {

    render() {
        const { id, title, desc, createdAt, updatedAt } = this.props.data;
        return (
            <tr>
                <th scope="row">{id}</th>
                <td>{title}</td>
                <td>{desc}</td>
                <td>{createdAt}</td>
                <td>{updatedAt}</td>
                <td>
                    <i className="fas fa-2x fa-edit text-primary" onClick={() => { this.props.showEditForm(id) }}></i>
                    <i className="fas fa-2x fa-trash-alt text-danger" onClick={() => { this.props.deleteNote() }}></i>
                </td>
            </tr>
        )
    }
}

export default ListItem;