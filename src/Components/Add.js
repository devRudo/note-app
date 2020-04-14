import React from 'react'

class Add extends React.Component {
    render() {
        return (
            <div className="col-md-6">
                <button className="btn btn-primary float-right" onClick={() => { this.props.showForm() }} title="Add a note"><i className="fas fa-plus"></i></button>
            </div>
        )
    }
}

export default Add;
