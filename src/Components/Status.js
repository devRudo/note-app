import React from 'react';

const Status = (props) => {
    return (
        <div className="col-md-12">
            <div className={'alert ' + props.className}>
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default Status;
