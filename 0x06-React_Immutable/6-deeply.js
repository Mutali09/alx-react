import { fromJS, List } from 'immutable';

// Function to deeply merge two objects into an Immutable List
export function mergeDeeplyElements(page1, page2) {
  const map1 = fromJS(page1);
  const map2 = fromJS(page2);
  const mergedMap = map1.mergeDeep(map2);
  return List(mergedMap.values());
}

// Example usage
const page1 = {
  'user-1': {
    id: 1,
    name: 'test',
    likes: {
      1: {
        uid: 1234,
      }
    }
  },
};

const page2 = {
  'user-1': {
    likes: {
      2: {
        uid: 134,
      }
    }
  },
};

console.log(mergeDeeplyElements(page1, page2).toJS()); 
// Should print List [Map {id: 1, name: 'test', likes: Map {1: Map {uid: 1234}, 2: Map {uid: 134}}}]
