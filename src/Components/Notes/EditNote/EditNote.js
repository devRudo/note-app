import React from 'react';

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.note.title,
            desc: props.note.desc
        }
    }

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    onDescChange = (e) => {
        this.setState({
            desc: e.target.value
        });
    }

    submit = (e) => {
        e.preventDefault();
        this.props.editNote(this.state);
    }


    render() {
        return (
            <form className="form card shadow-lg p-4 editForm" onSubmit={this.submit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="title" className="d-flex justify-content-between">Title <span className="fas fa-times" style={{ cursor: "pointer" }} onClick={this.props.showEdit}></span></label>
                    <input type="text" name="title" itemID="title" className="form-control" placeholder="Add a title for this note ...." onChange={this.onTitleChange.bind(this)} value={this.state.title} autoFocus />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" name="desc" itemID="desc" className="form-control" placeholder="Add description for this note ...." onChange={this.onDescChange.bind(this)} value={this.state.desc} />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        );
    }
}

export default EditNote;