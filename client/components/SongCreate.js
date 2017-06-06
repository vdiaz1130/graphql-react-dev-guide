import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Link, hashHistory} from 'react-router';

import {graphql} from 'react-apollo';
import fetchSongsQuery from '../queries/fetchSongs'

class SongCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {title: ''};
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{
                query: fetchSongsQuery,
            }]
        })
        .then(() => hashHistory.push('/'))
        .catch((resp) => console.log(resp));
    }

    render() {
        return (
            <div>
                <Link to="/">
                    Back
                </Link>
                <h4>Create a new Song</h4>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Song Title:</label>
                    <input
                        onChange={event => this.setState({title: event.target.value})}
                        value={this.state.title}
                     />
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation AddSong($title:String) {
        addSong(title: $title) {
            id
            title
        }
    }
`;

export default graphql(mutation)(SongCreate);
