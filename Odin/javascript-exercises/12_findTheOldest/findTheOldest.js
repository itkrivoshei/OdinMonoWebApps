const findTheOldest = function (people) {
  return people.reduce(function (acc, person) {
    if (!acc[0]) {
      acc[0] = person;
      return acc;
    } else if (
      (acc[0].yearOfDeath ? acc[0].yearOfDeath : new Date().getFullYear()) -
        acc[0].yearOfBirth <
      (person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear()) -
        person.yearOfBirth
    ) {
      acc[0] = person;
    }
    return acc;
  }, [])[0];
};

// Do not edit below this line
module.exports = findTheOldest;
