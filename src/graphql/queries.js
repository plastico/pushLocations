// eslint-disable
// this is an auto generated file. This will be overwritten

export const getThema = `query GetThema($id: ID!) {
  getThema(id: $id) {
    id
    name
    locations {
      items {
        id
        name
        latitude
        longitude
        lastupdate
      }
      nextToken
    }
  }
}
`;
export const listThemas = `query ListThemas(
  $filter: ModelThemaFilterInput
  $limit: Int
  $nextToken: String
) {
  listThemas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      locations {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getLocations = `query GetLocations($id: ID!) {
  getLocations(id: $id) {
    id
    name
    latitude
    longitude
    lastupdate
    thema {
      id
      name
      locations {
        nextToken
      }
    }
  }
}
`;
export const listLocationss = `query ListLocationss(
  $filter: ModelLocationsFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocationss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      latitude
      longitude
      lastupdate
      thema {
        id
        name
      }
    }
    nextToken
  }
}
`;
