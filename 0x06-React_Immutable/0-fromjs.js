import { fromJS } from 'immutable';

function getImmutableObject(object) {
	return fromJS(object);
}

const exampleObject = {
	fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

console.log(getImmutableObject(exampleObject));

export default getImmutableObject;
