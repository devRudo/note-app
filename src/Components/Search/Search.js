import React from 'react';

class Search extends React.Component {
    state = {
        searchString: ''
    }

    searchString = (e) => {
        e.preventDefault();
        this.setState({
            searchString: e.target.value
        }, () => {
            this.props.search(this.state);
        });
    }

    submit = (e) => {
        e.preventDefault();
        this.props.search(this.state);
    }
    render() {
        return (
            <form className="row mt-4 d-flex justify-content-center" onSubmit={this.submit.bind(this)}>
                <div className="input-group mb-3 col-md-4">
                    <input type="text" name="title" id="title" className="form-control border-right-0" placeholder="Search Note by title..." aria-label="Search note by title" aria-describedby="search" onChange={this.searchString.bind(this)} autoFocus />
                    <div className="input-group-append">
                        <button type="submit" className="btn border-left-0" id="search"><i className="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
        );
    }
}


export default Search;