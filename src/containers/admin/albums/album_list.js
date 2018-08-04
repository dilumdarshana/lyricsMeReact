import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { selectAlbums, selectGetAlbumsError } from './../selectors';
import { getAllAlbums } from './../actions';

class AlbumList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllAlbums();
    }

    componentWillReceiveProps(np) {
        console.log('calling componentWillReceiveProps...');
    }

    render() {
        return (
            <h2>Album List</h2>
            
        );
    }
}

AlbumList.propTypes = {
    albums: PropTypes.array,
    error: PropTypes.object
};

AlbumList.defaultProps = {
    albums: [],
    error: null
};

const mapStateToProps = createStructuredSelector({
    albums: selectAlbums(),
    error: selectGetAlbumsError()
});

const mapDispatchToProps = (dispatch) => ({
    getAllAlbums: () => {
        dispatch(getAllAlbums());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
