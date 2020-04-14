import React from 'react';
import ListItem from './ListItem';
import Add from './Add';
import AddNote from './AddNote';
import EditNote from './EditNote';
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

    DeleteNote = (id) => {
        const { notes } = this.state;
        let updatedNotes = notes.filter(note => note.id !== id);
        this.setState({
            notes: updatedNotes
        });
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

    AddNote = (data) => {
        if (data.title !== '' && data.desc !== '') {
            const { notes } = this.state;
            notes.push({
                id: this.state.notes.length + 1,
                title: data.title,
                desc: data.desc,
                createdAt: Date.now(),
                updatedAt: Date.now()
            })
            this.setState({
                notes: notes,
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

    EditNote = (data) => {
        if (data.title !== '' && data.desc !== '') {
            const { notes } = this.state;
            let updatedNotes = notes.map(note => {
                if (note.id === this.state.showEditFor) {
                    note.title = data.title;
                    note.desc = data.desc;
                    note.updatedAt = Date.now();
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
        console.log(data.searchString);
        const { notes } = this.state;
        let found = notes.filter(note => note.title.toLowerCase().includes(data.searchString.toLowerCase()));
        console.log(found);
        if (found) {
            this.setState({
                notes: found
            });
        }
    }

    render() {
        const { notes } = this.state;
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
                                {notes.map((note) =>
                                    <ListItem key={note.id} data={note} deleteNote={() => { this.DeleteNote(note.id) }} showEditForm={this.showEdit} />
                                )}
                            </tbody>
                        </table>
                    </div>
                    <Add showForm={this.showAdd} />
                    {this.state.showAdd ? <AddNote addNote={this.AddNote} /> : null}
                    {this.state.showEdit ? <EditNote editNote={this.EditNote} /> : null}
                </div>
            </div>
        )
    }
}

export default List;