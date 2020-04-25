import React from 'react';

const DeleteNote = (props) => {
    return (
        <div className="delete card shadow-lg">
            <div className="card-body">
                Make sure you want to delete ?
                </div>
            <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-primary" onClick={() => { props.cancel() }}>No</button>
                <button className="btn btn-danger" onClick={() => { props.delete() }}>Yes</button>
            </div>
        </div>
    );
}

export default DeleteNote;
