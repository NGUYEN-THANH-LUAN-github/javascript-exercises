let findTheOldest = function(people) {
    const lifeSpans = people.map(person => {
        return person.yearOfDeath ?
            person.yearOfDeath - person.yearOfBirth :
            (new Date()).getFullYear() - person.yearOfBirth;
    })
    const oldestIndex = lifeSpans.findIndex(lifeSpan => lifeSpan === Math.max(...lifeSpans));
    return people[oldestIndex];
}

module.exports = findTheOldest