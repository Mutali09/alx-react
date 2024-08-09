import { Seq } from 'immutable';

// Function to capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Function to print the best students
export function printBestStudents(grades) {
  const bestStudents = Seq(grades)
    .filter(student => student.score >= 70)
    .map(student => ({
      ...student,
      firstName: capitalize(student.firstName),
      lastName: capitalize(student.lastName),
    }))
    .toObject();

  console.log(bestStudents);
}

// Example usage
const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
  2: {
    score: 60,
    firstName: 'john',
    lastName: 'doe',
  },
  3: {
    score: 85,
    firstName: 'jane',
    lastName: 'doe',
  },
};

printBestStudents(grades); 
