const findTheOldest = function(people) {
  return people.reduce((currOldest, person) => {
    person.yearOfDeath ??= new Date(Date.now()).getFullYear();
    currOldest.yearOfDeath ??= new Date(Date.now()).getFullYear();

    let currOldestAge = currOldest.yearOfDeath - currOldest.yearOfBirth;
    let personAge = person.yearOfDeath - person.yearOfBirth;

    return currOldestAge < personAge ? person : currOldest;
  })
};

// Do not edit below this line
module.exports = findTheOldest;
