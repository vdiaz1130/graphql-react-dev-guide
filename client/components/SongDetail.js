import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
    render() {
        const {song} = this.props.data;
        console.log('props.params.id: ' + this.props.params.id);
        if (!song) {
            return <div>Loading...</div>;
        }

        return(
            <div>
                <Link to="/">
                    Back
                </Link>
                <h4>{song.title}</h4>
            </div>
        );

        //console.log(this.props);
    }
}

export default graphql(fetchSong, {
    options: (props) => {return {variables: {id: props.params.id}}}
})(SongDetail);
