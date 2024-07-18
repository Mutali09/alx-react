import { List, Map } from 'immutable';

// Function to concatenate two arrays into an Immutable List
export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

// Function to merge two objects into an Immutable List
export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  const mergedMap = map1.merge(map2);
  return List(mergedMap.values());
}

const object1 = {a: 1, b: 2, c: 3};
const object2 = {b: 20, d: 4};
console.log(mergeElements(object1, object2));
