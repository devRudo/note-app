import React from 'react'

const Add = () => {
    return (
        <div className="col-md-6">
            <button className="btn btn-primary float-right" onClick={() => { this.props.showForm() }} title="Add a note"><i className="fas fa-plus"></i></button>
        </div>
    )
}

export default Add
