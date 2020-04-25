import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">
                    <i className="fas text-warning fa-2x fa-clipboard"></i>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ml-auto d-flex align-items-center">
                        <li className="nav-item">
                            <a className="nav-link" href="/"><i className="fas fa-2x fa-search"></i></a>
                        </li>
                        <li className="nav-item active ml-4">
                            <a className="nav-link" href="/"><i className="fas fa-2x fa-layer-group"></i></a>
                        </li>
                        <li className="nav-item ml-4">
                            <a className="nav-link" href="/"><i className="fas fa-2x fa-sync-alt"></i></a>
                        </li>
                        <li className="nav-item ml-4">
                            <a className="nav-link" href="/"><i className="fas fa-2x fa-cog"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
