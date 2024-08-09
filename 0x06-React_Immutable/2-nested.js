import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
	const immutableObject = fromJS(object);
	return immutableObject.getIn(array);
}

//example usage
const exampleObject = {
	name: {
          first: "Guillaume"
          last: "Salva"
	}
};

console.log(accessImmutableObject(exampleObject, ['name', 'first'])); // Should return "Guillaume"
