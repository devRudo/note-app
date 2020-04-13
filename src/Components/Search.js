import React from 'react';
import Add from './Add';

class Search extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-6">
                        <form action="/">
                            <div className="input-group mb-3">
                                <input type="text" name="title" id="title" className="form-control" placeholder="Search Note by title..." aria-label="Search note by title" aria-describedby="search" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary" id="search"><i className="fas fa-search"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Add />
                </div>
            </div>
        )
    }
}


export default Search;