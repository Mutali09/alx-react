import { Map, is } from 'immutable';

// Function to check if two Immutable Maps are equal
export function areMapsEqual(map1, map2) {
  return is(map1, map2);
}

// Example usage
const map1 = Map({
  firstName: 'Guillaume',
  lastName: 'Salva',
});

const map2 = Map({
  firstName: 'Guillaume',
  lastName: 'Salva',
});

console.log(areMapsEqual(map1, map2)); // Should print true

const map3 = Map({
  firstName: 'John',
  lastName: 'Doe',
});

console.log(areMapsEqual(map1, map3)); // Should print false
