import (fromJS) from 'immutable';

export default function accessImmutableObject(object, array) {
	cons immutableObject = fromJS(object);
	return immutableObject.getIn(array);
}

//example usage
cons exampleObject = {
	name: {
          first: "Guillaume"
          last: "Salva"
	}
};

console.log(accessImmutableObject(exampleObject, ['name', 'first'])); // Should return "Guillaume"
