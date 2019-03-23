// eslint-disable
// this is an auto generated file. This will be overwritten

export const createThema = `mutation CreateThema($input: CreateThemaInput!) {
  createThema(input: $input) {
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
export const updateThema = `mutation UpdateThema($input: UpdateThemaInput!) {
  updateThema(input: $input) {
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
export const deleteThema = `mutation DeleteThema($input: DeleteThemaInput!) {
  deleteThema(input: $input) {
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
export const createLocations = `mutation CreateLocations($input: CreateLocationsInput!) {
  createLocations(input: $input) {
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
export const updateLocations = `mutation UpdateLocations($input: UpdateLocationsInput!) {
  updateLocations(input: $input) {
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
export const deleteLocations = `mutation DeleteLocations($input: DeleteLocationsInput!) {
  deleteLocations(input: $input) {
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
