import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
    state = {
        notes: [
            {
                id: 1,
                title: 'First',
                desc: 'This is first note',
                createdAt: Date.now(),
                updatedAt: Date.now()
            },
            {
                id: 2,
                title: 'Second',
                desc: 'This is second note',
                createdAt: Date.now(),
                updatedAt: Date.now()
            },
            {
                id: 3,
                title: 'Third',
                desc: 'This is third note',
                createdAt: Date.now(),
                updatedAt: Date.now()
            },
            {
                id: 4,
                title: 'Fourth',
                desc: 'This is fourth note',
                createdAt: Date.now(),
                updatedAt: Date.now()
            },
            {
                id: 5,
                title: 'Fifth',
                desc: 'This is fifth note',
                createdAt: Date.now(),
                updatedAt: Date.now()
            },
        ]
    }
    render() {
        const { notes } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Desciption</th>
                                    <th scope="col">Created At</th>
                                    <th scope="col">Updated At</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notes.map((note) =>
                                    <ListItem key={note.id} data={note} />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default List;