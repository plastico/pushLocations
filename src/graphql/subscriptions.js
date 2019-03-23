// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateThema = `subscription OnCreateThema {
  onCreateThema {
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
export const onUpdateThema = `subscription OnUpdateThema {
  onUpdateThema {
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
export const onDeleteThema = `subscription OnDeleteThema {
  onDeleteThema {
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
export const onCreateLocations = `subscription OnCreateLocations {
  onCreateLocations {
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
export const onUpdateLocations = `subscription OnUpdateLocations {
  onUpdateLocations {
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
export const onDeleteLocations = `subscription OnDeleteLocations {
  onDeleteLocations {
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
