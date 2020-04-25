import React from 'react';

const Add = (props) => {
    return (
        <div className="col-md-6">
            <button className="btn btn-primary float-right" onClick={() => { props.showForm() }} title="Add a note"><i className="fas fa-plus"></i></button>
        </div>
    );
}

export default Add;
