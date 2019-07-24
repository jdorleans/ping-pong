import gql from 'graphql-tag';

export const RESULTS = gql`
  query ($where: ResultWhereInput, $orderBy: ResultOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    results(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      id
      sets
      isDeuce
      scores
      winner
    }
  }
`;

export const CREATE_RESULT = gql`
  mutation ($data: ResultCreateInput!) {
    createResult(data: $data) {
      id
    }
  }
`;

export const UPDATE_RESULT = gql`
  mutation ($data: ResultUpdateInput!, $where: ResultWhereUniqueInput!) {
    updateResult(data: $data, where: $where) {
      id
    }
  }
`;

export const REMOVE_RESULT = gql`
  mutation ($where: ResultWhereUniqueInput!) {
    deleteResult(where: $where) {
      id
    }
  }
`;
