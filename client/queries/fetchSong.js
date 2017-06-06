import gql from 'graphql-tag';

export default gql`
    query GetSongByID($id: ID!) {
        song(id: $id) {
            id
            title
        }
    }
`;
