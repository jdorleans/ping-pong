import gql from 'graphql-tag';

export const USERS = gql`
  query ($where: UserWhereInput, $orderBy: UserOrderByInput, $skip: Int, $after: String, $before: String, $first: Int, $last: Int) {
    users(where: $where, orderBy: $orderBy, skip: $skip, after: $after, before: $before, first: $first, last: $last) {
      id
    }
  }
`;

export const CREATE_USER = gql`
  mutation ($data: UserCreateInput!) {
    createUser(data: $data) {
      id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation ($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateUser(data: $data, where: $where) {
      id
    }
  }
`;

export const REMOVE_USER = gql`
  mutation ($where: UserWhereUniqueInput!) {
    deleteUser(where: $where) {
      id
    }
  }
`;
