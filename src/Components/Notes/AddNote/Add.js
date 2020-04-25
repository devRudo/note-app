import React from 'react';

const Add = (props) => {
    return (
        <div className="col-md-12 d-flex justify-content-center">
            <button className="btn btn-primary float-right text-uppercase" onClick={() => { props.showForm() }} title="Add a note"><i className="fas fa-plus"></i> Add a note</button>
        </div>
    );
}

export default Add;
