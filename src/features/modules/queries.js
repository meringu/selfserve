import { gql } from '@apollo/client';

export const getModulesQuery = gql`
  query getModules($where: ModuleWhereInput, $after: Cursor, $first: ID) {
    modules(
      where: $where
      first: $first
      after: $after
      orderBy: { direction: ASC, field: NAME }
    ) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          name
          createdAt
          description
        }
      }
    }
  }
`;

export const createModuleQuery = gql`
  mutation createModule($module: CreateModule!) {
    createModule(input: $module) {
      id
      name
      createdAt
      description
    }
  }
`;

export const updateModuleQuery = gql`
  mutation updateModule($module: UpdateModule!) {
    updateModule(input: $module) {
      id
      name
      createdAt
      description
    }
  }
`;
