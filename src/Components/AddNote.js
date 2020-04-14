import React from 'react'

class AddNote extends React.Component {
    state = {
        title: '',
        desc: ''
    }

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    onDescChange = (e) => {
        this.setState({
            desc: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault();
        this.props.addNote(this.state);
    }


    render() {
        return (
            <form action="/" className="form card shadow-lg p-4" onSubmit={this.submit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" itemID="title" className="form-control" placeholder="Add a title for this note ...." onChange={this.onTitleChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" name="desc" itemID="desc" className="form-control" placeholder="Add description for this note ...." onChange={this.onDescChange.bind(this)} />
                </div>
                <button type="submit" className="btn btn-primary">Add Note</button>
            </form>
        )
    }
}

export default AddNote;