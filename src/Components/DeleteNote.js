import React from 'react'

class DeleteNote extends React.Component {
    render() {
        return (
            <div className="delete card shadow-lg">
                <div className="card-body">
                    Make sure you want to delete ?
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={() => { this.props.cancel() }}>No</button>
                    <button className="btn btn-danger" onClick={() => { this.props.delete() }}>Yes</button>
                </div>
            </div>
        )
    }
}

export default DeleteNote;