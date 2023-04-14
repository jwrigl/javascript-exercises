const findTheOldest = function(people) {
    currentYear = 2023
    let oldestAge = 0;
    let oldestPerson = ''

    for (let i = 0; i < people.length; i++) {
        let age = people[i].yearOfDeath - people[i].yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            oldestIndex = i

        }  
    }
    console.log(oldestPerson)
    return people[oldestIndex];

     };

// Do not edit below this line
module.exports = findTheOldest;
