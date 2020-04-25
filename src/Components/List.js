import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListItem from './ListItem';
import Add from './Add';
import AddNote from './AddNote';
import EditNote from './EditNote';
import DeleteNote from './DeleteNote';
import Status from './Status';
import Search from './Search';

class List extends React.Component {
    state = {
        showAdd: false,
        showEdit: false,
        showEditFor: 0,
        error: false,
        message: '',
        showStatus: false,
        className: '',
        showDelete: false,
        showDeleteFor: 0,
        searchString: '',
        notes: [
            {
                id: uuidv4(),
                title: 'First',
                desc: 'This is first note',
                createdAt: Date().split('GMT')[0], // getting the idea from siddiah
                updatedAt: Date().split('GMT')[0]
            },
            {
                id: uuidv4(),
                title: 'Second',
                desc: 'This is second note',
                createdAt: Date().split('GMT')[0],
                updatedAt: Date().split('GMT')[0]
            },
            {
                id: uuidv4(),
                title: 'Third',
                desc: 'This is third note',
                createdAt: Date().split('GMT')[0],
                updatedAt: Date().split('GMT')[0]
            },
            {
                id: uuidv4(),
                title: 'Fourth',
                desc: 'This is fourth note',
                createdAt: Date().split('GMT')[0],
                updatedAt: Date().split('GMT')[0]
            },
            {
                id: uuidv4(),
                title: 'Fifth',
                desc: 'This is fifth note',
                createdAt: Date().split('GMT')[0],
                updatedAt: Date().split('GMT')[0]
            },
        ]
    }

    showAdd = () => {
        this.setState({ showAdd: !this.state.showAdd });
    }

    showEdit = (id) => {
        this.setState({
            showEdit: !this.state.showEdit,
            showEditFor: id
        });
    }

    showDelete = (id) => {
        this.setState({
            showDelete: !this.state.showDelete,
            showDeleteFor: id
        });
    }

    deleteNote = () => {
        const { notes } = this.state;
        let updatedNotes = notes.filter(note => note.id !== this.state.showDeleteFor);
        this.setState({
            notes: updatedNotes,
            showDelete: !this.state.showDelete
        });
    }

    cancelDelete = () => {
        this.setState({
            showDelete: !this.state.showDelete
        });
    }

    addNote = (data) => {
        if (data.title && data.desc) {
            const { notes } = this.state;
            let updatedNotes = notes.concat({
                id: uuidv4(),
                title: data.title,
                desc: data.desc,
                createdAt: Date().split('GMT')[0],
                updatedAt: Date().split('GMT')[0]
            })
            this.setState({
                notes: updatedNotes,
                className: "alert-success",
                message: "Added Successfully",
                showAdd: false,
                showStatus: true
            });
        }
        else {
            this.setState({
                className: "alert-danger text-center",
                message: "Fields can not be empty",
                showAdd: false,
                showStatus: true
            });
        }
        setTimeout(() => {
            this.setState({
                showStatus: false
            })
        }, 2000);
    }

    editNote = (data) => {
        if (data.title !== '' && data.desc !== '') {
            const { notes } = this.state;
            let updatedNotes = notes.map(note => {
                if (note.id === this.state.showEditFor) {
                    note.title = data.title;
                    note.desc = data.desc;
                    note.updatedAt = Date().split('GMT')[0];
                }
                return note;
            });
            this.setState({
                notes: updatedNotes,
                className: "alert-success",
                message: "Updated Successfully",
                showEdit: false,
                showStatus: true
            });
        }
        else {
            this.setState({
                className: "alert-danger text-center",
                message: "Fields can not be empty",
                showEdit: false,
                showStatus: true
            });
        }
        setTimeout(() => {
            this.setState({
                showStatus: false
            })
        }, 2000);
    }

    search = (data) => {
        this.setState({
            searchString: data.searchString
        });
    }

    render() {
        let { notes } = this.state;
        if (this.state.searchString) {
            notes = notes.filter(note => note.title.toLowerCase().includes(this.state.searchString.toLowerCase()));
        }
        return (
            <div className="container">
                <Search search={this.search} />
                <div className="row">
                    {this.state.showStatus ? < Status className={this.state.className} message={this.state.message} /> : null}
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
                                {notes.map((note, index) =>
                                    <ListItem key={note.id} index={index + 1} data={note} showDelete={this.showDelete} showEditForm={this.showEdit} />
                                )}
                            </tbody>
                        </table>
                    </div>
                    <Add showForm={this.showAdd} />
                    {this.state.showAdd ? <AddNote addNote={this.addNote} /> : null}
                    {this.state.showEdit ? <EditNote editNote={this.editNote} note={notes.find(note => note.id === this.state.showEditFor)} /> : null}
                    {this.state.showDelete ? <DeleteNote delete={this.deleteNote} cancel={this.cancelDelete} /> : null}
                </div>
            </div>
        );
    }
}

export default List;