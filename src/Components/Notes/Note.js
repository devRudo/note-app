import React from 'react';

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showOptions: false
        }
    }

    showOptions = () => {
        this.setState({
            showOptions: !this.state.showOptions
        })
    }

    render() {
        const { id, title, desc, createdAt, updatedAt } = this.props.data;
        return (
            <div className="col-md-3 mb-4">
                <div className="card shadow-sm note rounded-lg">
                    <div className="card-body d-flex flex-column">
                        <p className="font-weight-bold d-flex justify-content-between">{title} <span className="fas fa-ellipsis-h" style={{
                            cursor: "pointer"
                        }} onClick={this.showOptions}></span></p>
                        <p>{desc}</p>
                        <div className="d-flex justify-content-between">
                            <span>{createdAt}</span>
                            <span>{updatedAt}</span>
                        </div>
                        {this.state.showOptions ? <div className="d-flex justify-content-end noteOptions position-absolute text-white rounded" id={`noteOptions${id}`}>
                            <i className="fas fa-pencil-alt p-2" onClick={() => { this.props.showEditForm(id) }}></i>
                            <i className="fas fa-trash-alt p-2" onClick={() => { this.props.showDelete(id) }}></i>
                        </div> : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Note;
