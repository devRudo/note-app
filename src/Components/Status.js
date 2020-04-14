import React from 'react'

class Status extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <div className={'alert ' + this.props.className}>
                    <p>{this.props.message}</p>
                </div>
            </div>
        )
    }
}

export default Status;