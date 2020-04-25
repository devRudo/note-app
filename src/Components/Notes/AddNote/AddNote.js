import React from 'react';

class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: '',
            titleError: '',
            descError: ''
        }
    }

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        }, () => {
            this.validateTitle();
        });
    }

    onDescChange = (e) => {
        this.setState({
            desc: e.target.value
        }, () => {
            this.validateDesc();
        });
    }

    validateTitle = () => {
        let { title } = this.state;
        if (title === '') {
            this.setState({
                titleError: "Title can not be left empty"
            });
            return false;
        }
        else {
            this.setState({
                titleError: ""
            });
            return true;
        }
    }

    validateDesc = () => {
        let { desc } = this.state;
        if (desc === '') {
            this.setState({
                descError: "Description can not be left empty"
            });
            return false;
        }
        else {
            this.setState({
                descError: ""
            });
            return true;
        }
    }

    submit = (e) => {
        e.preventDefault();
        if (this.validateTitle() && this.validateDesc()) {
            this.props.addNote(this.state);
        }
    }


    render() {
        return (
            <form className="form card shadow-lg p-4" onSubmit={this.submit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="title" className="d-flex justify-content-between">Title <span className="fas fa-times" style={{ cursor: "pointer" }} onClick={this.props.showAdd}></span></label>
                    <input type="text" name="title" itemID="title" className="form-control" placeholder="Add a title for this note ...." onChange={this.onTitleChange.bind(this)} autoFocus />
                    {this.state.titleError ? <span className="text-danger pl-2">{this.state.titleError}</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" name="desc" itemID="desc" className="form-control" placeholder="Add description for this note ...." onChange={this.onDescChange.bind(this)} />
                    {this.state.descError ? <span className="text-danger pl-2">{this.state.descError}</span> : null}
                </div>
                <button type="submit" className="btn btn-primary">Add Note</button>
            </form>
        );
    }
}

export default AddNote;