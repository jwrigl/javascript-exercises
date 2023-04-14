const findTheOldest = function(people) {
    currentDate = Date();
    currentYear = currentDate.getFullYear;
    let oldestAge = 0;
    let oldestPerson = ''
    console.log(people.yearOfBirth)

    for (let i = 0; i < people.length-1; i++) {
        let age = people.yearOfBirth - people.yearOfDeath;
        console.log(age)
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = people.name;
            console.log(oldestPerson);

        }  
    }
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
